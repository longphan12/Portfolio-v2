import styles from './Project.module.css';
import ProjectBox from './ProjectBox';

export default function Project() {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.title}>
                <div className={styles.smallProject}>PERSONAL EXPERIENCES</div>
                <h2 className={styles.projectTitle}>Projects</h2>
            </div>

            <div className={styles.projectBoxesContainer}>
                <ProjectBox
                    projectName="Portfolio Website"
                    projectType="Personal Project"
                    dateRange="2024"
                    projectImage="/src/assets/react.svg"
                    description={[
                        "A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark theme, and mobile-first design.",
                        "Implemented with CSS modules for styling and includes sections for experience, projects, and contact information."
                    ]}
                    technologies={["React", "TypeScript", "CSS Modules", "Vite"]}
                    liveLink="https://your-portfolio.com"
                    githubLink="https://github.com/yourusername/portfolio"
                />
                
                <ProjectBox
                    projectName="E-commerce Platform"
                    projectType="Full-Stack Application"
                    dateRange="2023 - 2024"
                    projectImage="/src/assets/react.svg"
                    description={[
                        "A complete e-commerce solution with user authentication, product management, shopping cart, and payment integration.",
                        "Built with modern web technologies and follows RESTful API principles for scalability and maintainability."
                    ]}
                    technologies={["React", "Node.js", "Express", "MongoDB", "Stripe"]}
                    liveLink="https://your-ecommerce.com"
                    githubLink="https://github.com/yourusername/ecommerce"
                />
                
                <ProjectBox
                    projectName="Task Management App"
                    projectType="Web Application"
                    dateRange="2023"
                    projectImage="/src/assets/react.svg"
                    description={[
                        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
                        "Includes user roles, project boards, and comprehensive task tracking with deadline management."
                    ]}
                    technologies={["React", "Firebase", "Material-UI", "React DnD"]}
                    githubLink="https://github.com/yourusername/task-manager"
                />
            </div>
        </div>
    )
}