import react from 'react'

export default function Footer() {
  return (
    <footer id="layout-footer">
      <footer className="footer py-5">
        <div className="is-flex is-desktop is-justify-content-space-between">
          <p>Copyright &copy; 2022 Horizon Trading. All Rights Reserved.</p>
          <div className="footer-content-right is-flex is-align-content-center is-hidden-mobile">
          <a target="_blank" className="credit is-size-7">Developed by Brandon Zhang</a>
        </div>
        </div>
      </footer>
    </footer>
  )
}
