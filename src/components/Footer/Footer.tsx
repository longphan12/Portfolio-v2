import styles from './Footer.module.css';
import { FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface FooterProps {
    id?: string;
}

export default function Footer({ id }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer id={id} className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>Long Phan</h3>
                    <p className={styles.footerSubtitle}>Software Engineer</p>
                    <p className={styles.footerDescription}>
                        Building innovative solutions with modern technologies
                    </p>
                </div>

                <div className={styles.footerSection}>
                    <h4 className={styles.sectionTitle}>Quick Links</h4>
                    <nav className={styles.footerLinks}>
                        <a href="#home" className={styles.footerLink}>Home</a>
                        <a href="#about" className={styles.footerLink}>About</a>
                        <a href="#experience" className={styles.footerLink}>Experience</a>
                        <a href="#projects" className={styles.footerLink}>Projects</a>
                    </nav>
                </div>

                <div className={styles.footerSection}>
                    <h4 className={styles.sectionTitle}>Connect</h4>
                    <div className={styles.socialLinks}>
                        <a 
                            href="https://www.linkedin.com/in/long-phan-1203t/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a 
                            href="https://github.com/longphan12" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="GitHub"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a 
                            href="https://gitlab.com/longphan084" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="GitLab"
                        >
                            <FaGitlab size={24} />
                        </a>
                        <a 
                            href="mailto:your.email@example.com" 
                            className={styles.socialLink}
                            aria-label="Email"
                        >
                            <MdEmail size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p className={styles.copyright}>
                    © {currentYear} Long Phan. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

