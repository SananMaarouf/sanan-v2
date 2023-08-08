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
      // Hero Section that takes up the entire viewport height
      <div className="min-h-screen flex">
          {/* so i gotta style this */}
          <div className="container mx-auto py-20">
              {/* stuff in the container goes in here */}
              <div class="flex flex-col p-5 justify-evenly bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 borderborder-gray-100 my-5 md:flex-row content-center">
                  <div class="mt-4 text-center lg:place-self-center">
                      <p class="block mt-1 text-lg font-bold text-white">Projects</p>
                      <p class="mt-2 text-white">I am a full stack developer</p>
                  </div>

                  <div class="flex self-center">
                      <img class="rounded-lg" src="/images/crabs.jpg" />
                  </div>
              </div>
          </div>
      </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
