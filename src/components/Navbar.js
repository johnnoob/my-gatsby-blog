import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { navlinks } from "../constants/link";
import Button from "./Button";
import { BsEnvelope } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="mx-auto absolute w-full">
      <nav className="mx-auto py-5 px-5 lg:px-20 lg:max-w-6xl flex justify-between items-center">
        <Link to="/">
          <StaticImage
            src="../images/Navbar/blog.png"
            alt="Blog Logo"
            width={100}
          />
        </Link>
        <div className="flex justify-between items-center gap-4">
          <ul className="text-md flex justify-center items-center gap-1 text-gray-800">
            {navlinks.map((link, index) => {
              return (
                <>
                  <li
                    key={link.href}
                    className="rounded-md px-3 py-2 hover:bg-gray-100"
                  >
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                  {index === navlinks.length - 1 ? null : (
                    <div className="h-7 border-l-[1px]"></div>
                  )}
                </>
              );
            })}
          </ul>
          <Button
            label="訂閱"
            icon={<BsEnvelope size={20} />}
            isIconRight={true}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
