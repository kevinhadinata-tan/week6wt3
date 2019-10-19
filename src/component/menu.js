import React, { Component } from 'react'
import MainContent from './maincontent'
import MenuItem from './menuitem'
import Row from 'react-bootstrap/Row'

class Menu extends Component {
    render() {
        return (
            <Row>
                <MenuItem />
                <MainContent />
            </Row>
        );
    }
}

export default Menu;