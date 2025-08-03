import styles from './Navbar.module.css';
import { AiOutlineCode, AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <a href='#home' className={styles.navLinks}>
                <AiOutlineHome color='white'/>
            </a>
            <a href='#about' className={styles.navLinks}>
                <AiOutlineUser color='white'/>
            </a>
            <a href='#experience' className={styles.navLinks}>
                <BsBriefcase color='white'/>
            </a>
            <a href='#projects' className={styles.navLinks}>
                <AiOutlineCode color='white' />
            </a>
            <a href='#tech' className={styles.navLinks}>
                <AiOutlineCode color='white' />
            </a>
        </nav>
    )
}