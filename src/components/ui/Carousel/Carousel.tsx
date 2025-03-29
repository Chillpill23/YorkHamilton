import styles from './Carousel.module.scss'

interface CarouselProps {
  images:string[];
  speed:number;
}

const Carousel = ({ images, speed = 5000 }:CarouselProps) => {

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__wrapper}>
        <section className={styles.carousel__images} style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {images.map((image,index) => (
            <div className={styles.image} key={index}>
              <img src={image} alt='Partner logo' />
            </div>
          ))}
        </section>
        <section className={styles.carousel__images} style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {images.map((image,index) => (
            <div className={styles.image} key={index}>
              <img src={image} alt='Partner logo' />
            </div>
          ))}
        </section>
        <section className={styles.carousel__images} style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {images.map((image,index) => (
            <div className={styles.image} key={index}>
              <img src={image} alt='Partner logo' />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Carousel

