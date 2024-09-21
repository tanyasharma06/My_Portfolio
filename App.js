import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function Layout({ children }) {
  return (
    <div>{/* Navbar visible on all pages */}
      <main>{children}</main> {/* Main content (pages) will be rendered here */}
      <Footer /> {/* Footer visible on all pages */}
    </div>
  );
}

export default function App() {
  return (
    <Router>
<Navbar/>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Hero />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <About />
          </Layout>
        } />
        <Route path="/skills" element={
          <Layout>
            <Skills />
          </Layout>
        } />
        <Route path="/projects" element={
          <Layout>
            <Projects />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <Contact />
          </Layout>
        } />
        <Route path="*" element={
          <Layout>
            <h1>404 Not Found</h1>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}