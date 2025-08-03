import styles from './Tech.module.css';
import TechBox from './TechBox';
export default function Tech() {
    const techBoxes = [
        {
            title: 'Techical Skills',
            description: [
                'Data Structures & Algorithms', 
                'Object-Oriented Programming',
                'Web Development',
                'Devops'
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
                    <TechBox key={index} title={techBox.title} description={techBox.description}/>
                ))}
            </div>
        </div>
    )
}