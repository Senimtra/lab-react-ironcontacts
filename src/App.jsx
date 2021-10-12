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
        a.name.localeCompare(b.name)
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

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div id="button-container">
          <button onClick={this.addrandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((el) => (
              <tr key={el.name}>
                <td>
                  <img src={el.pictureUrl} alt="" />
                </td>
                <td id="text">{el.name}</td>
                <td id="text">{el.popularity.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
