import React, { Component } from 'react';
import Header from './component/header';
import Menu from './component/menu';
import Footer from './component/footer';
import Container from 'react-bootstrap/Container'

// import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <Menu />
        <Footer />
      </Container>
    );
  }
}

export default App;
