import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa"; // Font Awesome
import styles from "./NavBar.module.css";
import { useScrollPosition } from "../Hooks/scrollPosition";
// import logo from "../assets/logo1.jpeg"; 

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 800 && setNavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, [windowDimension]);

  const links = [
    { id: 1, link: "Inicio" },
    { id: 2, link: "Servicios" },
    { id: 3, link: "Nosotros" },
    { id: 4, link: "Semillero" },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={
        navBarOpen
          ? styles.navOpen
          : scrollPosition > 0
          ? styles.navOnScroll
          : styles.navBar
      }
    >
      <div className={styles.logoContainer}>
        {/* <img src={logo} alt="Logo" className={styles.logo} /> */}
      </div>
      {!navBarOpen && windowDimension.width < 800 ? (
        <AiOutlineMenu
          color="#f1f1f1"
          onClick={() => setNavBarOpen(!navBarOpen)}
          size={25}
        />
      ) : (
        windowDimension.width < 800 && (
          <AiOutlineClose
            onClick={() => setNavBarOpen(!navBarOpen)}
            color="#f1f1f1"
            size={25}
          />
        )
      )}
      {navBarOpen && (
        <ul className={styles.linksContainer}>
          {links.map(({ id, link }) => (
            <div key={id}>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link === "Inicio" ? "Inicio" : link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
        </ul>
      )}
      {windowDimension.width > 800 && (
        <>
          <ul className={styles.linksContainer}>
            {links.map(({ link, id }) => (
              <div key={id}>
                <Link
                  onClick={() => setNavBarOpen(false)}
                  to={link}
                  smooth
                  duration={500}
                  className={styles.navLink}
                >
                  {link === "Nosotros" ? "Nosotros" : link}
                </Link>
                <div className={styles.border}></div>
              </div>
            ))}
          </ul>
          <div className={styles.socialIconsContainer}>
            <a href="https://www.facebook.com/profile.php?id=100066695102480" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <AiFillFacebook size={25} />
            </a>
            <a href="https://www.instagram.com/girasalud_ec/?hl=es" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <AiFillInstagram size={25} />
            </a>
            <a href="https://www.tiktok.com/@girasaludec" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaTiktok size={25} />
            </a>
          </div>
          <div className={styles.contactLinkContainer}>
            <Link
              onClick={() => setNavBarOpen(false)}
              to="Contact"
              smooth
              duration={500}
              className={styles.contactLink}
            >
              Contactanos
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
