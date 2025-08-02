import styles from './Experience.module.css';
import ExperienceBox from './ExperienceBox';
import peepsteer_logo from '../../assets/peepsteer_logo.jpeg';
import replyquickai_logo from '../../assets/replyquickai_logo.jpeg';
import apple_logo from '../../assets/apple_logo.jpeg';
import codepath_logo from '../../assets/codepath_logo.jpeg';
import ut_logo from '../../assets/ut_logo.jpeg';

export default function Experience() {
    const experiences = [
        {
            companyName: 'Peepsteer',
            jobTitle: 'Frontend Engineer',
            dateRange: 'July 2025 - Present',
            companyLogo: peepsteer_logo,
            description: [
                'Accepted offer to join Peepsteer\'s engineering team to build and ship frontend features for a user analytics platform.',
                'Will work with technologies including React, TypeScript, and Tailwind CSS to improve UI responsiveness and performance.'
            ]
        }, 
        {
            companyName: 'ReplyQuickAI',
            jobTitle: 'Software Engineer Intern', 
            dateRange: 'July 2025 - Present',
            companyLogo: replyquickai_logo,
            description: [
                'Contribute full-stack features using Next.js and Node.js, supporting lead recovery for 1,000+ outbound campaigns',
                'Integrated Twilio, RetellAI, and AssemblyAI APIs to automate voice and SMS flows, reducing manual lead follow-up by 40%',
                'Write and test outbound calling scripts, debugging edge cases across 3 microservices to improve conversation success rate'
            ]
        },
        {
            companyName: 'Apple',
            jobTitle: 'Specialist',
            dateRange: 'July 2025 - Present',
            companyLogo: apple_logo,
            description: [
                'Provide technical support and troubleshoot iOS/macOS devices to improve customer satisfaction',
                'Collaborate with the Genius Bar team to streamline diagnostics and repairs, contributing to a 95% satisfaction score',
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