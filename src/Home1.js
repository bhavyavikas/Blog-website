// Import Hook
import { useState } from "react";

const Home = () => {
    // useState Hook
    // declaring hook state variable
    const [name1, setName1] = useState('Marco');
    const [age1, setAge1] = useState(20);
    // using usestate function in a function
    const handleClick = () => {
        console.log('Hello Marco');
        setName1('Neemo');
        setAge1(30)
    }
    const handleClickagain = (name, e) => {
        console.log('Hello ' + name + ' Again', e.target);
    }
    const [blogs, setBlogs] = useState([
        { title: 'New Year', body: 'text on HNY', author: 'A', id: 1 },
        { title: 'Old', body: 'Text on Old', author: 'B', id: 2 },
        { title: 'Afore', body: 'Text on Afore', author: 'C', id: 3 }]);

    return (
        <div className="home">

            <h2>This is home component</h2>
            <h2>Homepage</h2>
            <p>{name1} is {age1} years old</p>
            <button onClick={handleClick}>ClickME</button>
            <button onClick={(e) => handleClickagain('Marco', e)}>Click Again</button>
            {blogs.map(b => (
                <div className="blog-preview" key={b.id}>
                    <h2>{b.title}</h2>
                    <p>Written by {b.author}</p>
                </div>
            ))}
        </div>
    );

}

export default Home;