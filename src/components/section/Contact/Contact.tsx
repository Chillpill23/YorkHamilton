import Button from '../../ui/Button/Button'
import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={`contaniner ${styles.contact__content}`}>
        <h1>Hire Your Next Candidate Now!</h1>
        <p>Let us help you find the perfect person or team to meet your specific requirements</p>
        <Button btnTitle='Enquire now' btnStyle='primary'/>
      </div>
    </section>
  )
}

export default Contact