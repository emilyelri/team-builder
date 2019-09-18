import React from 'react';

export default function(props) {
    return (
        <div className="card" key={props.id}>
              <div className="cardHead">
                <span>{props.name}</span>
                <span className="functions">
                  <span><button className="cardBtn">&#9998;</button></span>
                  <span><button className="cardBtn trash">&#128465;</button></span>
                </span>
              </div>
              <p className="role">{props.role}</p>
              <p className="email">{props.email}</p>
            </div>
    )
}