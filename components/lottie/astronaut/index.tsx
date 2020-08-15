import Lottie from 'react-lottie';
import animationData from './astronaut.json';

interface LottieProps {
  loop?: boolean;
  autoplay?: boolean;
  size?: number;
  className ?: string;
}

const LottieAstronaut = (props: LottieProps) => {

  const defaultOptions = {
    loop: props.loop ? props.loop : true,
    autoplay: props.autoplay ? props.autoplay : true,
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    
    }
  }


  return (

    <div className={props.className}>
      <Lottie
        isClickToPauseDisabled
        options={defaultOptions}
        height={props.size ? props.size : ''}
        width={props.size ? props.size : ''}
      />
    </div>

  )
}

export default LottieAstronaut;