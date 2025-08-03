import styles from './Tech.module.css'
interface TechBoxProps {
    title: string;
    description: string[];
}
export default function TechBox({title, description} : TechBoxProps) {
    return (
        <div className={styles.techBox}>
            <h3 className={styles.techBoxTitle}>{title}</h3>
            <ul className={styles.techBoxDescription}>
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}