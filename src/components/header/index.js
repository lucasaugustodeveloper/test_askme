import "./header.css";
import React, { useState } from "react";
import Logo from "./logo";
import Link from "../../assets/styled/link";

function Header() {
  const [menuActive, setMenuActive] = useState("");

  return (
    <header className="header row center-xs">
      <div className="header__logo col-xs-10 col-sm-6 col-md-2 col-md-offset-2">
        <Logo />
      </div>
      <div className="header__menu col-xs-2 col-sm-1 col-sm-offset-5 col-md-6 col-md-offset-1">
        <button
          type="button"
          className="header__button"
          onClick={() => setMenuActive("active")}
        >
          <div className="header__button__row" />
          <div className="header__button__row" />
          <div className="header__button__row" />
        </button>
        <nav className={`header__menu__nav ${menuActive}`}>
          <ul>
            <li>
              <Link href="https://google.com">Solução</Link>
            </li>

            <li>
              <Link href="https://google.com">Ferramentas</Link>
            </li>

            <li>
              <Link href="https://google.com">Preço</Link>
            </li>

            <li>
              <Link href="https://google.com">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
