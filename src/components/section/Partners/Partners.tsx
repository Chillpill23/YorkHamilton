import Carousel from "../../ui/Carousel/Carousel"

import styles from './Partners.module.scss'

import p1 from '../../../assets/partners/Magain.png'
import p2 from '../../../assets/partners/seima.png'
import p3 from '../../../assets/partners/bond.png'
import p4 from '../../../assets/partners/ray.png'
import p5 from '../../../assets/partners/aventi.png'
import p6 from '../../../assets/partners/kk.png'


const images = [p1, p2, p3, p4, p5, p6];



const Partners = () => {
  return (
    <section className={styles.partners}>
        <div className='section__header dark'>
          <small className='section__tag'>Proven. Trusted.</small>
          <h3 className='section__title'>Powering success for <span className="highlight">150+</span> companies.</h3>
          <p className='section__subtitle'>Satisfaction isn’t a goal—it’s a guarantee.</p>
        </div>
      <Carousel images={images} speed={7000}/>
    </section>
  )
}

export default Partners