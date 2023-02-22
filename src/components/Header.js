import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>  
        <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://i.postimg.cc/3xGB5Kbn/kisspng-portable-network-graphics-food-fusion-cuisine-logo-restrokhana-your-online-restaurant-partne.jpg"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>
  </>
  )
}

export default Header