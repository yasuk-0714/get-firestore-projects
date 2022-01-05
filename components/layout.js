import styles from "./layout.module.css"

export default function Layout(props) {
  const { children } = props;
  return <div className={styles.container}>{children}</div>
}