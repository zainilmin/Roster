import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/schedules">
                <NavItem eventKey={1}>Class Schedule</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/students/new">
                <NavItem eventKey={1}>Add Student</NavItem>
              </LinkContainer>
              <LinkContainer to="/schedule/new">
                <NavItem eventKey={2}>Add Schedule</NavItem>
              </LinkContainer>
              <NavItem eventKey={3} href="/api/logout">Logout</NavItem>
            </Nav>
          </Navbar.Collapse>
        );
    }
  }

  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={this.props.auth ? '/students' : '/'}>Roster</Link>
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
