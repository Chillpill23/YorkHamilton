import styles from './Solutions.module.scss'
import { SolutionsData } from '../../../constants/Solutions'
import Card from '../../ui/Card/Card'

import thumbnailM from '../../../assets/solutions/thumbnail-m.webp'
import thumbnailD from '../../../assets/solutions/thumbnail-d.webp'

const Solutions = () => {
  return (
    <section className={styles.solutions}>
      <div className={`container ${styles.solutions__wrapper__outer}`}>
        <div className={styles.solutions__image}>
          <picture>
            <source srcSet={thumbnailD} media='(min-width:992px)'/>
            <img loading='lazy' src={thumbnailM} alt='Solutions thumbnail'/>
          </picture>
        </div>

        <div className={styles.solutions__wrapper__inner}>
          <div className='solutions section__header'>
            <small className='section__tag'>Success Through Strategy</small>
            <h3 className='section__title'><span className='highlight2'>Achieving Business goals</span> through strategic solutions</h3>
            <p className='section__subtitle'>We do more than just recruit talent – we form strategic partnerships that strengthen and position you as a leader in your industry.</p>
          </div>

          <div className={styles.solutions__content}>
            {SolutionsData.map(solution => {
              return(
                <Card key={solution.title}
                  icon={solution.icon}
                  title={solution.title}
                  content={solution.content}
                  btnTitle={solution.btnTitle}
                  btnIcon={solution.btnIcon}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions