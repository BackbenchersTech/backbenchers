import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import Spacer from '../components/spacer'
import {
  animateBorder,
  heroContainer,
  graphic,
  logos,
  logoItem,
  logosWrap,
  sectionWrapper,
  smallcaps,
  text,
  trustedByWrap,
  visual,
} from './index.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <Spacer />
      <section>
        <div className={'text-align-center ' + heroContainer}>
          <h2 className="title">
            Bridging{' '}
            <span className={animateBorder}>functionality and imagination</span>
          </h2>
        </div>
      </section>

      <section className="global-margin-l">
        <div className={sectionWrapper}>
          <div className={text}>
            <h2 className="global-title-m">Unified experience</h2>
            <p>
              Offering tailored services to help you build modern business
              applications, from design to implementation to support.
            </p>
            <p>If you can imagine it, we can build it!</p>
          </div>

          <div className={visual}>
            <StaticImage
              src="../images/image1.jpeg"
              alt="A group of people collaborating in a workspace."
              className={graphic}
            />
          </div>
        </div>
      </section>

      <section className="global-margin-l">
        <div className={sectionWrapper}>
          <div className={text}>
            <h2 className="global-title-m">End to end experts</h2>
            <p>
              From strategy and go-live to support, we guide you through every
              phase of your digital transformation.
            </p>
          </div>

          <div className={visual}>
            <StaticImage
              src="../images/image2.jpeg"
              alt="A group of people collaborating over designing an application"
              className={graphic}
            />
          </div>
        </div>

        <div className={trustedByWrap}>
          <span className={smallcaps}>Trusted by teams at</span>

          <div className={logosWrap}>
            <div className={logos}>
              <div className={logoItem}>
                <StaticImage
                  src="../images/logo1.svg"
                  alt="Data Meaning"
                  width={190}
                  height={36}
                />
              </div>
              <div className={logoItem}>
                <StaticImage
                  src="../images/logo2.png"
                  alt="Data Meaning"
                  width={170}
                  height={22}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
