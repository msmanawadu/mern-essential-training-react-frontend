import React from 'react';
import axios from 'axios';
class PlayerForm extends React.Component {
  submitPlayer(event) {
    event.preventDefault();
    const url = 'http://localhost:4000/players';

    // HTTP POST request
    axios
      .post(url, {
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value,
        phone: this.refs.phone.value,
        email: this.refs.email.value,
        iscoach: this.refs.iscoach.value,
        team: this.refs.team.value,
        speed: this.refs.speed.value,
        strength: this.refs.strength.value,
        endurance: this.refs.endurance.value,
        ability: this.refs.ability.value,
        techniques: this.refs.techniques.value,
        tactical: this.refs.tactical.value,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="row">
        <h1 className="center">Add a new player</h1>
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="firstName" ref="firstName" type="text" />
              <label htmlFor="first_name">First Name</label>
            </div>

            <div className="input-field col s6">
              <input id="lastName" ref="lastName" type="text" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input id="phone" ref="phone" type="tel" />
              <label htmlFor="phone">Phone</label>
            </div>

            <div className="input-field col s6">
              <input id="email" ref="email" type="text" />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input id="team" ref="team" type="tel" />
              <label htmlFor="team">Team</label>
            </div>

            <div className="input-field col s6">
              <input id="iscoach" ref="iscoach" type="text" />
              <label htmlFor="iscoach">Is a coach? [yes / no]</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input id="speed" ref="speed" type="tel" />
              <label htmlFor="speed">Speed - [1,2,3]</label>
            </div>

            <div className="input-field col s6">
              <input id="strength" ref="strength" type="text" />
              <label htmlFor="strength">Strength - [1,2,3]</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input id="endurance" ref="endurance" type="tel" />
              <label htmlFor="endurance">Endurance - [1,2,3]</label>
            </div>

            <div className="input-field col s6">
              <input id="ability" ref="ability" type="text" />
              <label htmlFor="ability">Ability - [1,2,3]</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input id="techniques" ref="techniques" type="tel" />
              <label htmlFor="techniques">Techniques - [1,2,3]</label>
            </div>

            <div className="input-field col s6">
              <input id="tactical" ref="tactical" type="text" />
              <label htmlFor="tactical">Tactical - [1,2,3]</label>
            </div>
          </div>

          <button className="btn waves-effect waves-light" type="submit" name="action">
            Add player
          </button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
