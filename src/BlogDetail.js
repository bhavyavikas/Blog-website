import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const { id } = useParams()
    const { data: blog, error, Loading } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()
    const deleteBlog = () => {
        fetch('http://localhost:8000/blogs/' + blog.id,
            {
                method: 'DELETE'
            })
            .then(() => {
                history.push('/');
            })
    }

    return (
        <div className='blogdetails'>
            {/* <h2>Blog Details {id}</h2> */}
            {Loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={deleteBlog}>Delete</button>
                </article>
            )
            }
        </div >
    );
}

export default BlogDetail;