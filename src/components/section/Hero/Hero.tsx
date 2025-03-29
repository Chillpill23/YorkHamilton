import heroVideo from '../../../assets/hero/hero.mp4'
import Button from '../../ui/Button/Button';
import styles from './Hero.module.scss';


const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__video}>
        <video width="100%" height="500px" autoPlay muted loop playsInline >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className={styles.hero__overlay}>
        <h1>Connecting You With The <span className='highlight'>Top 1%</span> Of Remote Professionals</h1>
        <h6>World Class Talent in Legal, Finance, and Real Estate.</h6>
        <Button btnContent="Get Started Today" btnStyle='primary' btnTitle="Get Started Today"/>
      </div>
    </section>
  )
}

export default Hero