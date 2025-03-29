import styles from "./Button.module.scss" 

export interface ButtonProps{
  btnTitle:string,
  btnContent?:string,
  btnIcon?:React.FC,
  btnStyle?:string,
}

const Button = ({btnContent, btnIcon:Icon, btnTitle, btnStyle}:ButtonProps) => {
  return (
    <button 
      className={btnStyle ? styles[btnStyle] : styles.secondary}
      aria-label={btnContent ? btnContent : btnTitle}
      title={btnTitle}
    >
      {btnTitle}
      {Icon && <Icon />}
    </button>
  )
}

export default Button