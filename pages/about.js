import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
    <Layout title="About">
        {/* <h1>About</h1> */}
        <Link href="/">
            <a>Go to home</a>
        </Link>
        <p>A JS Programmer</p>
        <img src="../static/bg-image.png" alt="simpsons" height="200px" />
    </Layout>

    
)
