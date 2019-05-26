// import Link from 'next/link'
import Layout from '../components/Layout'
import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Error from './_error'

export default class About extends Component {


    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/jvgiv')
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();

        //         .then(res => res.json())
        //         .then(data => {
        //            console.log(data)
        //         })


        return { user: data, statusCode }
    }

    // componentDidMount() {
    //     fetch('https://api.github.com/users/jvgiv')
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({
    //                 user: data
    //             })
    //         })
    // }


    render() {
        const { user, statusCode } = this.props

        if (statusCode) {
            return <Error statusCode={statusCode} />
        }
        return (
            
                <Layout title="About">
                    <p>{user.name}</p>
                    <Link href="/">
                        <a>Go to home</a>
                    </Link>
                    <p>A JS Programmer</p>
                    <img 
                        src={user.avatar_url}
                        alt="Me"
                        height="200px" 
                    />
                </Layout>
            
                
            )
        
    }
}


// About.getInitialProps = () => {

// }