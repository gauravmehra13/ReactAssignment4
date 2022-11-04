import {Link} from 'react-router-dom';
import './Style.css';

const Navbar = () => {
    return (
        <div className='main'>
            <nav className='navigation'>
                <Link to='/home' className='home'>Home</Link>
                <Link to='/student' className='student'>Students</Link>
                <Link to='/contact' className='contact'>Contact US</Link>
            </nav>
           
        </div>
    )
}

export default Navbar