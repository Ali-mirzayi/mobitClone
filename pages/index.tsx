import type { NextPage } from 'next';
import Head from 'next/head';
import Intro from '../components/Headers/Intro';
import Category from '../components/Headers/Category';
import MissingIntro from '../components/Headers/MissingIntro';
import OfferProducts from '../components/Main/OfferProducts';

const Home: NextPage = () => {
  // let num=['۱','۶','۵','۹','۸','۲','۳','۶','۶','۲','۰','۰','۰'];
  
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Category />
      <MissingIntro />
      <OfferProducts />

    </div>
  )
}

export default Home
