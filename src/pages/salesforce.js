import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { ColumnLayout } from '../components/ColumnLayout'
import { ContactForm } from '../components/ContactForm'
import { CopySection } from '../components/CopySection'
import { ListItem } from '../components/ListItem'
import { RowLayout } from '../components/RowLayout'
import { Section } from '../components/Section'
import { SectionContainer } from '../components/SectionContainer'
import Layout from '../components/layout'
import {
  footerCtaForm,
  imageBg,
  list,
  section_pageHeader,
} from './salesforce.module.scss'

const SalesforcePage = () => {
  return (
    <>
      <Helmet>
        <meta
          content="Backbenchers offers a wide array of Salesforce consulting and implementation services."
          name="description"
        />
        <title>backbenchers | Salesforce</title>
        <link rel="canonical" href="https://gobackbenchers.com/salesforce" />
      </Helmet>

      <Layout>
        <Section theme="dark" bgImage={<div className={imageBg}></div>}>
          <SectionContainer className={section_pageHeader}>
            <ColumnLayout data-columns="3,1">
              <CopySection
                variant="hero"
                title="Salesforce and Backbenchers"
                body="Let’s make the future better—for your business, your customers, and our shared communities."
              />
            </ColumnLayout>
          </SectionContainer>
        </Section>

        <Section theme="dark">
          <SectionContainer>
            <ColumnLayout data-columns="2,2">
              <RowLayout>
                <StaticImage
                  src="../images/salesforce-partner-badge.png"
                  alt="Backbenchers is a Salesforce partner"
                />

                <CopySection
                  variant="section"
                  title="Redefine what’s possible"
                  body="We empower our customers to dream bigger, move faster, and build better tomorrows for all."
                />
              </RowLayout>

              <div className={list}>
                <ul>
                  <ListItem label="Customer Data Platform" />
                  <ListItem label="Sales cloud" />
                  <ListItem label="Experience cloud" />
                  <ListItem label="Service cloud" />
                  <ListItem label="Field service cloud" />
                  <ListItem label="Marketing cloud" />
                  <ListItem label="Commerce cloud" />
                  <ListItem label="Revenue cloud" />
                  <ListItem label="Financial services cloud" />
                  <ListItem label="Loyalty cloud" />
                  <ListItem label="Health cloud" />
                  <ListItem label="Digital engagement" />
                  <ListItem label="Account engagement (Pardot)" />
                  <ListItem label="Data & Analytics" />
                  <ListItem label="CRM Analytics (Tableau)" />
                  <ListItem label="Mulesoft" />
                </ul>
              </div>
            </ColumnLayout>
          </SectionContainer>
        </Section>

        <Section theme="light">
          <SectionContainer>
            <ColumnLayout data-columns="1,3">
              <CopySection variant="section" title="What we do" />

              <ColumnLayout data-columns="3,3">
                <CopySection
                  variant="detail"
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M43 4H5C4.44772 4 4 4.48842 4 5.09091V14.9091C4 15.5116 4.44772 16 5 16H43C43.5523 16 44 15.5116 44 14.9091V5.09091C44 4.48842 43.5523 4 43 4Z"
                        fill="none"
                        stroke="#333"
                        stroke-width="4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M43 32H5C4.44772 32 4 32.4884 4 33.0909V42.9091C4 43.5116 4.44772 44 5 44H43C43.5523 44 44 43.5116 44 42.9091V33.0909C44 32.4884 43.5523 32 43 32Z"
                        fill="none"
                        stroke="#333"
                        stroke-width="4"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 16V24.0083L34 24.0172V32"
                        stroke="#333"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18 38H30"
                        stroke="#333"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18 10H30"
                        stroke="#333"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                  title="Platform integration"
                  body="Leverage our relationships with the world’s top technology companies to develop a solution tailored to your needs."
                />

                <CopySection
                  variant="detail"
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 42V6"
                        stroke="#333"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M36 30L24 42L12 30"
                        stroke="#333"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                  title="Salesforce implementation"
                  body="Integrate Salesforce’s out-of-the-box capabilities with your data sets and technologies."
                />

                <CopySection
                  variant="detail"
                  icon={
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40 6V42"
                        stroke="#333"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M29 16V42"
                        stroke="#333"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 26V42"
                        stroke="#333"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 36V42"
                        stroke="#333"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                  title="Data & analytics"
                  body="Close data gaps, accelerate insights and build your capacity to get ahead of change."
                />
              </ColumnLayout>
            </ColumnLayout>
          </SectionContainer>
        </Section>

        <Section theme="light">
          <SectionContainer>
            <CopySection
              variant="section"
              title="Salesforce is complex and powerful"
              body="Customization of Salesforce can extend functionality while
                configuration can only provide limited capabilities. There is
                huge business value that can be driven using customizations the
                correct way. It can significantly expand the capabilities of the
                Salesforce platform to bring you that hidden value. Openlogix
                can help you guide where this hidden value is and how to do
                meaningful customization based on your needs."
            />
          </SectionContainer>
        </Section>

        <section>
          <SectionContainer className={footerCtaForm} noPadding>
            <ColumnLayout className="no-gap" data-columns="2,2">
              <Section theme="dark">
                <SectionContainer noMargin>
                  <div className="pr-4">
                    <CopySection
                      body="Answer a few questions and we will put you in touch with the right leader at Backbenchers who can dive into what you need."
                      caption="Get in touch"
                      title="Speak with an expert"
                      variant="section"
                    />
                  </div>
                </SectionContainer>
              </Section>

              <Section theme="light">
                <SectionContainer noMargin>
                  <div className="pl-4">
                    <ContactForm origin="salesforce-practice-page" />
                  </div>
                </SectionContainer>
              </Section>
            </ColumnLayout>
          </SectionContainer>
        </section>
      </Layout>
    </>
  )
}

export default SalesforcePage
