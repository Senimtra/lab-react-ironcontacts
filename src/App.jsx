import React from "react";
import "./App.scss";
import contacts from "./contacts.json";

const initialState = contacts.slice(0, 5);
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: initialState,
    };
  }

  addrandomContact = () => {
    const leftOverContacts = contacts.filter(
      (el) => !this.state.contacts.includes(el)
    );
    if (leftOverContacts.length) {
      const randomContact =
        leftOverContacts[Math.floor(Math.random() * leftOverContacts.length)];
      this.setState({
        contacts: [...this.state.contacts, randomContact],
      });
    }
  };

  sortByName = () => {
    this.setState({
      contacts: [...this.state.contacts].sort((a, b) =>
        a.name.split(" ")[1].localeCompare(b.name.split(" ")[1])
      ),
    });
  };

  sortByPopularity = () => {
    this.setState({
      contacts: [...this.state.contacts].sort(
        (a, b) => b.popularity - a.popularity
      ),
    });
  };

  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((el) => id !== el.name),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div id="button-container">
          <button onClick={this.addrandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th class="td-outer">Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th class="td-outer">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((el) => (
              <tr key={el.name} class="crZoom">
                <td id="td-outer-left">
                  <img src={el.pictureUrl} alt="" />
                </td>
                <td id="name" class="text">
                  {el.name.split(" ")[0]}
                  <br />
                  {el.name.split(" ").slice(1)}
                </td>
                <td id="popularity" class="text">
                  <div>{el.popularity.toFixed(2)}</div>
                </td>
                <td id="td-outer-right">
                  <button onClick={() => this.deleteContact(el.name)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
