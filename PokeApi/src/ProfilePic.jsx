
function ProfilePic(){
    const imgurl = 'PokeApi/src/assets/b0fa77fe12bad43e8a300d1ec214ec3e-3158511091.png';
    
    const handleClick = () => console.log("YUrr")

    return(<img onClick={handleClick} src={imgurl} alt="Profile Pic"></img>);
}
export default ProfilePic