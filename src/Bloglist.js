import { Link } from "react-router-dom";

const BlogList = ({ blogging, title }) => {

    return (
        <div className="blog-list" >
            <h2>{title}</h2>
            {blogging.map(b => (
                <div className="blog-preview" key={b.id}>
                    <Link to={`/blogging/${b.id}`}>
                        <h2>{b.title}</h2>
                        {/* <p>{b.body}</p> */}
                        <p>Written by {b.author}</p>
                        {/* <button onClick={() => dB(b.id)}>Delete blog</button> */}
                    </Link>
                </div>
            ))
            }
        </div >
    );
}

export default BlogList;