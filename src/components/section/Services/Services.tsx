import styles from './Services.module.scss'
import Card from "../../ui/Card/Card"

import { ServicesData } from '../../../constants/Services'
import Button from '../../ui/Button/Button'


const Services = () => {
  return (
    <section className={styles.services}>
      <div className={`container ${styles.services__wrapper}`}>
        <div className='section__header'>
          <small className='section__tag'>Global Talent Agency</small>
          <h3 className='section__title'>Staffing Solutions Without Boundaries</h3>
          <p className='section__subtitle'>We connect businesses with specialised, top-tier remote talent.</p>
        </div>

        <div className={styles.services__content}>
          {ServicesData.map(service => {
            return(
              <Card key={service.title}
                icon={service.icon}
                title={service.title}
                content={service.content}
                btnTitle={service.btnTitle}
                btnIcon={service.btnIcon}
              />
            )
          })}
        </div>
      </div>

      <Button
        btnTitle='Enquire Now'
        btnStyle='primary'
      />
    </section>
  )
}

export default Services