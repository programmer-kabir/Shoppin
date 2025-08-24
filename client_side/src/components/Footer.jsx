import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto bg-sky-50 py-10 text-sm">
      <div className="container">
        <div className="divide-y">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-7">
            <div className="space-y-3">
              <h3 className="uppercase font-semibold">Company</h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <Link to="/" className={`hover:text-pink-600`}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/" className={`hover:text-pink-600`}>
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase font-semibold">Support</h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <Link to="/" className={`hover:text-pink-600`}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/" className={`hover:text-pink-600`}>
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className={`hover:text-pink-600`}>
                    Terms of service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase font-semibold">Help</h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <Link to="/" className={`hover:text-pink-600`}>
                    How to buy
                  </Link>
                </li>
                <li>
                  <Link to="/" className={`hover:text-pink-600`}>
                    Payment
                  </Link>
                </li>
                <li>
                  <Link to="/" className={`hover:text-pink-600`}>
                    Shipping & Deliveries
                  </Link>
                </li>
                <li>
                  <Link to="/" className={`hover:text-pink-600`}>
                    Exchange and Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:justify-self-end space-y-3">
              <div className="uppercase font-semibold">Social media</div>
              <div className="flex text-xl text-gray-700 space-x-3">
                <Link to="/" title="Facebook" className={`hover:text-pink-600`}>
                  <FaFacebook />
                </Link>
                <Link
                  to="/"
                  title="Instagram"
                  className={`hover:text-pink-600`}
                >
                  <FaInstagram />
                </Link>
                <Link to="/" title="Twitter" className={`hover:text-pink-600`}>
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-7 text-center space-y-1">
            <img src="/favicon.svg" alt="" className={`w-12 mx-auto`} />
            <p>
              &copy; 2023 <span className={`font-bold`}>Shoppin</span>. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
