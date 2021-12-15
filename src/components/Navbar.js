import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import LogoLight from '../images/adoptium-logo-light.svg';
import LogoDark from '../images/adoptium-logo-dark.svg';

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="navbar navbar-expand-xl border-bottom" style={{ height: '7rem', paddingTop: '1.25em', paddingBottom: '1.25em' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
          {/* <Logo style={{ height: '3em' }}/> */}
          <LogoLight style={{ height: '3em' }} className="light-mode-only" />
          <LogoDark style={{ paddingLeft: '.2em', paddingRight: '.2em', height: '1.9em' }} className="dark-mode-only" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
                aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <ExactNavLink
                to="/"
              >
                Home
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/download"
              >
                Download
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/installation"
              >
                Installation
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/migration"
              >
                Migration Guide
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/faq"
              >
                FAQ
              </ExactNavLink>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><ExactNavLink className="dropdown-item" href="./jmc">Eclipse Mission Control</ExactNavLink></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Further Information
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><ExactNavLink className="dropdown-item" href="./about">About</ExactNavLink></li>
                <li><ExactNavLink className="dropdown-item" href="./support">Support</ExactNavLink></li>
                <li><ExactNavLink className="dropdown-item" href="./members">Members</ExactNavLink></li>
                <li><ExactNavLink className="dropdown-item" href="./sponsors">Sponsors</ExactNavLink></li>
                <li><ExactNavLink className="dropdown-item" href="https://api.adoptium.net">API</ExactNavLink></li>
                <li><ExactNavLink className="dropdown-item" href="https://blog.adoptium.net">Blog</ExactNavLink></li>
                <li><ExactNavLink className="dropdown-item" href="./supported-platforms">Supported Platforms</ExactNavLink></li>
              </ul>
            </li>
          </ul>
        </div>
        <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
