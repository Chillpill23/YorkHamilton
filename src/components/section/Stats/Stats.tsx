import StatsCounter from '../../ui/Stats/StatsCounter'
import styles from './Stats.module.scss'

import {StatsData} from '../../../constants/Stats'

const Stats = () => {
  return (
    <section className={styles.stats}>
    <div className={`container`}>
      <div className='section__header dark'>
        <small className='section__tag'>Let’s work together</small>
        <h3 className='section__title'>We generate results for our customers</h3>
        <p className='section__subtitle'>We connect businesses with specialised, top-tier remote talent.</p>
      </div>

      <div className={styles.stats__content}>
        {StatsData.map(stat => {
          return(
            <div className={styles.stats__card}>
              <StatsCounter stat={stat.stat}/>
              <h4>{stat.title}</h4>
              <p>{stat.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  </section>
  )
}

export default Stats