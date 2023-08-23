import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  MenuIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
  HomeLogo,
  NavBtnLink,
} from "./NavbarElements";
import dotenv from "dotenv";
dotenv.config();

const Navbar = ({ toggle }) => {
  // const fileId = "1Q9NgQvpGtOsnwCxNkvuzsb8XhkoRwG_j"; // your file ID

  // const downloadFile = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3001/api/download");
  //     console.log(response.data); // 'File is being downloaded on the server'
  //   } catch (e) {
  //     console.error("Download failed: ", e);
  //   }
  // };
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <HomeLogo src="image/logo.png" />
              <div style={{ marginLeft: 15 }}>
                <p>SGHEDA</p>
              </div>
            </NavLogo>
            <MenuIcon onClick={toggle}>
              <FaBars />
            </MenuIcon>
            <NavMenu>
              <NavItem>
                <NavLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  License
                </NavLink>
              </NavItem>
            </NavMenu>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NavBtnLink
                style={{ height: "60%" }}
                href={`http://${process.env.REACT_APP_SERVER_ADDRESS}:3001/api/download`}
                rel="noreferrer"
              >
                Download File
              </NavBtnLink>
            </div>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
