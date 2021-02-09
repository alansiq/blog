import Link from 'next/link';
import { useEffect, useState, FunctionComponent } from 'react';
import styles from './WorkSection.module.scss';
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";

const workList = [
    {
        caseTitle: 'Case do Portfolio 1',
        caseDescription: 'Lorem velit exercitation eu esse labore tempor proident cupidatat nostrud exercitation. Consequat ut incididunt ipsum excepteur. Cupidatat tempor culpa amet irure eiusmod commodo cupidatat excepteur ipsum ea. Velit quis occaecat labore anim qui Lorem nostrud esse ex exercitation.',
        caseLink: '/alansiqueira.png',
    },
    {
        caseTitle: 'Projeto topzera numero 2',
        caseDescription: 'Dolor nisi duis elit est culpa occaecat pariatur duis. Dolor anim veniam voluptate ex sit. Proident proident voluptate enim ex quis consectetur ipsum anim elit mollit do. Adipisicing anim ipsum ea ipsum est. Fugiat incididunt dolor ipsum incididunt minim enim. Commodo magna cupidatat ullamco minim reprehenderit mollit ea aliquip quis culpa.',
        caseLink: '/redgarden.jpg',
    },
    {
        caseTitle: 'Esse é um terceiro projeto',
        caseDescription: 'Lorem velit exercitation eu esse labore tempor proident cupidatat nostrud exercitation. Consequat ut incididunt ipsum excepteur. Cupidatat tempor culpa amet irure eiusmod commodo cupidatat excepteur ipsum ea. Velit quis occaecat labore anim qui Lorem nostrud esse ex exercitation.',
        caseLink: '/alansiqueira.png',
    },
    {
        caseTitle: 'Case do Portfolio 4',
        caseDescription: 'Lorem velit exercitation eu esse labore tempor proident cupidatat nostrud exercitation. Consequat ut incididunt ipsum excepteur. Cupidatat tempor culpa amet irure eiusmod commodo cupidatat excepteur ipsum ea. Velit quis occaecat labore anim qui Lorem nostrud esse ex exercitation.',
        caseLink: '/alansiqueira.png',
    },
    {
        caseTitle: 'Case do Portfolio 5',
        caseDescription: 'Lorem velit exercitation eu esse labore tempor proident cupidatat nostrud exercitation. Consequat ut incididunt ipsum excepteur. Cupidatat tempor culpa amet irure eiusmod commodo cupidatat excepteur ipsum ea. Velit quis occaecat labore anim qui Lorem nostrud esse ex exercitation.',
        caseLink: '/alansiqueira.png',
    },
    {
        caseTitle: 'Projeto topzera numero 6',
        caseDescription: 'Dolor nisi duis elit est culpa occaecat pariatur duis. Dolor anim veniam voluptate ex sit. Proident proident voluptate enim ex quis consectetur ipsum anim elit mollit do. Adipisicing anim ipsum ea ipsum est. Fugiat incididunt dolor ipsum incididunt minim enim. Commodo magna cupidatat ullamco minim reprehenderit mollit ea aliquip quis culpa.',
        caseLink: '/redgarden.jpg',
    },
    {
        caseTitle: 'Projeto topzera numero 7',
        caseDescription: 'Dolor nisi duis elit est culpa occaecat pariatur duis. Dolor anim veniam voluptate ex sit. Proident proident voluptate enim ex quis consectetur ipsum anim elit mollit do. Adipisicing anim ipsum ea ipsum est. Fugiat incididunt dolor ipsum incididunt minim enim. Commodo magna cupidatat ullamco minim reprehenderit mollit ea aliquip quis culpa.',
        caseLink: '/redgarden.jpg',
    },
    {
        caseTitle: 'Case do Portfolio 8',
        caseDescription: 'Lorem velit exercitation eu esse labore tempor proident cupidatat nostrud exercitation. Consequat ut incididunt ipsum excepteur. Cupidatat tempor culpa amet irure eiusmod commodo cupidatat excepteur ipsum ea. Velit quis occaecat labore anim qui Lorem nostrud esse ex exercitation.',
        caseLink: '/alansiqueira.png',
    },

];

interface RenderWorkCasesProps {
    qtd?: number;
}


const RenderWorkCases:FunctionComponent<RenderWorkCasesProps> = ({qtd}) => {
    const itemsPerPage = qtd;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItemList, setCurrentItemList] = useState([]);
    const objectArray = workList;

    const lastPage = Math.ceil(objectArray.length / itemsPerPage);

    function nextPage() {
        if (currentPage == lastPage) {
            setCurrentPage(1);
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    function previousPage() {
        if (currentPage == 1) {
            setCurrentPage(lastPage)
        } else {
            setCurrentPage(currentPage - 1)
        }
    }

    const RenderCasesPagination = () => {

        return (
            <div className={styles.casesPagination}>
            <button onClick={() => previousPage()}><VscArrowLeft /></button><button onClick={() => nextPage()}><VscArrowRight /></button>
            </div>
        )
    }

    useEffect(() => {

        const lastItemIndex = currentPage * itemsPerPage;
        // 1 * 3 = 3, 6, 9
        const firstItemIndex = lastItemIndex - itemsPerPage;
        // 9 - 3 = 6

        setCurrentItemList(objectArray.slice(firstItemIndex, lastItemIndex))

    }, [currentPage])

        if (currentItemList.length % itemsPerPage != 0) {
            return (
                <>
                    <div className={styles.casesContainer}>
                        {
                            currentItemList.map(work =>
                            (
                                <div className={styles.workCard}>
                                    <h1>{work.caseTitle}</h1>
                                    <p>{work.caseTitle}</p>
                                    <Link href={work.caseLink}>{work.caseTitle}</Link>
                                    <img src={work.caseLink} />
                                </div>
                            )
                            )
                        }
                        <div className={styles.casesPlaceholder}>
                            <p>More to come soon...</p>
                        </div>
                    </div>
                    <RenderCasesPagination />
                </>
            )
        }

        return (
            <>
                <div className={styles.casesContainer}>
                    {currentItemList.map(work =>
                    (
                        <div className={styles.workCard}>
                            <h1>{work.caseTitle}</h1>
                            <p>{work.caseTitle}</p>
                            <Link href={work.caseLink}>{work.caseTitle}</Link>
                            <img src={work.caseLink} />
                        </div>
                    )
                    )}
                </div>
                <RenderCasesPagination />
            </>
        )
}


interface WorkSectionProps {
    qtd: number;
}


const WorkSection:FunctionComponent<WorkSectionProps> = ({qtd}) => {

    const [currentWorkNav, setCurrentWorkNav] = useState("work");


    return (
        <>
            <section className={styles.WorkSection}>
                <div className={styles.WorkSectionContainer}>
                    <nav>
                        <ul className={styles.WorkUl}>
                            <li className={styles.WorkLi}>
                                <button onClick={() => setCurrentWorkNav("work")} className={currentWorkNav == "work" ? styles.workNavActive : ""}>Cases</button>
                            </li>
                            <li className={styles.WorkLi}>
                                <button onClick={() => setCurrentWorkNav("articles")} className={currentWorkNav == "articles" ? styles.workNavActive : ""}>Articles</button>
                            </li>
                        </ul>
                    </nav>

                    {currentWorkNav == "work" ? <RenderWorkCases qtd={qtd} /> : <p>You're seeing a paragraph container for Link 1</p>}

                </div>
            </section>
        </>
    )
}

export default WorkSection;