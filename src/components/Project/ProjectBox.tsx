import styles from './Project.module.css';

interface ProjectBoxProps {
    projectName: string;
    projectType: string;
    dateRange: string;
    projectImage: string;
    description: string[];
    technologies: string[];
    liveLink?: string;
    githubLink?: string;
}

export default function ProjectBox({
    projectName,
    projectType,
    dateRange,
    projectImage,
    description,
    technologies,
    liveLink,
    githubLink
}: ProjectBoxProps) {
    return (
        <div className={styles.projectBox}>
            <div className={styles.projectImageContainer}>
                <img 
                    className={styles.projectImage} 
                    src={projectImage} 
                    alt={`${projectName} Preview`} 
                />
            </div>
            
            <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                    <div className={styles.projectDetails}>
                        <h3 className={styles.projectName}>{projectName}</h3>
                        <p className={styles.projectType}>{projectType}</p>
                    </div>
                    <div className={styles.projectDates}>
                        <span className={styles.dateRange}>{dateRange}</span>
                    </div>
                </div>
                
                <div className={styles.projectDescriptionContainer}>
                    {description.map((paragraph, index) => (
                        <p key={index} className={styles.projectDescription}>
                            {paragraph}
                        </p>
                    ))}
                </div>
                
                <div className={styles.technologiesContainer}>
                    {technologies.map((tech, index) => (
                        <span key={index} className={styles.technologyTag}>
                            {tech}
                        </span>
                    ))}
                </div>
                
                {(liveLink || githubLink) && (
                    <div className={styles.projectLinks}>
                        {liveLink && (
                            <a 
                                href={liveLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.projectLink}
                            >
                                Live Demo
                            </a>
                        )}
                        {githubLink && (
                            <a 
                                href={githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.projectLink}
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}