import styles from './About.module.css';

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
            </div>
            <div className={styles.boxes}>
                <div className={styles.education}></div>
                <div className={styles.skills}></div>
            </div>
        </div>
    )
}