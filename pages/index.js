import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ComicHub</title>
        <meta name="description" content="ComicHub is a simple gallery website for displaying comics. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={'container-fluid ' + styles.banner}>
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
                <a> <img src='/twitter_icon.png' width='24px'></img></a>
                  <a> <img src='/tumblr_icon.png' width='24px'></img></a>
                  <a> <img src='/instragram_icon.png' width='24px'></img></a>
                  <a> <img src='/youtube_icon.png' width='24px'></img></a>
                  <a> <img src='/facebook_icon.svg' width='24px'></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className='container'>
        <div className='row'>
          {[...Array(8).keys()].map((i) => (
            <div key={i} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <a href="">
                <article>
                  <p>image placeholder </p>
                  <h6>comic {i} </h6>
                </article>
              </a>
            </div>
          ))
          }
        </div>
      </main>
    </>
  )
}
