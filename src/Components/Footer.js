import React from "react";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between mt-4 mx-auto">
        <div className="flex items-start">
          <img src={logo} alt="logo" className="w-20 h-19 ml-20 max-w-24" />
        </div>
        <div className="text-start mt-10">
          <p className="text-gray-500">Features</p>
          <p className="text-gray-500">Community</p>
          <p className="text-gray-500">Affiliate</p>
          <p className="text-gray-500">API</p>
          <p className="text-gray-500">About</p>
        </div>

        <div className="text-start mr-10">
          <h6 className="text-white">Business Features</h6>
          <p className="text-gray-500">Data-Based Chatbot Training</p>
          <p className="text-gray-500">Model Fine-Tuning</p>
          <p className="text-gray-500">Sales & Customer Service Smart Agents</p>
        </div>
      </div>

<div className="flex flex-row items-center justify-between mx-auto mt-20">
  <div className="text-start ml-10">
    <p className="text-gray-500">
      © 2023 Mangcoding. All rights reserved.
    </p>
  </div>

  <div className="text-center">
    <p className="text-gray-500">Privacy Policy</p>
    <p className="text-gray-500">Terms of Service</p>
    <p className="text-gray-500">Cookie Policy</p>
  </div>

  <div className="flex flex-row gap-1 mr-20">
    <div className="instagram">
      <a href="/">
        <i className="bi bi-instagram" style={{ color: "#ffffff" }}></i>
      </a>
    </div>
    <div className="facebook">
      <a href="/">
        <i className="bi bi-facebook" style={{ color: "#ffffff" }}></i>{" "}
      </a>
    </div>
    <div className="twitter">
      <a href="/">
        <i className="bi bi-twitter" style={{ color: "#ffffff" }}></i>
      </a>
    </div>
    <div className="linkedin">
      <a href="/">
        <i className="bi bi-linkedin" style={{ color: "#ffffff" }}></i>
      </a>
    </div>
  </div>
</div>

    </>
  );
};

export default Footer;
