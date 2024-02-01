import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from "../../img/Asset3.png";
import "./navbar.css";
import { scrollToMainContainer } from "../Pq/Pq";
import { scrollToSobreNos } from "../sobreNos/sobreNos";
import { scrollToAula, scrollToTradu } from "../metodo/metodo";

function NavBar() {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Navbar expand="lg" className="bg-body" fixed="top" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={scrollToTop}>
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" onClick={scrollToTop} className="S20px">
              INÍCIO
            </Nav.Link>
            {pathname === "/" && (
              <Nav.Link
                as={Link}
                to="/"
                onClick={scrollToMainContainer}
                className="S20px"
              >
                POR QUE EU IDIOMAS?
              </Nav.Link>
            )}
            <NavDropdown
              title="SOBRE NOS"
              className="dropdown-title S20px"
              id="basic-nav-dropdown"
              onClick={scrollToSobreNos}
            >
              <NavDropdown.Item className="text-style">
                PARCERIA
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#ULLY" className="text-style">
                ULLY
              </NavDropdown.Item>
              <NavDropdown.Item href="#ELAINE" className="text-style">
                ELAINE
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="AULAS"
              id="basic-nav-dropdown"
              className="S20px"
              onClick={scrollToAula}
            >
              <NavDropdown.Item className="text-style">
                METODOLOGIA
              </NavDropdown.Item>
              <NavDropdown.Item className="text-style">
                PACOTES
              </NavDropdown.Item>
              <NavDropdown.Item className="text-style">
                MATERIAIS UTILIZADOS
              </NavDropdown.Item>
            </NavDropdown>
            {pathname === "/" && (
              <Nav.Link
                as={Link}
                to="/"
                onClick={scrollToTradu}
                className="S20px"
              >
                TRADUÇÕES
              </Nav.Link>
            )}
          </Nav>

          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path d="M40 0H0V40H40V0Z" fill="#25D366" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27 12.875C25.125 11 22.625 10 20 10C14.5 10 10 14.5 10 20C10 21.75 10.5 23.5 11.375 25L10 30L15.25 28.625C16.75 29.375 18.375 29.875 20 29.875C25.5 29.875 30 25.375 30 19.875C30 17.25 28.875 14.75 27 12.875ZM20 28.25C18.5 28.25 17 27.875 15.75 27.125L15.5 27L12.375 27.875L13.25 24.875L13 24.5C12.125 23.125 11.75 21.625 11.75 20.125C11.75 15.625 15.5 11.875 20 11.875C22.25 11.875 24.25 12.75 25.875 14.25C27.5 15.875 28.25 17.875 28.25 20.125C28.25 24.5 24.625 28.25 20 28.25ZM24.5 22C24.25 21.875 23 21.25 22.75 21.25C22.5 21.125 22.375 21.125 22.25 21.375C22.125 21.625 21.625 22.125 21.5 22.375C21.375 22.5 21.25 22.5 21 22.5C20.75 22.375 20 22.125 19 21.25C18.25 20.625 17.75 19.75 17.625 19.5C17.5 19.25 17.625 19.125 17.75 19C17.875 18.875 18 18.75 18.125 18.625C18.25 18.5 18.25 18.375 18.375 18.25C18.5 18.125 18.375 18 18.375 17.875C18.375 17.75 17.875 16.5 17.625 16C17.5 15.625 17.25 15.625 17.125 15.625C17 15.625 16.875 15.625 16.625 15.625C16.5 15.625 16.25 15.625 16 15.875C15.75 16.125 15.125 16.75 15.125 18C15.125 19.25 16 20.375 16.125 20.625C16.25 20.75 17.875 23.375 20.375 24.375C22.5 25.25 22.875 25 23.375 25C23.875 25 24.875 24.375 25 23.875C25.25 23.25 25.25 22.75 25.125 22.75C25 22.125 24.75 22.125 24.5 22Z"
                fill="white"
              />
            </svg>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
