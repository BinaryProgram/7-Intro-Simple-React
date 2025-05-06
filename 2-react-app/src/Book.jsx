import './Book.css'
export default function Book({book}){
 const {name,price} = book;
 return (
    <div className = "book">
        <h2>Book name - {name}</h2>
        <h3>Book price - {price}</h3>
    </div>
 )
}