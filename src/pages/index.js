import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ColumnLayout } from '../components/ColumnLayout'
import { CopySection } from '../components/CopySection'
import { RowLayout } from '../components/RowLayout'
import { Section } from '../components/Section'
import { SectionContainer } from '../components/SectionContainer'
import Layout from '../components/layout'
import {
  imageBg,
  logoItem,
  logos,
  logosWrap,
  section_pageHeader,
  smallcaps,
  trustedByWrap,
} from './index.module.scss'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta
          content="Backbenchers offers tailored services to build modern business applications."
          name="description"
        />
        <title>backbenchers | Home</title>
        <link rel="canonical" href="https://gobackbenchers.com" />
      </Helmet>

      <Layout>
        <Section theme="dark" bgImage={<div className={imageBg}></div>}>
          <SectionContainer className={section_pageHeader}>
            <ColumnLayout data-columns="3,1">
              <CopySection
                variant="hero"
                title="Bridging functionality and imagination"
                body="Digital transformation, one customer at a time."
              />
            </ColumnLayout>
          </SectionContainer>
        </Section>

        <Section>
          <SectionContainer>
            <RowLayout>
              <ColumnLayout data-columns="3,1">
                <CopySection
                  variant="section"
                  caption="What we do"
                  title="Backbenchers is a mission-driven technology consulting company"
                  body="Our core practice areas are Salesforce, Mulesoft and Snowflake."
                />
              </ColumnLayout>

              <ColumnLayout data-columns="3,3">
                <CopySection
                  body="Let us help you fully leverage the strength of Salesforce and its capabilities."
                  icon={
                    <StaticImage src="../images/salesforce-logo.png" alt="" />
                  }
                  title="Salesforce"
                  variant="detail"
                />

                <CopySection
                  body="Deploy your APIs 3x faster than any other API platform."
                  title="Mulesoft"
                  variant="detail"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 528.33 528.33"
                    >
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <path
                            fill="#00a0df"
                            d="M264.17,0C118.27,0,0,118.27,0,264.17S118.27,528.33,264.17,528.33,528.33,410.06,528.33,264.17,410.06,0,264.17,0Zm0,505.1C131.1,505.1,23.23,397.23,23.23,264.17S131.1,23.23,264.17,23.23,505.1,131.1,505.1,264.17,397.23,505.1,264.17,505.1Z"
                          />
                          <path
                            fill="#00a0df"
                            d="M454.4,211.65l.06.06c-21.28-79.33-87.17-115.6-87.17-115.6l-7.4,11.61L264.31,257.35h-.06l-95.71-150-7.2-11.29s-65.89,36.27-87.17,115.6h0c-14.25,48.93-8.61,103.49,19.88,152.18A197.18,197.18,0,0,0,181,443l17.65-67.39C159,356.89,130.18,319,130.18,270.16A124.32,124.32,0,0,1,150.94,201l82.61,129.13H295L377.62,201a124.32,124.32,0,0,1,20.76,69.15c0,48.87-28.79,86.73-68.43,105.45L347.6,443a197.18,197.18,0,0,0,86.9-79.12C463,315.18,468.65,260.59,454.4,211.65Z"
                          />
                        </g>
                      </g>
                    </svg>
                  }
                />

                <CopySection
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  title="Snowflake"
                  variant="detail"
                  icon={
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 146.36 139.16"
                    >
                      <path
                        fill="#29b5e8"
                        fillRule="evenodd"
                        d="M134.81,60.1l-16.47,9.49L134.81,79a8.65,8.65,0,1,1-8.67,15l-29.51-17a8.68,8.68,0,0,1-4.33-7.75,8.48,8.48,0,0,1,.31-2,8.68,8.68,0,0,1,4-5.19l29.51-16.94A8.69,8.69,0,0,1,138,48.31,8.58,8.58,0,0,1,134.81,60.1Zm-15.59,46L89.72,89.13a8.72,8.72,0,0,0-13.06,7.48v33.9a8.69,8.69,0,0,0,17.37,0v-19L110.54,121a8.66,8.66,0,1,0,8.68-15Zm-34-33.16L72.92,85.09a2.44,2.44,0,0,1-1.54.65H67.77a2.51,2.51,0,0,1-1.54-.65L54,72.9a2.45,2.45,0,0,1-.64-1.52v-3.6A2.5,2.5,0,0,1,54,66.25L66.23,54.06a2.5,2.5,0,0,1,1.54-.64h3.61a2.45,2.45,0,0,1,1.54.64L85.18,66.25a2.49,2.49,0,0,1,.63,1.53v3.6A2.44,2.44,0,0,1,85.18,72.9Zm-9.8-3.38A2.59,2.59,0,0,0,74.73,68l-3.55-3.51a2.51,2.51,0,0,0-1.54-.64h-.13a2.46,2.46,0,0,0-1.53.64L64.43,68a2.51,2.51,0,0,0-.63,1.55v.13a2.41,2.41,0,0,0,.63,1.52L68,74.7a2.48,2.48,0,0,0,1.53.64h.13a2.51,2.51,0,0,0,1.54-.64l3.55-3.53a2.49,2.49,0,0,0,.65-1.52ZM19.93,33.08,49.44,50a8.73,8.73,0,0,0,13.07-7.49V8.64a8.69,8.69,0,0,0-17.37,0v19l-16.53-9.5a8.65,8.65,0,1,0-8.68,15ZM84.69,51.16a8.64,8.64,0,0,0,5-1.13l29.5-17a8.65,8.65,0,1,0-8.68-15L94,27.61v-19a8.69,8.69,0,0,0-17.37,0v33.9A8.66,8.66,0,0,0,84.69,51.16ZM54.48,88a8.58,8.58,0,0,0-5,1.13L19.93,106.06a8.66,8.66,0,1,0,8.68,15l16.53-9.49v19a8.69,8.69,0,0,0,17.37,0V96.61A8.65,8.65,0,0,0,54.48,88Zm-8-15.87a8.61,8.61,0,0,0-4-10L13,45.14A8.69,8.69,0,0,0,1.17,48.31,8.59,8.59,0,0,0,4.35,60.1l16.47,9.49L4.35,79A8.65,8.65,0,1,0,13,94l29.48-17A8.59,8.59,0,0,0,46.47,72.13Zm93.15-56.22H138.3v1.63h1.32c.61,0,1-.28,1-.8S140.26,15.91,139.62,15.91Zm-2.94-1.5h3c1.62,0,2.7.89,2.7,2.27a2.16,2.16,0,0,1-1.08,1.9l1.17,1.68v.34h-1.69L139.62,19H138.3V20.6h-1.62Zm8.3,3.22a5.48,5.48,0,0,0-5.58-5.83c-3.31,0-5.51,2.39-5.51,5.83,0,3.28,2.2,5.82,5.51,5.82A5.47,5.47,0,0,0,145,17.63Zm1.38,0c0,3.89-2.6,7.14-7,7.14s-6.89-3.28-6.89-7.14,2.57-7.14,6.89-7.14S146.36,13.73,146.36,17.63Z"
                      />
                    </svg>
                  }
                />
              </ColumnLayout>
            </RowLayout>
          </SectionContainer>
        </Section>

        <Section>
          <SectionContainer noPadding>
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
                      alt="LPL Financial"
                      width={170}
                      height={22}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>
        </Section>
      </Layout>
    </>
  )
}

export default IndexPage
