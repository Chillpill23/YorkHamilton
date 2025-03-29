import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from './StatsCounter.module.scss'

interface CircularProgressProps {
  size?: number;
  strokeWidth?: number;
  stat:number;
  duration?: number; 
}

const StatsCounter: React.FC<CircularProgressProps> = ({
  size = 120,
  strokeWidth = 5,
  stat,
  duration = 2,
}) => {
  const [count, setCount] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = 0

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current >= stat) {
        clearInterval(interval);
      } else {
        current += 1;
        setCount(current);
      }
    }, (duration * 1000) / 60); 

    return () => clearInterval(interval);
  }, [stat, duration]);

  return (
    <div className={styles.stat__counter}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#ddd"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <motion.circle
          className={styles.stat__color}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration, ease: "easeInOut" }}
          strokeLinecap="round"
        />
      </svg>
      <span className={styles.stat__count}>{count}</span>
    </div>
  );
};

export default StatsCounter;