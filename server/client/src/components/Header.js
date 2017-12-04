import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Nav pullRight>
                 <NavItem eventKey={2} href="/auth/google">Login with Google</NavItem>
          </Nav>
        );
      default:
        return (
          <Nav pullRight>
            <NavItem eventKey={1} href="/students/new">Add Student</NavItem>
            <NavItem eventKey={2} href="/api/logout">Logout</NavItem>
          </Nav>
        );
    }
  }

  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Roster</Link>
          </Navbar.Brand>
        </Navbar.Header>
        {this.renderContent()}
      </Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);