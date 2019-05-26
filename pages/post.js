import Layout from '../components/Layout'

const Post = ({ url }) => (
    <Layout title={url.query.title}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Molestias eaque!  Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Molestias eaque!  Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Molestias eaque!  Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Molestias eaque!</p>
    </Layout>
)

export default Post