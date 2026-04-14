import styles from './Experience.module.css';
import ExperienceBox from './ExperienceBox';
import peepsteer_logo from '../../assets/peepsteer_logo.jpeg';
import replyquickai_logo from '../../assets/replyquickai_logo.jpeg';
import codepath_logo from '../../assets/codepath_logo.jpeg';
import ut_logo from '../../assets/ut_logo.jpeg';
import complama_logo from '../../assets/complama_logo.jpeg'
import gm_logo from '../../assets/gm_logo.jpg';
import stemkidz_logo from '../../assets/stemkidz_logo.jpeg';
import apple_logo from '../../assets/apple_logo.jpeg';

export default function Experience() {
    const experiences = [
        {
            companyName: 'General Motors',
            jobTitle: 'Software Engineer',
            dateRange: 'June 2026 - Present',
            companyLogo: gm_logo,
            description: [
                'Incoming SWE at GM, contributing to suspension software development and testing'
            ]
        },
                {
            companyName: 'Peepsteer',
            jobTitle: 'Frontend Engineer',
            dateRange: 'July 2025 - May 2026',
            companyLogo: peepsteer_logo,
            description: [
                'Develop end-to-end frontend for a publishing platform with scalable components and advanced state management',
                'Build responsive UI, role-based authentication, and payment workflows integrating securely with REST APIs',
                'Optimize rendering, API calls, and navigation, reducing page load time by 30% to enhance engagement'
            ]
        }, 
        {
            companyName: 'Cortile',
            jobTitle: 'Full-Stack Software Engineer Intern',
            dateRange: 'September 2025 - January 2026',
            companyLogo: complama_logo,
            description: [
                'Contributed full-stack features for a GRC platform with Spring Boot, MySQL, React, and Tailwind, improving scalability',
                'Implemented RESTful APIs and secure data models in Spring Boot/MySQL, reducing backend response time by 30%',
                'Delivered full-stack features in an Agile environment with daily sprints, using Jira for planning and task tracking'
            ]
        },
                {
            companyName: 'Apple',
            jobTitle: 'Specialist',
            dateRange: 'July 2025 - January 2026',
            companyLogo: apple_logo,
            description: [
                'Provide technical support and troubleshoot iOS/macOS devices to improve customer satisfaction',
                'Collaborate with the Genius Bar team to streamline diagnostics and repairs, contributing to a 95% satisfaction score',
            ]
        },
        {
            companyName: 'University of Texas at Austin',
            jobTitle: 'Undergraduate Teaching Assistant, OOP',
            dateRange: 'August 2025 - December 2025',
            companyLogo: ut_logo,
            description: [
                'Lead lab sessions and assist 30+ students in mastering C++ object-oriented programming concepts and best practices',
                'Select and solve competitive programming problems on Kattis to reinforce coursework practice',
                'Develop C++ grading scripts, reviewed Git merge requests, and supported students via Ed Discussions to deliver feedback'
            ]
        },
                {
            companyName: 'STEMKidz',
            jobTitle: 'Software Camp Instructor',
            dateRange: 'August 2025 - October 2025',
            companyLogo: stemkidz_logo,
            description: [
                'Lead coding camps focused on algorithms, data structures, and project-based problem solving',
                'Teach Git/GitHub, project planning, and full-stack development with HTML/CSS, JavaScript, React',
                'Design and implement project-based curricula that improve student technical skills'
            ]
        },
        {
            companyName: 'ReplyQuickAI',
            jobTitle: 'Software Engineer Intern', 
            dateRange: 'July 2025 - September 2025',
            companyLogo: replyquickai_logo,
            description: [
                'Contribute full-stack features using Next.js and Node.js, supporting lead recovery for 1,000+ outbound campaigns',
                'Integrated Twilio, RetellAI, and AssemblyAI APIs to automate voice and SMS flows, reducing manual lead follow-up by 40%',
                'Write and test outbound calling scripts, debugging edge cases across 3 microservices to improve conversation success rate'
            ]
        },
        {
            companyName: 'CodePath',
            jobTitle: 'Tech Fellow',
            dateRange: 'May 2025 - August 2025',
            companyLogo: codepath_logo,
            description: [
                'Lead remote coding bootcamps for 200+ students, covering algorithms, data structures, and real-world engineering practices',
                'Teach Git, GitHub, agile workflows, and full-stack web development using HTML/CSS, JavaScript, and React',
                'Developed projects and backend modules using Express and MongoDB to teach REST APIs and CRUD operations',
            ]
        },
        {
            companyName: 'University of Texas at Austin',
            jobTitle: 'Undergraduate Teaching Assistant',
            dateRange: 'August 2024 - May 2025',
            companyLogo: ut_logo,
            description: [
                'Facilitated collaborative problem-solving and technical understanding sections for 30 students, 2x a week',
                'Delivered 1:1 tutoring during office hours, contributing to top 20% final exam outcomes',
                'Coordinated with faculty to design practice materials and manage exam prep logistics across 4 course sections'
            ]
        }
    ];

    return (
        <div className={styles.experienceContainer}>
            <div className={styles.title}>
                <div className={styles.smallExperience}>PROFESSIONAL WORK</div>
                <h2 className={styles.experienceTitle}>Experience</h2>
            </div>
            <div className={styles.experienceBoxesContainer}>
                {experiences.map((experience, index) => (
                    <ExperienceBox
                        key={index}
                        companyName={experience.companyName}
                        jobTitle={experience.jobTitle}
                        dateRange={experience.dateRange}
                        companyLogo={experience.companyLogo}
                        description={experience.description}
                    />
                ))}
            </div>
        </div>
    );
}