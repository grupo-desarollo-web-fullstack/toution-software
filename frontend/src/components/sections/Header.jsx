import { Link } from "react-router-dom";
import { useRef } from "react";
import Menu, { MenuLink } from "@components/Menu";
import Button from "@components/Button";
import Logo from "../Logo";

const Header = () => {
  const menuRef = useRef();
  const buttonMenuRef = useRef();
  const handleClickToogleMenu = () => {
    menuRef.current.classList.toggle("menu--open");
    buttonMenuRef.current.classList.toggle("menu__icon--close");
  };
  const handleClickClose = () => {
    menuRef.current.classList.remove("menu--open");
    buttonMenuRef.current.classList.remove("menu__icon--close");
  };
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <Link onClick={handleClickClose} to="/" className="nav__logo">
            <h1 className="nav__logo__title">Tuition Software</h1>
            <Logo width={100} height={100} className="nav__logo__img" />
          </Link>
          <Button
            isSound={false}
            ref={buttonMenuRef}
            onClick={handleClickToogleMenu}
            modifiers="menu-icon"
            className="menu__icon"
          >
            <div className="menu__icon__bar" />
            <div className="menu__icon__bar" />
            <div className="menu__icon__bar" />
          </Button>
          <Menu ref={menuRef}>
            {(user) => (
              <>
                <li>
                  <MenuLink
                    modifier="header"
                    onClick={handleClickClose}
                    to={user ? "/dashboard" : "/auth/login"}
                  >
                    {user ? "Dashboard" : "Iniciar sesión"}
                  </MenuLink>
                </li>
                <li>
                  <MenuLink
                    modifier="header"
                    onClick={handleClickClose}
                    to="/about"
                  >
                    Nosotros
                  </MenuLink>
                </li>
              </>
            )}
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
