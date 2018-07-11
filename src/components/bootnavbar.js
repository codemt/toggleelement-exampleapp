import React, { Component } from 'react'
import Results from './results';
 class BootNavBar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false
        };
        this.onClick = this.onClick.bind(this);
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
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
                <a  class="nav-link"  onClick={this.onClick}> Click Me </a>
            </li> 
         
        </ul>
                 
          <input class="form-control mr-sm-2" type="text" placeholder="Search" />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </div>
    </nav>
    { this.state.showResults ? <Results /> : null }
      </div>
    )
  }
}
export default BootNavBar;