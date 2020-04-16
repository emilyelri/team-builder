import React, {useState} from 'react';
import Form from './components/Form';
import Team from './components/Team';
import './CSS/index.css';

function App() {
  const [team, setTeam] = useState([{name: "Emily Richard", email: "emily@gmail.com", role: "Lambda Student"}]);

  const addNewTeammate = person => {
    const newTeammate = {
      id: Date.now(),
      name: person.name,
      email: person.email,
      role: person.role
    };
    setTeam([...team, newTeammate]);
  };

  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addNewTeammate={addNewTeammate} />
      <Team team={team} />
    </div>
  );
}

export default App;