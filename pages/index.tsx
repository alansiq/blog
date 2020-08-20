import Head from 'next/head'
import styles from '../styles/Home.module.scss';
import Typewriter from '../components/Typewriter';
import SkyParticles from '../components/skyparticles';
import LottieAstronaut from '../components/lottie/astronaut';
import Button from '../components/button';


export default function Home() {

  return (
    <>
      <Head>
        <title>Alan Siqueira</title>
      </Head>

      <section className={styles.HeroContainer}>
        <header className={styles.HeaderContainer}>
          <div>
            <Typewriter
              className={styles.typical}
              content={['Product Designer', 1000, 'Front-end Developer', 1000, 'React fanatic', 1000, 'NodeJS enthusiast', 1000, 'UI/UX Designer', 500]}
            />
            <h1>Hi, I am <strong>Alan Siqueira</strong></h1>
            <p>I will transform your ideas into successful digital products</p>
            <Button href="/work" className="botaozaum" >Esse é um botão</Button>
          </div>
          <div>
            <LottieAstronaut className={styles.HeroLottie} /> 
          </div>

        </header>

        <SkyParticles className={styles.tsparticles} />
      </section>


      <section className={styles.WorkSection}>
        
      </section>


    </>
  )
}
