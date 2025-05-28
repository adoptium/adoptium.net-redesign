import React from "react"
import { expect, vi } from "vitest"

import "@testing-library/jest-dom"

import "vitest-axe/extend-expect"
import * as axeMatchers from "vitest-axe/matchers"

// Mock Date to a fixed value for consistent snapshots
const mockDate = new Date('2025-05-27T00:00:00.000Z')

// Create a global Date mock that doesn't interfere with vi.useFakeTimers()
const OriginalDate = global.Date

global.Date = class extends OriginalDate {
  constructor(...args: any[]) {
    if (args.length === 0) {
      super(mockDate.getTime())
    } else {
      super(...args)
    }
  }

  static now() {
    return mockDate.getTime()
  }
} as DateConstructor

vi.stubGlobal("jest", vi)

expect.extend(axeMatchers)

const mdxMock = number => {
  return {
    node: {
      id: `mock-id-${number}`,
      fields: {
        slug: `/mock-slug-${number}`,
      },
      frontmatter: {
        title: `Mock Title ${number}`,
        description: `Mock Description ${number}`,
        date: "2021-01-01",
        tags: ["mock-tag-1", "release-notes"],
      },
    },
  }
}

vi.mock("gatsby", async () => {
  const gatsby = await vi.importActual<typeof import("gatsby")>("gatsby")

  const mockUseStaticQuery = {
    site: {
      siteMetadata: {
        title: "Sample Title",
        description: "Sample Description",
        siteUrl: "https://sample.com",
      },
    },
    mostRecentLts: {
      version: 1,
    },
    mostRecentFeatureVersion: {
      version: 24,
    },
    downloadCount: {
      total: 1000000,
    },
    allMdx: {
      edges: [mdxMock(1), mdxMock(2), mdxMock(3), mdxMock(4)],
    },
    allVersions: {
      edges: [
        {
          node: {
            id: "mock-id-1",
            version: 1,
            label: "1 - LTS",
            lts: true,
          },
        },
        {
          node: {
            id: "mock-id-2",
            version: 2,
            label: "2",
            lts: false,
          },
        },
      ],
    },
    avatar: {
      edges: [
        {
          node: {
            name: "pmc",
            childImageSharp: {
              gatsbyImageData: {
                layout: "fixed",
                images: {
                  fallback: {
                    src: "https://sample-images.com/pmc.png",
                  },
                },
              },
            },
          },
        },
      ],
    },
    mdx: {
      frontmatter: {
        author: "pmc",
      },
    },
  }

  return {
    ...gatsby,
    graphql: vi.fn(),
    StaticQuery: vi.fn(),
    useStaticQuery: vi.fn().mockImplementation(() => mockUseStaticQuery),
    Slice: vi
      .fn()
      .mockImplementation(({ alias }) =>
        React.createElement("div", { className: `slice--${alias}` }),
      ),
    navigate: vi.fn(),
  }
})

vi.mock("gatsby-plugin-image", async () => {
  const plugin = await vi.importActual<typeof import("gatsby-plugin-image")>(
    "gatsby-plugin-image",
  )

  const mockImage = ({ imgClassName, imgStyle, ...props }: any) => {
    return React.createElement("img", {
      className: imgClassName,
      stlye: imgStyle,
      alt: "Mock Image",
      ...props,
    })
  }

  const mockPlugin = {
    ...plugin,
    GatsbyImage: vi.fn().mockImplementation(mockImage),
    StaticImage: vi.fn().mockImplementation(mockImage),
  }

  return mockPlugin
})

vi.mock("@gatsbyjs/reach-router", async () => {
  return {
    useLocation: () => ({
      pathname: "/",
    }),
  }
})

vi.mock("react-world-flags", async () => {
  return {
    default: () => "Flag",
  }
})

vi.mock("gatsby-plugin-react-i18next", async () => {
  return {
    Link: vi.fn().mockImplementation(({ to, getProps, ...rest }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      }),
    ),
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: {
        changeLanguage: async () => await new Promise(() => {}),
      },
    }),
    useI18next: () => ({
      language: "en",
      languages: ["en", "en-GB", "es", "de", "zh-CN"],
      changeLanguage: async () => await new Promise(() => {}),
    }),
    Trans: () => "Text",
  }
})

type SwiperProps = {
  children: React.ReactNode
}

vi.mock("swiper/react", () => ({
  Swiper: React.forwardRef<HTMLDivElement, SwiperProps>(({ children }, ref) => {
    // Create a mock swiper object with an init method
    const mockSwiper = {
      init: () => vi.fn(),
      update: () => vi.fn(),
      slideNext: () => vi.fn(),
      slidePrev: () => vi.fn(),
    }

    // Use a callback ref to assign the mock swiper object to the ref
    React.useEffect(() => {
      if (ref && typeof ref !== "function") {
        ;(ref as React.MutableRefObject<any>).current = { swiper: mockSwiper }
      }
    }, [ref])

    return <div data-testid="Swiper">{children}</div>
  }),
  SwiperSlide: ({ children }) => (
    <div data-testid="SwiperSlide">{children}</div>
  ),
}))

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock)

/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
global.matchMedia =
  global.matchMedia ||
  function (query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      // Legacy API
      addListener: function () {},
      removeListener: function () {},
      // Modern API used by MUI v6
      addEventListener: function () {},
      removeEventListener: function () {},
      dispatchEvent: function () {
        return false;
      },
    };
  }
