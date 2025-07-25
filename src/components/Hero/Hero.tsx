import styles from './Hero.module.css';
import { FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";
import { GoDownload } from 'react-icons/go';
import { MdKeyboardArrowDown } from "react-icons/md";
import profilePhoto2 from '../../assets/profilePhoto2.jpeg';


export default function Hero() {

    return (
        <div className={styles.container}>
            <MdKeyboardArrowDown color={'#fff'} className={styles.scrollDown} size={30} />
            <div className={styles.left}>
                <h1 className={styles.name}>Long Phan</h1>
                <p className={styles.title}>Software Engineer<span className={styles.typewriter}>|</span></p>
                <div className={styles.socials}>
                    <a href='https://www.linkedin.com/in/long-phan-1203t/' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={25} color={'rgb(0, 119, 181)'}/>
                    </a>
                    <a href='https://github.com/longphan12' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={25} color={'#D0BD73'}/>
                    </a>
                    <a href='https://gitlab.com/longphan084' target='_blank' rel='noopener noreferrer'>
                        <FaGitlab size={25} color={'#fc6d26'}/>
                    </a>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.buttonContainer}>
                        <button className={styles.resumeButton}><GoDownload size={15}/> Resume</button>
                        <div className={styles.shadow}></div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.contactButton}>Contact</button>
                        <div className={styles.shadow}></div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <img src={profilePhoto2} alt='profile' className={styles.profilePhoto}/>
            </div>
        </div>
    )
}
