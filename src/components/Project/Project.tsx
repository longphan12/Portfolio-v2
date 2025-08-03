import styles from './Project.module.css';
import ProjectBox from './ProjectBox';
import prizepickers from '../../assets/prizepickers-scr.png';
import justicewatch from '../../assets/justicewatch-scr.jpeg';
import marketanalyzer from '../../assets/marketanalyzer-scr.jpeg';

export default function Project() {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.title}>
                <div className={styles.smallProject}>PERSONAL EXPERIENCES</div>
                <h2 className={styles.projectTitle}>Projects</h2>
            </div>

            <div className={styles.projectBoxesContainer}>
                <ProjectBox
                    projectName="PrizePickers"
                    projectStatus="In Progress"
                    dateRange="Mar. 2025 - Present"
                    projectImage={prizepickers}
                    description={[
                        "Built a full-stack analytics platform to deliver NBA betting recommendations using weighted models."
                    ]}
                    technologies={["React", "TypeScript", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Flask", "Python"]}
                    githubLink="https://github.com/stoven2k17/PrizePickers"
                />
                
                <ProjectBox
                    projectName="JusticeWatch"
                    projectStatus="Completed"
                    dateRange="Feb. 2025 - May 2025"
                    projectImage={justicewatch}
                    description={[
                        "Developed a civic tech platform visualizing police performance and safety legislation for public transparency."
                    ]}
                    technologies={["Next.js", "React", "Tailwind CSS", "TypeScript", "Shadcn UI", "Flask", "PostgreSQL", "Docker", "AWS"]}
                    liveLink="https://www.justicewatch.xyz/"
                    githubLink="https://github.com/longphan12/JusticeWatch"
                />
                
                <ProjectBox
                    projectName="Corey Construction Market Analyzer"
                    projectStatus="Completed"
                    dateRange="Apr. 2025"
                    projectImage={marketanalyzer}
                    description={[
                        "Automated data extraction and analysis of housing data from PDFs, reducing manual processing time by 80%."
                    ]}
                    technologies={["HTML", "CSS", "JavaScript", "OpenAI API", "Python"]}
                    liveLink="https://drive.google.com/file/d/1pXIG83_FE1CYLPYvLkKK74nVQFy0-Cu5/view?usp=sharing"
                    githubLink="https://github.com/longphan12/MarketAnalyzer"
                />
            </div>
        </div>
    )
}