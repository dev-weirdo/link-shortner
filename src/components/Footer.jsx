import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content absolute bottom-0 w-full">
      <div>
        <p className="md:text-base">
          &#169;{new Date().getFullYear()} - Made with &#9829; by{" "}
          <a
            className="hover:cursor-pointer font-bold"
            href="https://github.com/dev-weirdo" target='_blank'
          >
            we1rd0
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
