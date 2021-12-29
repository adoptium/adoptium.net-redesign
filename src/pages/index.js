import * as React from "react"
import { withPrefix, Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
	  <section id="home" className="home" style={{ backgroundImage: `url(${withPrefix('/images/banner-bg.svg')})`}} >
        <div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="main-banner my-3">
						<div className="d-sm-flex justify-content-between">
							<div data-aos="zoom-in-up" className="aos-init aos-animate">
								<div className="my-5 banner-title">
									<h1 className="text-white">
										Prebuilt OpenJDK
										<br/>
										Binaries for Free!
									</h1>
								</div>
								<p className="mt-3 text-white">
								Java™ is the world's leading programming language and platform.
								The Adoptium Working Group promotes and supports high-quality, TCK certified
								runtimes and associated technology for use across the Java™ ecosystem.
								Eclipse Temurin is the name of the OpenJDK distribution from Adoptium.
								</p>
								<Link to="/join" className="btn btn-lg btn-primary m-3">Join the Working group</Link>
								<Link to="/members" className="btn btn-lg btn-secondary m-3">View our members</Link>
							</div>
							<div className="m-5">
								<StaticImage
									src="../images/gatsby-astronaut.png"
									width={800}
									quality={95}
									formats={["AUTO", "WEBP"]}
									alt="A Gatsby astronaut"
									className="img-fluid"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </section>
  </Layout>
)

export default IndexPage
