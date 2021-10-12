import React from "react";
import "./App.scss";
import contacts from "./contacts.json";

const initialState = contacts.slice(0, 5);

console.log(contacts);

console.log(initialState);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: initialState,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
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
