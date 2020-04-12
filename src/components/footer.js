import React from "react";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import "./footer.css";
import { GiFilmProjector } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="columns">
      <div className="column">
        <h4 className="footer-header">
          {" "}
          <GiFilmProjector size={56} /> &nbsp; U-Trailers
        </h4>
        <ul className="cpyrights">
          <li>Designed and Copyrights By</li>
          <li className="name">Rajdeep Chandra</li>
        </ul>

        <ul className="social">
          <li>
            <a href="https://www.linkedin.com/in/rajdeepcoder/">
              <FaLinkedin size={28} />
            </a>
          </li>
          <li>
            <a href="http://github.com/Rajdeepc">
              <FaGithubSquare size={28} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/rajrock38">
              <FaTwitterSquare size={28} />
            </a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h4 className="footer-header">Quick Links</h4>
        <ul>
          <li>Trailers</li>
          <li>Movies</li>
          <li>Actors</li>
          <li>News</li>
        </ul>
      </div>
      <div className="column">
        <h4 className="footer-header">NEWSLETTER</h4>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input className="input" type="text" placeholder="Newsletter Sign Up"/>
          </p>
          <p className="control">
            <a href="#" className="button utrailer-button">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
