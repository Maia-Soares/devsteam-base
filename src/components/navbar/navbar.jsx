import styles from './navbar.module.css'
import Logo from '@/components/logo/logo'
import { BsCart4 } from 'react-icons/bs'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <input />
      <BsCart4 size={40} />
    </nav>
  )
}
