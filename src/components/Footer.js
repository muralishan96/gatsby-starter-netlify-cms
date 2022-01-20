import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import youtube from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer has-background-black has-text-white-ter">
          <div className="content has-background-black has-text-white-ter">
            <div className="container has-background-black has-text-white-ter">
              <div className="columns">
                <div className="column is-3">
                  <section className="menu">
                    <img
                      src={logo}
                      alt="Swakruta Charitable Trust"
                      style={{ width: "11em", height: "6em" }}
                    />
                    <p className="is-size-8">
                      ‘Swakruta’ is for self made Women. An Non-profit
                      organization founded in 2007 providing a platform to
                      promote Business Networking and entrepreneurship.
                    </p>
                  </section>
                </div>

                <div className="column is-3">
                  <section>
                    <ul className="menu-list">
                      <li>
                        <Link className="navbar-item" to="/about">
                          About Swakruta
                        </Link>
                        <Link className="navbar-item" to="/event">
                          Events
                        </Link>
                        <Link className="navbar-item" to="/blog">
                          Our Stories
                        </Link>
                      </li>
                      <Link className="navbar-item" to="/members">
                        Members
                      </Link>
                      <li></li>
                      <li>
                        <Link className="navbar-item" to="/contact">
                          Register
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-3">
                  <section>
                    <ul className="menu-list">
                      <li>
                        <Link className="navbar-item" to="/#">
                          Business Networking
                        </Link>
                        <Link className="navbar-item" to="/#">
                          Trade shows & Events
                        </Link>
                        <Link className="navbar-item" to="/#">
                          Conferences & Training Programs
                        </Link>
                      </li>
                      <Link className="navbar-item" to="/#">
                        CSR Projects by Swakruta
                      </Link>
                      <li></li>
                      <li>
                        <Link className="navbar-item" to="/#">
                          Trips by Swakruta
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-3 social">
                  <section className="menu">
                    <ul className="menu-list">
                      <li>Address</li>
                      <li>Sobha Oman Topaz Apartment, </li>
                      <li>Agara, Sarjapur Main Road</li>
                      <li>Bengaluru - 560102</li>
                      <li>Email: manik@swakruta.in</li>
                      <li>Mobile: 98860 46987</li>
                    </ul>
                  </section>
                  <section className="social">
                    <a
                      title="facebook"
                      href="https://www.facebook.com/groups/169664293816813/"
                    >
                      <img
                        src={facebook}
                        alt="Facebook"
                        style={{ width: "1em", height: "1em" }}
                      />
                    </a>
                    <a title="twitter" href="https://twitter.com/">
                      <img
                        className="fas fa-lg"
                        src={twitter}
                        alt="Twitter"
                        style={{ width: "1em", height: "1em" }}
                      />
                    </a>
                    <a title="instagram" href="https://instagram.com">
                      <img
                        src={instagram}
                        alt="Instagram"
                        style={{ width: "1em", height: "1em" }}
                      />
                    </a>
                    <a title="youtube" href="https://youtube.com">
                      <img
                        src={youtube}
                        alt="youtube"
                        style={{ width: "1em", height: "1em" }}
                      />
                    </a>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <section className="container is-size-7">
            <panel>© 2019 SWAKRUTA CHARITABLE TRUST; ALL RIGHTS RESERVED</panel>
          </section>
        </footer>
      </div>
    );
  }
};

export default Footer;
