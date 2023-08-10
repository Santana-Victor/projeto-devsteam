import styles from "./styles.module.css";

import IconLogo from "../icon_logo/IconLogo";

export default function Logo() {
  return (
    <div className={styles.container}>
      <IconLogo />
      <span className={styles.text_logo}>DevSteam</span>
    </div>
  );
}
