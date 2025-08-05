import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import AgeVerification from './components/AgeVerification';

// Páginas
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Checkout from './pages/Checkout'; // Importando a nova página de Checkout

// Configurações
import { branding } from './config/branding';
import { useCart } from './hooks/useCart'; // Importando o hook useCart

function App() {
  const [ageVerified, setAgeVerified] = useState(false);
  const { cartItems, addToCart, removeFromCart, updateCartQuantity, clearCart } = useCart();

  // Aplicar cores personalizadas
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', branding.colors.primary);
    root.style.setProperty('--secondary', branding.colors.secondary);
    root.style.setProperty('--accent', branding.colors.accent);
    root.style.setProperty('--background', branding.colors.background);
    root.style.setProperty('--text', branding.colors.text);
  }, []);

  const handleAgeVerification = (isAdult) => {
    setAgeVerified(isAdult);
  };

  // Mostrar verificação de idade se habilitada
  if (branding.ageVerification.enabled && !ageVerified) {
    return <AgeVerification onVerify={handleAgeVerification} />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header 
          cartItems={cartItems}
          onUpdateQuantity={updateCartQuantity}
          onRemoveItem={removeFromCart}
          onClearCart={clearCart}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/produtos" element={<Products addToCart={addToCart} />} />
            <Route path="/produto/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

