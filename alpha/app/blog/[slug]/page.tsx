export default function BlogPostPage({ params }) {
    return (
        <div>
            <h1>Blog Post Page</h1>
            <p>{params.slug}</p>
        </div>
    )
}