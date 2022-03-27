import react from 'react';


export default function Header() {
  return (
    <header id="layout-header">
      <div className="sidebar-header is-flex-direction-column">
        <div className="column is-flex p-4 pr-6 mt-6">
          <a href="https://horizontrading.cn" className="logo px-0">
          <img src="https://horizontrading.cn/themes/horizon/assets/images/horizon-trading-rounded.svg" width="auto" height="40">
          </img>
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="column p-0 mt-6 is-hidden-touch">
          <a className="menu-link is-block has-text-weight-bold has-text-white is-size-4 p-4 active " href="https://horizontrading.cn">Home</a>
        </div>
        <div className="column p-0 is-hidden-touch">
          <a className="menu-link is-block has-text-weight-bold has-text-white is-size-4 p-4" href="https://horizontrading.cn/about">About</a>
        </div>
        <div className="column p-0 is-hidden-touch">
          <a className="menu-link has-submenu has-right-arrow is-block has-text-weight-bold has-text-white is-size-4 p-4" href="#">Our Products</a>
        </div>
        <div className="column p-0 submenu">
          <a className="menu-link is-block has-text-weight-semi-bold has-text-white is-size-6 px-4 py-2" href="https://horizontrading.cn/products/diesel-water-pump">Diesel Water Pumps</a>
        </div>
        <div className="column p-0 submenu">
          <a className="menu-link is-block has-text-weight-semi-bold has-text-white is-size-6 px-4 py-2 mb-4" href="https://horizontrading.cn/products/brush-chipper">Brush Chippers</a>
        </div>
        <div className="column p-0 is-hidden-touch">
          <a className="menu-link is-block has-text-weight-bold has-text-white is-size-4 p-4" href="https://horizontrading.cn/contact">Contact</a>
        </div>
      </div>
    </header>
  )
}
