import styles from './About.module.css';
import { FaCode, FaGraduationCap } from "react-icons/fa";

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.title}>
                <div className={styles.introduction}>INTRODUCTION</div>
                <h2 className={styles.aboutMe}>About Me</h2>
            </div>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>
                    I’m Long Phan, a software engineer who enjoys building 
                    things that people actually use. I’ve worked across the 
                    stack with React, Node.js, and Spring Boot at startups like 
                    ReplyQuickAI and Complama, and I’ll be joining General Motors 
                    as a Software Engineer.
                </p>
                <p className={styles.description}>
                    I also enjoy teaching and mentoring, whether as a TA or running coding workshops. 
                    I like solving real problems and helping others grow along the way.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
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
                    <div className={styles.box}>
                        <div className={styles.educationTitle}>
                            <div className={styles.educationIcon}>
                                <FaCode size={25} color="#bf5700"/>
                            </div>
                            <h3>Skills</h3>
                        </div>
                        <div className={styles.educationContent}>
                            <ul>
                                <li>Full-Stack Development</li>
                                <li>Cloud Computing</li>
                                <li>Software Engineering</li>
                                <li>Devops</li>
                                <li>OOP & DSA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}