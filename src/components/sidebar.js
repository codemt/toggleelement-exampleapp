import React, { Component } from 'react'
import Results from './results';
 class Sidebar extends Component {
    getInitialState() {
        return { showResults: false };
    }
    onClick() {
        this.setState({ showResults: true });
        this.showSidebar();
    }
    showSidebar(){

        return (
            <div>
                <div id="sidebar" className="search-results">
                        Some Results
                </div>
            </div>
        );


    }
  render() {
    return (
             <div>
                <input type="submit" value="Search" onClick={this.onClick} />
                { this.state.showResults ? <Results /> : null }
            </div>
             
    )
  }
}
export default Sidebar;



    