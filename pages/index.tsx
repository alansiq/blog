import Head from 'next/head'
import styles from '../styles/Home.module.scss';
import SkyParticles from '../components/skyparticles';
import LottieAstronaut from '../components/lottie/astronaut';
import Button from '../components/button';
import dynamic from 'next/dynamic';
import AboutMe from '../components/AboutMe';

const Typewriter = dynamic(() => import('../components/Typewriter'), { ssr: false, loading: () => <p>Loading</p> })
const WorkSection = dynamic(() => import('../components/WorkSection'),{ ssr: false, loading: () => <p>Loading</p>})


export default function Home() {

  return (
    <>
      <Head>
        <title>Alan Siqueira | UI/UX Designer and Web Developer</title>
      </Head>

      <section className={styles.HeroContainer}>
        <header className={styles.HeaderContainer}>
          <div>
            <Typewriter
              className={styles.typical}
              content={['Product Designer', 1000, 'Front-end Developer', 1000, 'React fanatic', 1000, 'NodeJS enthusiast', 1000, 'UI/UX Designer', 1000]}
            />
            <h1>Hi, I am <strong>Alan Siqueira</strong></h1>
            <p>I will transform your ideas into successful digital products</p>
            <Button href="https://www.linkedin.com/in/alanpsiqueira/">Contact me on LinkedIn</Button>
          </div>
          <div>
            <LottieAstronaut className={styles.HeroLottie} />
          </div>

        </header>

        <SkyParticles className={styles.tsparticles} />
      </section>

      <AboutMe />

      <WorkSection />
    </>
  )
}
