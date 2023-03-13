import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

// Index page do not use global layout, skipping layout
Home.getLayout = (page) => page

export default function Home({ comics }) {
  return <>
    <Head>
      <title>ComicHub</title>
      <meta name="description" content="ComicHub is a simple gallery website for displaying comics. " />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <div className={`container-fluid ${styles.banner}`}>
      <nav>
        <ul>
          <li><strong>ComicHub</strong></li>
        </ul>
        <ul>
          <li><a href="#">admin login</a></li>
        </ul>
      </nav>
      <div className='container'>
        <div className='row middle-xs middle-sm middle-md middle-lg'>
          <div className='col-xs-4 col-sm-4 col-md-2 col-lg-2'>
            <article>
              <img src="/favicon.ico" alt="" />
            </article>
          </div>
          <div className='col-xs-8 col-sm-8 col-md-10 col-lg-10'>
            <div className='box'>
              <hgroup>
                <h1>(your name here) 'w'</h1>
                <h3>ComicHub is a website to show off all your comics! </h3>
              </hgroup>
              <ShowScoailMediaLists />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`container`}>
      <DisplayComics comics={comics} />
    </div>
    </main>
    
  </>
}

function ShowScoailMediaLists() {
  return <>
    <a> <img src='/twitter_icon.png' width='24px'></img></a>
    <a> <img src='/tumblr_icon.png' width='24px'></img></a>
    <a> <img src='/instragram_icon.png' width='24px'></img></a>
    <a> <img src='/youtube_icon.png' width='24px'></img></a>
    <a> <img src='/facebook_icon.svg' width='24px'></img></a>
  </>
}

function DisplayComics({ comics }) {
  return <div className='row'>
    {comics.map((comic) => (
      <div key={comic.id} className={styles.comic + " col-xs-6 col-sm-6 col-md-4 col-lg-3"}>
        <a href="">
          <article>
            <img src='/Comic.jpg'></img>
            <h6>{comic.name}</h6>
          </article>
        </a>
      </div>
    ))
    }
  </div>
}

// Pre-renders index page for SEO and speed up index loading speed.
export async function getStaticProps() {
  // todo: read backend URL from env
  const res = await fetch('http://localhost:5000/comic')
  const comics = await res.json()

  return {
    props: {
      comics,
    },
    revalidate: 10 // regenerate the page at most once pre 10 seconds
  }
}