import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Hero from '../components/hero'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function ProjectsHero({ preview, allPosts }) {
    // const heroPost = allPosts[0]
    // const morePosts = allPosts.slice(1)
    return (
      <Hero 
                image="/images/stonk.png"
                title="Projects!"
                description=" We making it out of the hood"
                buttonText="Read more"
            />
    )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
