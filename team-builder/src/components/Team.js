import React from 'react';
import TeammateCard from './TeammateCard';

const Team = props => {
    return (
        <div className="cardContainer">
          {props.team.map(teammate => (
            <TeammateCard
              id={teammate.id}
              name={teammate.name}
              email={teammate.email}
              role={teammate.role}
            />
          ))}
          </div>    
    );
  };

export default Team;