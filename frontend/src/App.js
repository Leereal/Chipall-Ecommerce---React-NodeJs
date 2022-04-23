import { Link, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Product from './screens/Product';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import { useContext } from 'react';
import { Store } from './Store';
import Cart from './screens/Cart';
import Signin from './screens/Signin';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <div className="d-flex flex-column site-container">
      <header>
        <Navbar variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Chipamall</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <Link to="/cart" className="nav-link">
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/id/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </Container>
      </main>
      <footer>
        <div className="text-center">
          Created by Leereal Inc. All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
