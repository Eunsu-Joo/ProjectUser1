import styles from "@/styles/Layout.module.css";

export default function Showcase({ bg, title }) {
  return (
    <div className={styles.showcase} style={{ backgroundImage: `url(${bg})` }}>
      <h1>{title}</h1>
      <h2>lo más acordado más olvidado</h2>
    </div>
  );
}
