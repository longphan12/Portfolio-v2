import styles from './Tech.module.css'
interface TechBoxProps {
    title: string;
    description: string[];
    singleColumn?: boolean;
}
export default function TechBox({title, description, singleColumn = false} : TechBoxProps) {
    return (
        <div className={styles.techBox}>
            <h3 className={styles.techBoxTitle}>{title}</h3>
            <ul className={singleColumn ? styles.techBoxDescriptionSingle : styles.techBoxDescription}>
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}