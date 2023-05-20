import React from 'react';

const PlayerSingle = (props) => {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src="soccer_game.jpg" />
            <span className="card-title">
              {props.player.firstName} {props.player.lastName}
            </span>
          </div>
          <div className="card-content">
            <p>
              Phone: {props.player.phone} - Email: {props.player.email}
            </p>
            <p>
              Speed: {props.player.speed} - Strength: {props.player.strength}{' '}
            </p>
            <p>
              Endurance: {props.player.endurance} - Ability: {props.player.ability}
            </p>
            <p>
              Techniques: {props.player.techniques} - Tactical: {props.player.tactical}
            </p>
          </div>
          <div className="card-action">
            <p>
              Team: {props.player.team} - Is Coach ?: {props.player.iscoach ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSingle;
