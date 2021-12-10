import { Link } from 'react-router-dom'


const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>SovTech Candidate Profile</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/contact" style ={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Contact</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;