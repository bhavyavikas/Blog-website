// Import Hook
// import { useEffect, useState } from "react";
import BlogList from './Bloglist';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, loading, error } = useFetch('http://localhost:8000/blogs')

    return (

        <div className="home">
            {/* using blogs Variables of this Parent class Home in  child class BlogList */}
            {/* <BlogList blogging={blogs} title='All Blogs'></BlogList> */}
            {/* <BlogList blogging={blogs.filter((i) => i.author == 'B')} title='B Blog' ></BlogList> */}
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogging={blogs} title='All Blogs'></BlogList>}
            {/* {blogs && <BlogList blogging={blogs} title='All Blogs' dB={deleteBlog}></BlogList>} */}
            {/* <button onClick={() => setName('Rohan')}>Change Name</button> */}
            {/* <p>{name}</p> */}
        </div >
    );

}

export default Home;