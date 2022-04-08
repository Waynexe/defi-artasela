import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AddForm from "./components/AddForm";
import Form from "./components/Form";
import FormsList from "./components/FormsList";
import About from './components/About';
import Home from './components/Home';
import Products from './components/Products';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Artasela
        </a>
        <div className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/products"} className="nav-link">
              Produits
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className="nav-link">
              A Propos
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/forms"} className="nav-link">
              Formulaires
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/forms" element={<FormsList/>} />
          <Route path="/add" element={<AddForm/>} />
          <Route path="/forms/:id" element={<Form/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
