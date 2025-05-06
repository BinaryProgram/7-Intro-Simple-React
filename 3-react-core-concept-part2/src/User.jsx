import Users from "./Users";
export default function User({user}){
 const {name,email} = user;
 console.log(name,email)
 const userStyle = {
    border: "2px solid tomato",
    margin: "20px",
    padding: "25px",
    borderRadius: "20px"
 }

 return(
    <div style={userStyle}>
        <h2>Name: {name}</h2>
        <h3>Email: {email}</h3>
    </div>
 )
}