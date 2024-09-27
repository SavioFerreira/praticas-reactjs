import styles from './Header.module.css'

import logo from '../assets/pingostark-profile.jpg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="pinguzada da massa" />
    </header>
  );
}