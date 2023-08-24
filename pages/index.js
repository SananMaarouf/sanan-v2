// cms stuff
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import { CMS_NAME } from '../lib/constants'

// custom container
import Container from '../components/container'

// components
import Layout from '../components/layout'

// next stuff
import Head from 'next/head'

/* Importing hero components for each section */
import LandingHero from '../components/landing_hero'
import AboutHero from '../components/about_hero'
import ContactHero from '../components/contact_hero'
import ProjectsHero from '../components/projects_hero'
import LanguagesHero from '../components/languages_hero'

export default function Index({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Sanan Maarouf`}</title>
        </Head>
        <LandingHero />
        <AboutHero />
        <ProjectsHero />
        <ContactHero />
      </Layout>
    </>
  )
}

