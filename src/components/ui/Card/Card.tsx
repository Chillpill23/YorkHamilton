
import Button from '../Button/Button';
import styles from './Card.module.scss'

import {ButtonProps} from '../Button/Button'

interface CardProps extends ButtonProps{
  icon:React.FC;
  title:string;
  content:string;
}

const Card = ({icon: Icon, title, content,btnTitle, btnContent, btnIcon, btnStyle }:CardProps) => {
  return (
    <a href='/' title='Find the talent you need!'>
      <article className={styles.card}>
        <header className={styles.card__header}>
          <Icon />
          <h4>{title}</h4>
        </header>
        <div className={styles.card__body}>
          <p className={styles.card__content}>
            {content}
          </p>
        </div>
        <footer className={styles.card__footer}>
          <Button 
            btnTitle={btnTitle} 
            btnContent={btnContent} 
            btnIcon={btnIcon} 
            btnStyle={btnStyle}
          />
        </footer>
      </article>
    </a>
  )
}

export default Card