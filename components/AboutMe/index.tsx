import styles from './AboutMe.module.scss';
import { FiGitPullRequest, FiPenTool, FiArrowRight } from 'react-icons/fi';

const AboutMe = () => {

    return (
        <>
            <div className={styles.AboutTitle}>
                <h1>Who am I?</h1>
                <p>A fullstack developer with a strong background in Product Design (UI/UX Designer). I am a specialist in transforming ideas in successful digital products</p>
            </div>

            <div className={styles.CardContainer}>
                <div className={styles.Card}>
                    <header>
                        <FiGitPullRequest /> <h2>Dev</h2>
                    </header>

                    <main>
                        <ul>
                            <div className={styles.ulTitle}>
                                <h2>Programming Languages</h2>
                            </div>
                            <li>Javascript ES6+</li>
                            <li>Typescript</li>
                            <li>C++</li>
                            <li>Java</li>

                            <div className={styles.ulTitle}>
                                <h2>Design Patterns</h2>
                            </div>
                            <li>MVC</li>
                            <li>SOLID</li>

                            <div className={styles.ulTitle}>
                                <h2>Database</h2>
                            </div>
                            <li>MySQL</li>
                            <li>MongoDB</li>

                            <div className={styles.ulTitle}>
                                <h2>Design Patterns</h2>
                            </div>
                            <li>React</li>
                            <li>Angular</li>
                            <li>NodeJS</li>

                        </ul>
                    </main>

                </div>
                <div className={styles.Card}>
                    <header>
                        <FiPenTool />
                        <h2>Design</h2>
                    </header>
                    <main>
                        <ul>
                            <div className={styles.ulTitle}>
                                <h2>Designing tools</h2>
                            </div>
                            <li>Figma</li>
                            <li>Adobe XD</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>After Effects</li>
                            <li>Adobe Premiere Pro</li>
                            <li>Framer</li>

                            <div className={styles.ulTitle}>
                                <h2>Methodology</h2>
                            </div>
                            <li>Design Thinking</li>
                            <li>Design Sprint</li>

                            <div className={styles.ulTitle}>
                                <h2>Research</h2>
                            </div>
                            <li>UX Metrics</li>
                            <li>Google Analytics</li>
                            <li>Hotjar</li>
                            <li>User Testing</li>
                            <li>Quality Assurance testing</li>
                        </ul>
                    </main>
                </div>
            </div>
        </>
    )
}


export default AboutMe;