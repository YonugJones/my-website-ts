import { useState, type JSX } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import OverlayMenu from './OverlayMenu'

const Layout = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <NavBar toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <OverlayMenu isOpen={menuOpen} toggleMenu={closeMenu} />
      <main className='pt-20'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
