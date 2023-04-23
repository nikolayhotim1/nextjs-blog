import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hi! I'm <b>Nikolay</b>, a frontend engineer with 2 years of experience. My main technology stack:
					React.js, Next.js, Redux, TypeScript. You can contact me on{' '}
					<a href='https://www.linkedin.com/in/nikolayhotim/'>LinkedIn</a>.
				</p>
				<p>
					(This is a sample website - you'll be building a site like this on{' '}
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
				</p>
			</section>
		</Layout>
	)
}
