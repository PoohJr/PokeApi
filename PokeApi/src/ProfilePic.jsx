
function ProfilePic(){
    const imgurl = './src/assets/naruro.png';
    
    const handleClick = (e) =>e.target.style.border = "2em black solid"
   
    return(<img onClick={(e) =>handleClick (e)} src={imgurl} alt="Profile Pic"></img>);
}
export default ProfilePic