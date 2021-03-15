const  UserCard = ({firstName, lastName, email, password, confirmPassword}) =>  {
    return (
        <div className="card col-3 text-center">
            <div className="card-body">
                <h3 className="card-title">{firstName} {lastName}</h3>
                <p className="card-text">Email: {email}</p>
                <p className="card-text">Password: {password}</p>
                <p className="card-text">Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
}

export default UserCard;