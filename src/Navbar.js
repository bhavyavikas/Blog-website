import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Beta's Blog</h1>
            <div className="links">
                <Link to="/" >Home</Link>
                <Link to="/Create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</Link>
                <Link to="/contact" style={{
                    border: '8px',
                    borderColor: 'red',
                    borderRadius: '8px'
                }} >Contact</Link>
            </div>
        </nav >
    );
}
export default Navbar;
