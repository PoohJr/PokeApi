
function UserGreeting(props){

     return(props.isLoggedIn ? <h2 className="welcome-msg">Welcome {props.username}</h2>
                              : <h2 className="login-prompt">Not Logged in!</h2>)

}
export default UserGreeting