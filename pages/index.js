import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>Raosan</b>. A software engineer who likes manga, detective story, and sports.</p>
        <p>
          Go to my <Link href="/posts/first-post"><a>first post</a></Link>
        </p>
      </section>
    </Layout>
  )
}