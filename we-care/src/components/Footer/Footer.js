import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container bottom_border">
        <div className="row divider">
          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="col_white_footermain pt2">ABOUT</h5>
            <ul className="footer_ul_align">
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/aboutus">About Us</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
            </ul>
          </div>
          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="col_white_footermain pt2">HELP</h5>
            <ul className="footer_ul_align">
              <li>
                <a href="/payments">Payments</a>
              </li>
              <li>
                <a href="/shipping">Shipping</a>
              </li>
              <li>
                <a href="/cancellation">Cancellation & Returns</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className=" col-sm-4 col-md  col-6 col">
            <h5 className="col_white_footermain pt2">POLICY</h5>
            <ul className="footer_ul_align">
              <li>
                <a href="/return">Return Policy</a>
              </li>
              <li>
                <a href="/terms">Terms Of Use</a>
              </li>
              <li>
                <a href="/security">Security</a>
              </li>
              <li>
                <a href="/privacy">Privacy</a>
              </li>
            </ul>
          </div>
          <div className=" col-sm-4 col-md  col-12 col">
            <h5 className="col_white_footermain pt2">Mail Us</h5>
            <ul className="footer_ul_align">
              <li>
                <a href="mailto:wecareteam@gmail.com">
                  <i className="fa fa fa-envelope fleft padding-right"></i>{" "}
                </a>
                <p>
                  360 Huntington Avenue Boston, Massachusetts, MA-02115
                  Telephone:<a href="tel:(857)-869-7841"> (857)-869-7841</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <ul className="foote_bottom_ul_align">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/aboutus">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <p className="text-center">Copyright @ 2020 We Care </p>
        <ul className="social_footer_ul">
          <li>
            <a href="https://www.facebook.com" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
