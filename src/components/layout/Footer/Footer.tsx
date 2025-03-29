import styles from './Footer.module.scss'

import logo from '../../../assets/yh-logo.png'

import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__wrapper}`}>
        <div className={styles.footer__inner__wrapper}>
          <div className={styles.footer__info}>
            <img src={logo} alt='York Hamilton Logo'/>
            <ul className={styles.footer__details}>
              <li><FaPhoneAlt /> (08) 7082 0337</li>
              <li><FaEnvelope /> hi@yorkhamilton.com</li>
            </ul>
            <div className={styles.footer__socials}>
              <a href='/' title='Check our facebook!'><FaFacebookF/></a>
              <a href='/' title='Check our Instagram!'><FaInstagram/></a>
              <a href='/' title='Check our Linkedin!'><FaLinkedinIn/></a>
            </div>
          </div>

          <div className={styles.footer__nav}>
            <div className={styles.footer__col}>
              <h6 className={styles.footer__title}>Pages</h6>
              <ul className={styles.footer__links}>
                <li><a href='/' title='Homepage'>Home</a></li>
                <li><a href='/' title='Who We Are'>Who We Are</a></li>
                <li><a href='/' title='Our People'>Our People</a></li>
                <li><a href='/' title='Testimonials'>Testimonials</a></li>
              </ul>
            </div>
            <div className={styles.footer__col}>
              <h6 className={styles.footer__title}>Services</h6>
              <ul className={styles.footer__links}>
                <li><a href='/' title='Finance Talent'>Finance Talent</a> </li>
                <li><a href='/' title='Legal Talent'>Legal Talent</a> </li>
                <li><a href='/' title='Real Estate Talent'>Real Estate Talent</a> </li>
                <li><a href='/' title='Other Talent'>Other Talent</a> </li>
              </ul>
            </div>
            <div className={styles.footer__col}>
              <h6 className={styles.footer__title}>Support</h6>
              <ul className={styles.footer__links}>
                <li><a href='/' title='Contact Us'>Contact Us</a> </li>
                <li><a href='/' title='FAQ'>FAQ</a> </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footer__copyright}>
         <p>© 2025 • <span className='highlight'>York Hamilton</span> • All Rights Reserved • <span className='highlight'>Powered by Adelaide SEO Marketing</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer