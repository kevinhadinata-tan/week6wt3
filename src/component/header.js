import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'

class Header extends Component {
    render() {
        return (
            <Row>
                <h1 className="header">
                    Company Profile
                </h1>
            </Row>
        );
    }
}

export default Header;