import React, { Component } from 'react'

// import Col from 'react-bootstrap/Col'

class MenuItem extends Component {
    render() {
        return (
            <div className="menuitem">
                <a href="#home">Overview</a>
                <a href="#home">Our Products</a>
                <a href="#home">Careers</a>
                <a href="#home">Contact Us</a>
            </div>
        );
    }
}

export default MenuItem;