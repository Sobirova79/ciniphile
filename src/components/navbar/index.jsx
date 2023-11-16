import React from 'react'
import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import Container from '../../layout/Container'
import { navbarList } from '../../helpers'
import logo from '../../images/logo.png'
import styles from './navbar.module.scss'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container className={styles.navbar__container}>
        <Link to="/" className={styles.navbar__logo}>
          <img src={logo} alt="logo" />
        </Link>
        <div className={styles.navbar__list}>
          {
            navbarList.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => isActive
                  ? classNames(styles.navbar__link_active, styles.navbar__link)
                  : styles.navbar__link}
              >
                {link.name}
              </NavLink>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default Navbar