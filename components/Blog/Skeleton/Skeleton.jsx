import styles from "./styles.module.scss";

export default function Skeleton({ className, variant = "Dark", ...other }) {
  const variantClass = variant === "light" || variant === "Light" ? styles.light : styles.dark;
  
  return (
    <div className={`${className} ${styles.skeleton} ${variantClass}`} {...other}> </div>
  );
}