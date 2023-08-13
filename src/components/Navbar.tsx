import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative" href="/" target="_blank">
            HOME
          </Link>
          <Link className="navbar__link relative" href="/" target="_blank">
            CATEGORIES
          </Link>
          <Link className="navbar__link relative" href="/" target="_blank">
            MEN'S
          </Link>
          <Link className="navbar__link relative" href="/" target="_blank">
            WOMEN'S 
          </Link>
          <Link className="navbar__link relative" href="/" target="_blank">
            JEWELRY
          </Link>
          <Link className="navbar__link relative" href="/" target="_blank">
            PERFUME
          </Link>
          <Link className="navbar__link relative" href="/" target="_blank">
            BLOG
          </Link>
          <Link className="navbar__link relative" href="/" target="_blank">
            HOT OFFERS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
