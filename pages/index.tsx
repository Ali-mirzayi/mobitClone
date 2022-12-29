import type { NextPage } from 'next';
import Head from 'next/head';
import Intro from '../components/Headers/Intro';
import Category from '../components/Headers/Category';
import MissingIntro from '../components/Headers/MissingIntro';
import OfferProducts from '../components/Main/OfferProducts';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>gta home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="description" content="its my mobit clone" />
        <link rel="icon" href="/gta-home-logo.jpg" />
      </Head>
       <Intro />
       <Category />
       <MissingIntro />
       <OfferProducts />
      </>
  )
}

export default Home
