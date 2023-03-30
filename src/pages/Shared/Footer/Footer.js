import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/MT-Logo.webp";

const Footer = () => {
  return (
    <section style={{ marginTop: "3rem" }} className="container-fluid position-sticky top-100">
      <footer className="bg-light py-3">
        <div className="my-2 text-center">
          <Link to="/" className="text-decoration-none fw-bold text-dark fs-3">
            <img src={logo} width="50" height="50" className="d-inline-block align-top rounded-5 me-2" alt="logo" />
            Movie Tone
          </Link>
        </div>
        <div className="text-center py-3">
          <h6 className="p-1">Get connected with us </h6>
          <div>
            <a className="mx-3" href="https://www.facebook.com/profile.php?id=100017560637039">
              <FaFacebook className="text-primary fw-bold  fs-3"></FaFacebook>
            </a>
            <a className="mx-3" href="https://www.linkedin.com/in/nazmul-sujon-39647b244/">
              <FaLinkedinIn className="text-primary fw-bold  fs-3"></FaLinkedinIn>
            </a>
            <a className="mx-3" href="https://github.com/nazmul68">
              <FaGithub className="text-primary fw-bold  fs-3"></FaGithub>
            </a>
            <a className="mx-3" href="https://api.whatsapp.com/send/?phone=01776097768">
              <FaWhatsapp className="text-primary fw-bold  fs-3"></FaWhatsapp>
            </a>
            <a className="mx-3" href="https://www.instagram.com/nazmul_sujon/">
              <FaInstagram className="text-primary fw-bold  fs-3"></FaInstagram>
            </a>
          </div>
        </div>
        <div>
          <p className=" mb-0 text-center mt-3">© 2023 Copyright & all right reserved by Movie Tone</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
