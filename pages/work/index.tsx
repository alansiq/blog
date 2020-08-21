import dynamic from 'next/dynamic';
import styles from './Work.module.scss';
import { useState, useEffect } from 'react';


const Deviceful = dynamic(() => import('../../components/deviceful/laptop'), {
    ssr: false
});


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
];

const CaseDisplay = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const [deviceComponentList, setDeviceComponentList] = useState([]);

    // Create an array of devices (deviceful) based on workList array
    useEffect(() => {
        let tmpArray = [];
        workList.map(work => {
            tmpArray.push(<Deviceful screenshot={work.caseLink} />)
        });
        setDeviceComponentList(tmpArray);
    }, [])


    return (
        <>
            <div className={styles.mainContainer}>

                <>
                    <div className={styles.contentWrapper}>
                        <h1>{workList[currentPage].caseTitle}</h1>
                        <p>{workList[currentPage].caseDescription}</p>
                    </div>
                    <div className={styles.deviceWrapper}>
                        {deviceComponentList[currentPage]}
                        <button onClick={() => setCurrentPage(0)}>PREVIOUS</button>
                        <button onClick={() => setCurrentPage(1)}>NEXT</button>
                        <button onClick={() => setCurrentPage(2)}>NEXT</button>
                    </div>

                </>

            </div>
        </>
    )
}


export default CaseDisplay;