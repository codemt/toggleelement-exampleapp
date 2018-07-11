import React, { Component } from 'react';
import Results from './results';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
 class NavBar extends Component {
     
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
        this.onClick = this.onClick.bind(this);
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      getInitialState() {
        return { showResults: false };
    }
    onClick() {
        if(this.state.showResults == false)
        {
        this.setState({ showResults: true });
        }
        else
        {
            this.setState({ showResults: false }); 

        }   
        this.showSidebar();
    }
    showSidebar(){

        return (
            <div>
                <div id="sidebar" className="search-results">
                        
                </div>
            </div>
        )
    }
  render() {
    return (
      <div>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <NavItem>
                    <div>
                    <input type="submit" value="Search" onClick={this.onClick} />
                    { this.state.showResults ? <Results /> : null }
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
        
      </div>
    )
  }
};
export default NavBar;