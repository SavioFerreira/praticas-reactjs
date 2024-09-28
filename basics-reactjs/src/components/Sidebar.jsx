import styles from './Sidebar.module.css'
import {PencilSimpleLine} from '@phosphor-icons/react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1625479143275-0e43b682297f?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <div className={styles.profile}>
        <img className={styles.avatar} src="src/assets/dog-profile.jpg"/>
        <strong>Peakyblindo</strong>
        <span>Sponsor</span>
      </div>
      <footer>
        <a href="#">
          <PencilSimpleLine size={20}/>
          Editar perfil
        </a>
      </footer>
    </aside>
  )
}