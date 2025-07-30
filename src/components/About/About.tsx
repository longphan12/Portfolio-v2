import styles from './About.module.css';
import { FaGraduationCap } from "react-icons/fa";

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.title}>
                <div className={styles.introduction}>INTRODUCTION</div>
                <h2 className={styles.aboutMe}>About Me</h2>
            </div>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>
                    Hello! I'm Long Phan, a passionate Software Engineer with hands-on experience in 
                    Full-Stack Development at CodePath and technical expertise at Apple. I specialize 
                    in creating innovative web solutions and mentoring the next generation of developers.
                </p>
                <p className={styles.description}>
                    When I'm not coding, you'll find me leading coding camps as a Software Engineer Instructor, 
                    teaching algorithms and full-stack development, or providing technical support and 
                    customer solutions at Apple. I'm passionate about education, technology, and building 
                    software that makes a difference.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.education}>
                        <div className={styles.educationTitle}>
                            <div className={styles.educationIcon}>
                                <FaGraduationCap size={25} color="#bf5700"/>
                            </div>
                            <h3>Education</h3>
                        </div>
                        <div className={styles.educationContent}>
                            <ul>
                                <li>B.S. Computer Science</li>
                                <li>University of Texas at Austin</li>
                                <li>Expected: May 2026</li>
                                <li>GPA: 3.58</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.skills}></div>
                </div>
            </div>

        </div>
    )
}