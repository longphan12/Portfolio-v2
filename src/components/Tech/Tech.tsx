import styles from './Tech.module.css';
import TechBox from './TechBox';
export default function Tech() {
    const techBoxes = [
        {
            title: 'Techical Skills',
            description: [
                'Data Structures', 
                'Object-Oriented Programming',
                'Web Development',
                'Devops'
            ]
        }, 
        {
            title: 'Programming Languages',
            description: [
                "Python", 
                "JavaScript", 
                "TypeScript", 
                "Java", 
                "C/C++", 
                "SQL" , 
                "HTML",
                "CSS"
            ]
        },
        {
            title: 'Frameworks & Databases',
            description: [
                'React', 
                'Node.js', 
                'Express.js',
                'Next.js', 
                'Spring Boot', 
                'Tailwind CSS', 
                'Bootstrap',
                'PostgreSQL', 
                'MySQL', 
                'MongoDB'
            ]
        }, 
        {
            title: 'Developer Tools and Testing',
            description: [
                "Git",  
                "AWS", 
                "Postman", 
                "Docker", 
                "CI/CD", 
                "Jest", 
                "Selenium", 
                "Google Test", 
            ]
        }
    ]
    return (
        <div className={styles.techContainer}>
            <div className={styles.title}>
                <div className={styles.smallTech}>TECH STACK</div>
                <h2 className={styles.techTitle}>Technologies</h2>
            </div>
            <div className={styles.techBoxesContainer}>
                {techBoxes.map((techBox, index) => (
                    <TechBox 
                        key={index} 
                        title={techBox.title} 
                        description={techBox.description}
                        singleColumn={index === 0}
                    />
                ))}
            </div>
        </div>
    )
}