import Head from 'next/head'
import styles from '@/styles/Home.module.css'


export default function Layout({ children }) {
    return <>
        <Head>
            <title>ComicHub</title>
            <meta name="description" content="ComicHub is a simple gallery website for displaying comics. " />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={'container-fluid'}>
            <nav>
                <ul>
                    <li><strong>ComicHub</strong></li>
                </ul>
                <ul>
                    <li><a href="#">admin login</a></li>
                </ul>
            </nav>
        </div>
        <main>
            { children }
        </main>
    </>
}