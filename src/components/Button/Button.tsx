import styles from "./Button.module.scss";
export const Button = (props: any) => {
  return <button className={styles.buttonLayout}>{props.children}</button>;
};
