// to use it tiplaclly use import *whatever you name the pic* from './where ever it is' and place it in src={whatver ya named it} in the img tag 
function Card(){
    return(
    <div className="card">
        <img className="card-img" src="https://placehold.jp/3d4070/ffffff/150x150.png?text=Placeholder%20%20img" alt="Profile-Pic"></img>
        <h2 className="card-title">William</h2>
        <p className="card-p">I Currently am working at at Nursing Home</p>
    </div>
    );
}

export default Card