import React from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const activeStyle = {
  color: '#3273dc'
}

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/"  title="Logo">
              <img src={logo} alt="Swakruta" style={{ width: '11em', height: '4.5em' }} />
            </Link>
            {/* Hamburger menu */}
            <div className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
               >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/about"  activeStyle={activeStyle}>
                About
              </Link>
              <Link className="navbar-item" to="/history"  activeStyle={activeStyle}>
                Swakruta Sewa
              </Link>
              <Link className="navbar-item" to="/ebazaar"  activeStyle={activeStyle}>
                E-Bazaar
              </Link>
              <Link className="navbar-item" to="/event"  activeStyle={activeStyle}>
                Events
              </Link>
              <Link className="navbar-item" to="/blog" activeStyle={activeStyle}>
                Success Stories
              </Link>
              <Link className="navbar-item" to="/contact/examples" activeStyle={activeStyle}>
                Business Listing
              </Link>
              <Link className="navbar-item" to="/contact" activeStyle={activeStyle}>
                Register
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <span className="icon">
                  <img src={github} alt="Github" />
                </span> */}
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
