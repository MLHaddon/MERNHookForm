const UserForm = ({inputs, handleInputChange, handleFormSubmit}) => {
  return (
    <div>
        <form className="col-5" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input 
            name="firstName"
            type="text" 
            className="form-control" 
            onChange={handleInputChange} 
            value={inputs.firstName}
            />
          </div>
          <span className="text-danger">
            {inputs.firstName.length < 2 ? "User First Name should be at least 2 characters." : ""}
          </span>
          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input 
            name="lastName"
            type="text" 
            className="form-control" 
            onChange={handleInputChange} 
            value={inputs.lastName}
            />
          </div>
          <span className="text-danger">
            {inputs.lastName.length < 2 ? "User Last Name should be at least 2 characters." : ""}
          </span>
          <div>
            <label htmlFor="email">Email: </label>
            <input 
            name="email"
            type="email" 
            className="form-control" 
            onChange={handleInputChange} 
            value={inputs.email}
            />
          </div>
          <span className="text-danger">
            {inputs.email.length < 5 ? "User Email should be at least 5 characters." : ""}
          </span>
          <div>
            <label htmlFor="password">Password: </label>
            <input 
            name="password"
            type="password" 
            className="form-control" 
            onChange={handleInputChange} 
            value={inputs.password}
            />
          </div>
          <span className="text-danger">
            {inputs.password.length < 8 ? "User Password should be at least 8 characters." : ""}
          </span>
          <div>
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input 
            name="confirmPassword"
            type="password" 
            className="form-control" 
            onChange={handleInputChange} 
            value={inputs.confirmPassword}
            />
          </div>
          <span className="text-danger">
            {inputs.confirmPassword !== inputs.password ? "Passwords should Match." : ""}
          </span>
          <input type="submit" value="Submit" className="btn btn-success m-2"/>
        </form>
    </div>
  );
}
export default UserForm;