import { useState } from "react";
import { Icon } from "../icons/Icon";
import { Logo } from "../icons/Logo";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      label: "Beranda",
      href: "#beranda",
    },
    {
      label: "Survei",
      href: "#survei",
    },
    {
      label: "Dashboard",
      href: "/survei/0",
    },
  ];

  return (
    <div>
      <nav className="navbar max-w-6xl mx-auto py-10 px-5 md:px-8 xl:px-0">
        <div className="flex flex-row items-center justify-between">
          <Logo />
          <ul className="flex-row gap-x-8 lg:flex hidden">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-indigo-950 hover:text-violet-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-row gap-x-4">
            <a
              href="#"
              className="md:block hidden py-3 bg-indigo-950 text-white text-base px-5 rounded-full hover:bg-violet-700 transition duration-500"
            >
              pusatmutukinerja.web.id
            </a>
            <div
              id="btn-dropdown"
              className="lg:hidden bg-white flex items-center p-2.5 rounded-full justify-center"
            >
              <a onClick={() => setIsOpen((isOpen) => !isOpen)}>
                <Icon.Menu />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/*floating dropdown */}
      <div
        id="dropdown-menu"
        className={`megamenu absolute top-28 justify-center flex flex-col px-5 lg:hidden md:px-10 w-full ${isOpen ? "" : "hidden"}`}
      >
        <div className="flex flex-col bg-white p-5 md:p-8 rounded-2xl gap-y-5">
          <ul className="flex flex-col gap-y-5">
            {navItems.map((item, index) => (
              <li key={index} onClick={() => setIsOpen((isOpen) => !isOpen)}>
                <a
                  href={item.href}
                  className="text-indigo-950 hover:text-violet-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            href="#"
            className="md:hidden py-3 bg-indigo-950 text-white text-base px-5 text-center w-full rounded-full"
          >
            pusatmutukinerja.web.id
          </div>
        </div>
      </div>
    </div>
  );
};
