import React, {useState} from 'react';

const Teammate = props => {
    // console.log("Props", props);
    const [person, setPerson] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = event => {
        setPerson({...person, [event.target.name]: event.target.value});
        console.log(person);
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewTeammate(person);
        setPerson({ name: "", email: "", role: ""});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" name="name" value = {person.name} onChange={handleChanges} />
            <label htmlFor="email">Email: </label>
            <input id="email" type="text" name="email" value = {person.email} onChange={handleChanges} />
            <label htmlFor="role">Role: </label>
            <input id = "role" type="text" name= "role" value = {person.role} onChange={handleChanges} />
            <button type="submit">Add</button>
        </form>
    );
};

export default Teammate;