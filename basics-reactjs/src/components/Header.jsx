import styles from './Header.module.css'

import ninjaLogo from '../assets/ninjaBlade.png'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ninjaLogo} alt="pinguzada da massa"/>
      <h1>ComuniVerso</h1>
    </header>
  );
}