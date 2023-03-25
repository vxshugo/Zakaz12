import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from "styled-components"


const LogoBlock = styled.div`
  background-color: #34495E;
  padding: 10px;
  border-radius: 20px;  
`;
const Text = styled.p`
  color: black;
  font-size: 24px;
`


function NavbarMain() {
  return (
    <Navbar key={"md"} bg="#000" expand={"md"} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="http://5.104.236.70/" target={"_blank"}><LogoBlock><img src='img/logo/image 5.png'/></LogoBlock></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${"md"}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                <LogoBlock><img src='img/logo/image 5.png'/></LogoBlock>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Text><Nav.Link href="/">Басты бет</Nav.Link></Text>
                  <Text><Nav.Link href="/razdel1">Дәрістер</Nav.Link></Text>
                  <Text><Nav.Link href="/razdel2">Тест</Nav.Link></Text>
                  <Text><Nav.Link href="/razdel3">Курстық жұмыстар</Nav.Link></Text>
                  <Text><Nav.Link href="/razdel4">Жағдаяттық есептер</Nav.Link></Text>
                  <Text><Nav.Link href="/razdel5">Слайд</Nav.Link></Text>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
  )
}

export default NavbarMain