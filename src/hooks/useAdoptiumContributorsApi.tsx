import { useEffect, useState } from "react"
import axios from "axios"

// List of repos that will be checked for contributions
const repositories = [
  "temurin-build",
  "ci-jenkins-pipelines",
  "infrastructure",
  "aqa-tests",
  "adoptium.net",
  "api.adoptium.net",
  "containers",
  "installer",
  "STF",
  "run-aqa",
  "TKG",
  "aqa-test-tools",
  "aqa-systemtest",
  "bumblebench",
  "jenkins-helper",
]

// List of users to exclude from random contributor
const excludedContributors = [
  "dependabot-preview[bot]",
  "dependabot[bot]",
  "github-actions[bot]",
  "eclipse-temurin-bot",
]

const randomValue = list => {
  return list[Math.floor(Math.random() * list.length)]
}

let repoToCheck = randomValue(repositories)

const CONTRIBUTORS_API_URI = `https://api.github.com/repos/adoptium/${repoToCheck}/contributors?per_page=1`

/**
 * Parses "Link" response header from node/contributors API
 * Returns page values for "next" and "last" API URLs
 * @param linkHeader
 */
function linkParser(linkHeader: string): {
  [keu: string]: {
    url: string
    page: number
  }
} {
  const regex = /<([^?]+\?per_page=1&[a-z]+=([\d]+))>;[\s]*rel="([a-z]+)"/g
  let array: RegExpExecArray | null = null
  const object = {}

  do {
    array = regex.exec(linkHeader)

    if (array) {
      object[array[3]] = {
        url: array[1],
        page: parseInt(array[2], 10),
      }
    }
  } while (array !== null)

  return object
}

/**
 * Retrieves max amount of contributors for Adoptium repos.
 * Returns array with random contributor index and max contributors found.
 */
async function getMaxContributors(): Promise<[number, number]> {
  // this call is used to know how many contributors there are in this repo
  // check the Link header to compute first and last
  const linksHeaderValue = await axios
    .get(CONTRIBUTORS_API_URI)
    .then(function (response) {
      return response.headers.get("Link")
    })
    .catch(function (error) {
      return undefined
    })

  if (linksHeaderValue) {
    const links = linkParser(linksHeaderValue)

    const randomPage =
      Math.floor(Math.random() * Math.floor(links.last.page)) + 1

    return [randomPage, links.last.page]
  }

  throw new Error("Failed to get amount if max contributors")
}

/**
 * Retrieves a contributor's object by it's index in API
 * only return 'type: User' to filter out Bot
 * @param randomPage
 */
async function getContributor(randomPage: number): Promise<Contributor | null> {
  const contributor = await axios
    .get(`${CONTRIBUTORS_API_URI}&page=${randomPage}`)
    .then(function (response) {
      return response.data[0] as ContributorApiResponse
    })
    .catch(function (error) {
      return undefined
    })

  if (!contributor) {
    return null
  }

  return {
    avatarUri: contributor.avatar_url,
    commitsListUri: `https://github.com/adoptium/${repoToCheck}/commits?author=${contributor.login}`,
    repo: repoToCheck,
    contributionsCount: contributor.contributions,
    login: contributor.login,
    profileUri: contributor.html_url,
  }
}

/**
 * Calls relative APIs and returns random contributor for Node.js main repo.
 * Trying to store cached data in localStorage in order to do less consequent requests
 */
async function fetchRandomContributor() {
  let maxContributors: number | null = null
  let fetchDate: number | null = null
  let needToRefetch = false
  const ONE_MONTH_MS = 2592000000

  const wlsMaxContributors = `${repoToCheck}_max_contributors`
  const wlsFetchDate = `${repoToCheck}_fetch_date`

  if (window.localStorage) {
    const maxContributorsStored =
      window.localStorage.getItem(wlsMaxContributors)
    const fetchDateStored = window.localStorage.getItem(wlsFetchDate)

    maxContributors = maxContributorsStored
      ? parseInt(maxContributorsStored, 10)
      : null
    fetchDate = fetchDateStored ? parseInt(fetchDateStored, 10) : null
  }

  if (fetchDate && Date.now() - fetchDate >= ONE_MONTH_MS) {
    needToRefetch = true
  }

  // If localStorage and data is less than 1 month old, fetch 1 time
  try {
    if (maxContributors && !needToRefetch) {
      return await getContributor(
        Math.floor(Math.random() * Math.floor(maxContributors)) + 1,
      )
    }
    const [randomPage, lastPage] = await getMaxContributors()

    let contributor = await getContributor(randomPage)
    while (excludedContributors.includes(contributor.login)) {
      contributor = await getContributor(randomPage)
    }

    if (window.localStorage) {
      window.localStorage.setItem(wlsFetchDate, String(Date.now()))
      window.localStorage.setItem(wlsMaxContributors, String(lastPage))
    }

    return contributor
  } catch {
    return null
  }
}

export function useAdoptiumContributorsApi(
  isVisible: boolean,
): Contributor | null {
  const [contributor, setContributor] = useState<Contributor | null>(null)
  useEffect(() => {
    if (isVisible) {
      (async () => {
        setContributor(await fetchRandomContributor())
      })()
    }
  }, [isVisible])

  return contributor
}

export interface ContributorApiResponse {
  login: string
  id: number
  url: string
  type: string
  contributions: number
  /* eslint-disable camelcase */
  node_id: string
  avatar_url: string
  gravatar_id: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  site_admin: boolean
  /* eslint-enable camelcase */
}

export interface Contributor {
  avatarUri: string
  profileUri: string
  login: string
  contributionsCount: number
  commitsListUri: string
  repo: string
}
