import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem} from 'react-bootstrap'

export default class NavComponent extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Roster</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/about">About</NavItem>
                </Nav>
            </Navbar>
        )
    }
}
