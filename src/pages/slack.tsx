import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const JoinPage = () => (
  <Layout>
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-8 col-md-8 mx-auto">
          <h1 className="fw-light text-4xl pb-3">Join our Slack channel!</h1>
        </div>
        <form
          action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdxrFvVu49Nx0zQKZAfHe_43H3H6BOhRiRXayQjjAmlbnSJfg/formResponse"
          method="post"
          target="_blank"
        >
          <div className="form-group">
            <label>
              Email address<br />
              <input
                autoComplete="email"
                name="emailAddress"
                placeholder="Your email"
                type="email"
                className="formInput"
                required
              />
            </label>
            <br />
            <button className="bg-transparent   border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[180px] h-[48px] rounded-[80px] gradient-border" type="submit">
              Invite Me!
            </button>
          </div>
        </form>
      </div>
    </section>
  </Layout>
)

export default JoinPage

export const Head = () => <Seo title="Slack Signup" />

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
