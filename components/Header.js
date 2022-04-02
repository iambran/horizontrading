import react from 'react';

export default function Header() {
  function toggleMenu() {
    document.querySelector('.sidebar-header').classList.toggle('open');
  }

  function toggleSubmenu() {
    document.querySelectorAll('.submenu').forEach(menu => menu.classList.toggle('is-block'));
    document.querySelector('.has-submenu').classList.toggle('rotate');
  }

  return (
    <header id="layout-header">
      <div className="sidebar-header is-flex-direction-column">
        <div className="column is-flex p-4 pr-6 mt-6">
        <Link href="/">
          <a className="logo px-0">
          <img src="/horizon-trading-rounded.svg" width="auto" height="40">
          </img>
          </a>
        </Link>
          <a role="button" className="navbar-burger" onClick={toggleMenu} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="column p-0 mt-6">
        <Link href="/">
          <a className="menu-link is-block has-text-weight-bold has-text-white is-size-4 p-4 active ">Home</a>
        </Link>
        </div>
        <div className="column p-0">
        <Link href="/about">
          <a className="menu-link is-block has-text-weight-bold has-text-white is-size-4 p-4">About</a>
        </Link>
        </div>
        <div className="column p-0">
        <Link href="/products">
          <a onClick={toggleSubmenu} className="menu-link has-submenu has-right-arrow is-block has-text-weight-bold has-text-white is-size-4 p-4" href="#">Our Products</a>
        </Link>
        </div>
        <div className="column p-0 submenu">
        <Link href="/products/Diesel-Water-Pump">
          <a className="menu-link is-block has-text-weight-semi-bold has-text-white is-size-6 px-4 py-2">Diesel Water Pumps</a>
        </Link>
        </div>
        <div className="column p-0 submenu">
        <Link href="/products/Betelte-Brush-Chipper">
          <a className="menu-link is-block has-text-weight-semi-bold has-text-white is-size-6 px-4 py-2 mb-4">Brush Chippers</a>
        </Link>
        </div>
        <div className="column p-0">
        <Link href="/contact">
          <a className="menu-link is-block has-text-weight-bold has-text-white is-size-4 p-4" href="/contact">Contact</a>
        </Link>
        </div>
      </div>
    </header>
  )
}
