import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Product from './screens/Product';

function App() {
  return (
    <div>
      <header>
        <a href="/">Chipamall</a>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
