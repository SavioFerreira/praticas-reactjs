import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="src/assets/pingostark-profile.jpg"/>
          <div className={styles.authorInfo}>
            <strong>Pingo da massa</strong>
            <span>starksan</span>
          </div>
        </div>
        <time  title="29 de Setembro" dateTime="27/09/2024 "> Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Aqui estou mais um dia sobre o frio olhar do vigia da pia</p>
        <p>Amais um dia com ousadia e alegria</p>
        <p>Tio boby</p>

      </div>
    </article>
  )
}