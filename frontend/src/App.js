import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Product from './screens/Product';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <div className="d-flex flex-column site-container">
      <header>
        <Navbar variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Chipamall</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/id/:id" element={<Product />} />
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
