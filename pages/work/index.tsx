import dynamic from 'next/dynamic';


const Deviceful = dynamic(() => import('../../components/deviceful/laptop'), {
    ssr: false
})

function Work() {
    return (
        <>  
            <Deviceful />

        </>
    )
}

export default Work;