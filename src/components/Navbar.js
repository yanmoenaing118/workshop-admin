import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
export default function Navbar() {


    return <nav className={styles.Navbar}>
        <ul>
            <li><Link to="/">Home</Link></li>
            {['dramas', 'songs'].map(link => (
                <li key={link}>
                    <Link to={`/${link}`} >{link}</Link>
                </li>
            ))}
        </ul>
    </nav>

}