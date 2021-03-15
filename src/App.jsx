import './App.css';
import UserForm from './components/UserForm';
import { useState } from 'react';

const App = () => {
  const [User, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    hasBeenSubmitted: false
  });

  const handleChange = (event) => {
    setUser({
      ...User,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = e.target.value
    console.table(newUser);
    // setUser({hasBeenSubmitted: true})
    setUser({
      ...User,
      hasBeenSubmitted : true 
    });
    console.log(User.hasBeenSubmitted)
  }

  return (
    <div className="Jumbotron">
      {
        User.hasBeenSubmitted ? 
        <h1>Your form has been submitted</h1> : 
        <h1>Please submit your form</h1>
      }
      <UserForm
        inputs={User}
        handleInputChange={handleChange}
        handleFormSubmit={handleSubmit}
      />
      <h3 className="p-2">Your Data</h3>
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
            <td>{User.firstName}</td>
            <td>{User.lastName}</td>
            <td>{User.email}</td>
            <td>{User.password}</td>
            <td>{User.confirmPassword}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
