import styles from './Experience.module.css';

interface ExperienceBoxProps {
    companyName: string;
    jobTitle: string;
    dateRange: string;
    companyLogo: string;
    description: string[];
}

export default function ExperienceBox({
    companyName,
    jobTitle,
    dateRange,
    companyLogo,
    description
}: ExperienceBoxProps) {
    return (
        <div className={styles.experienceBox}>
            <div className={styles.experienceHeader}>
                <div className={styles.experienceCompany}>
                    <img 
                        className={styles.experienceCompanyLogoImage} 
                        src={companyLogo} 
                        alt={`${companyName} Logo`} 
                    />
                    <div className={styles.companyInfo}>
                        <h3 className={styles.companyName}>{companyName}</h3>
                        <p className={styles.jobTitle}>{jobTitle}</p>
                    </div>
                </div>
                <div className={styles.experienceDates}>
                    <span className={styles.dateRange}>{dateRange}</span>
                </div>
            </div>
            <div className={styles.experienceContent}>
                {description.map((paragraph, index) => (
                    <p key={index} className={styles.experienceDescription}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
} 