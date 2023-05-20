import React from 'react';

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <button className="btn waves-effect waves-light" type="submit" name="action">
            Add player
          </button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
