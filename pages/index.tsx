import Head from 'next/head'
import styles from '../styles/Home.module.scss';
import SkyParticles from '../components/skyparticles';
import Button from '../components/button';
import dynamic from 'next/dynamic';
import AboutMe from '../components/AboutMe';

const WorkSection = dynamic(() => import('../components/WorkSection'),{ ssr: false, loading: () => <p>Loading</p>})


export default function Home() {

  return (
    <>
      <Head>
        <title>Alan Siqueira | Fullstack Web Developer</title>
      </Head>

      <section className={styles.HeroContainer}>
        <header className={styles.HeaderContainer}>
          <div>
            <small>My name is</small>
            <div className={styles.TitleContainer}>
              <h1>Alan Siqueira</h1>
              <h1 className={styles.secondTitle}>fullstack developer</h1>
            </div>
            <p>Suspendisse vitae fermentum semper amet, felis est ornare gravida dolor. Ipsum vulputate mattis sapien pellentesque amet at est. Vel sem id blandit dictum et, mauris facilisis facilisis auctor. Elit pharetra, in magna orci, in. Tortor.</p>
            <Button href="https://www.linkedin.com/in/alanpsiqueira/">
              Contact me on LinkedIn 
            </Button>
          </div>
        </header>

        {/* <SkyParticles className={styles.tsparticles} /> */}
      </section>

      <AboutMe />

      <WorkSection />
    </>
  )
}
