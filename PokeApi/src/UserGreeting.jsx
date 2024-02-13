import PropTypes  from 'prop-types';

function UserGreeting(props){

     const welcomeMsg = <h2 className="welcome-msg">Welcome {props.username}</h2>;

     const loginPrompt = <h2 className="login-prompt">Not Logged in!</h2>

     return(props.isLoggedIn ? welcomeMsg : loginPrompt )

}
UserGreeting.propTypes = {
     isLoggedIn: PropTypes.bool,
     username: PropTypes.string, 

}

UserGreeting.defaultProps = {
     isLoggedIn: false, 
     username: "Guest",   
}

export default UserGreeting