// import logo from './logo.svg';
import './App.css';
// import Navbar from './Navbar';

function App() {
    const title = 'Welcome to the new Blog'
    const likes = 50;
    // const person = { name: "Yoshi", age: 30 };
    const link = "http://www.google.com";
    return (
        <div className="App">
            <div className="content">
                <h1>App Content</h1>
                <h2>{title}</h2>
                <p>Liked {likes} times</p>
                {/* <p>{person}</p> */}
                <p>{"hello"}</p>
                <p>{[1, 2, 3, 4, 5]}</p>
                <p>{Math.random() * 10}</p>
                <p>{30}</p>
                <a href={link} target='_blank'>Google Website</a>
            </div>
        </div >
    );
}

export default App;
