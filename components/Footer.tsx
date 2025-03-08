import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 py-6 bg-primary flex items-center justify-center text-white">
      <p>
        &copy; {new Date().getFullYear()} E-Commerce Shop. All rights reserved.
        | Designed by{" "}
        <Link href="#" target="_blank">
          Maro Asam
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
