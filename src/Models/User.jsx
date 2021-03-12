import React, { useState } from 'react';

const User = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (event) => {
    event.preventDefault();
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome");
    console.table(newUser);
  };

  return (
    <>
      <div className="d-flex flex-column">
        <form className="form" onSubmit={createUser}>
          <div>
            <label>First Name: </label>
            <input className="form-control" type="text" onChange={event => setFirstName(event.target.value)} value={firstName} />
          </div>
          <div>
            <label>Last Name: </label>
            <input type="text" className="form-control" onChange={event => setLastName(event.target.value)} value={lastName} />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" className="form-control" onChange={event => setEmail(event.target.value)} value={email} />
          </div>
          <div>
            <label>Password: </label>
            <input type="password" className="form-control" onChange={event => setPassword(event.target.value)} value={password} />
          </div>
          <div>
            <label>Confirm Password: </label>
            <input type="password" className="form-control" onChange={event => setConfirmPassword(event.target.value)} value={confirmPassword} />
          </div>
        </form>
        <h3>Your Data</h3>
        
        <table className="table table-borderless">
          <thead className=" thead-dark">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm Password</th>
            </tr>
          </thead>
          <tbody className=" table-primary">
            <tr>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{password}</td>
              <td>{confirmPassword}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default User;