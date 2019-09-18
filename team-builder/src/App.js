import React, {useState} from 'react';
import Teammate from './components/Teammate';
import Team from './components/Team';
import './CSS/index.css';

function App() {
  const [team, setTeam] = useState([{
    id: 1,
    name: "Emily Richard",
    email: "richard.emily.e@gmail.com",
    role: "Student"
  }]);

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
      <Teammate addNewTeammate={addNewTeammate} />
      <Team team={team} />
    </div>
  );
}

export default App;