import React from "react";
import { Link } from "react-router-dom";

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div
        className="dropdown"
        style={{ background: "#177C84", width: "200px" }}
      >
        <div className="button" onClick={this.showDropdownMenu}>
          {" "}
          Split-The-Bill{" "}
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <a href="https://quizzical-babbage-171231.netlify.com/">
                Home Page
              </a>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/table">Create Table</Link>
            </li>
            <li>
              <Link to="/login">Log Out</Link>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
