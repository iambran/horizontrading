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
          <a href="/" className="logo px-0">
          <img src="/horizon-trading-rounded.svg" width="auto" height="40">
          </img>
          </a>
          <a role="button" className="navbar-burger" onClick={toggleMenu} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="column p-0 mt-6">
          <a className="menu-link is-block has-text-weight-bold has-text-white is-size-4 p-4 active " href="/">Home</a>
        </div>
        <div className="column p-0">
          <a className="menu-link is-block has-text-weight-bold has-text-white is-size-4 p-4" href="/about">About</a>
        </div>
        <div className="column p-0">
          <a onClick={toggleSubmenu} className="menu-link has-submenu has-right-arrow is-block has-text-weight-bold has-text-white is-size-4 p-4" href="#">Our Products</a>
        </div>
        <div className="column p-0 submenu">
          <a className="menu-link is-block has-text-weight-semi-bold has-text-white is-size-6 px-4 py-2" href="/products/Diesel-Water-Pump">Diesel Water Pumps</a>
        </div>
        <div className="column p-0 submenu">
          <a className="menu-link is-block has-text-weight-semi-bold has-text-white is-size-6 px-4 py-2 mb-4" href="/products/Betelte-Brush-Chipper">Brush Chippers</a>
        </div>
        <div className="column p-0">
          <a className="menu-link is-block has-text-weight-bold has-text-white is-size-4 p-4" href="/contact">Contact</a>
        </div>
      </div>
    </header>
  )
}
