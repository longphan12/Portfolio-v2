import styles from './Hero.module.css';
import { FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";

export default function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.name}>Long Phan</h1>
                <p className={styles.title}>Software Engineer<span className={styles.typewriter}>|</span></p>
                <div className={styles.socials}>
                    <a href='https://www.linkedin.com/in/long-phan-1203t/' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={25}/>
                    </a>
                    <a href='https://github.com/longphan12' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={25}/>
                    </a>
                    <a href='https://gitlab.com/longphan084' target='_blank' rel='noopener noreferrer'>
                        <FaGitlab size={25}/>
                    </a>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.buttonContainer}>
                        <button className={styles.resumeButton}>Resume</button>
                        <div className={styles.shadow}></div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.contactButton}>Contact</button>
                        <div className={styles.shadow}></div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <p>
                    I'm a software engineer with a passion for building web applications that are both functional and aesthetically pleasing.
                </p>
            </div>
        </div>
    )
}
