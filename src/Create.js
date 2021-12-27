import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('B')
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    const SubmitBlog = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setLoading(true);

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log('New Blog Added')
                setLoading(false)
                history.push('/')
                // history.go(-1);
            });

    }

    return (
        <div className='create'>
            <h2>Add a New Blog</h2>
            <form onSubmit={SubmitBlog}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <label>Blog Body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="A">A</option>
                    <option value="B">B</option>
                </select>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
                {!loading && <button>Add Blog</button>}
                {loading && <button disabled>Adding Blog...</button>}
            </form>
        </div >
    );
}

export default Create;