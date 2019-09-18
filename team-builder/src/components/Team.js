import React, {useState} from 'react';

const Team = props => {
    return (
        <>
        <div className="cardContainer">
          {props.team.map(teammate => (
            <div className="card" key={teammate.id}>
              <h2>{teammate.name}</h2>
              <p>{teammate.email}</p>
              <p>{teammate.role}</p>
            </div>
          ))}
          </div>
        </>
      );
    };

export default Team;