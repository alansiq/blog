import Typical from 'react-typical';


const Typewriter = (props) => {

    return (
        <Typical
            steps={props.content}
            loop={Infinity}
            wrapper="p"
            className={props.className}
        />
    )
}

export default Typewriter;