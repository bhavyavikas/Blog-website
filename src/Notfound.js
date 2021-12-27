import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>404 - Page not found</h2>
            <p>Sorry, page cannot be found</p>
            <Link to='/'>Click here to go back to homepage</Link>
        </div>
    );
}

export default NotFound;