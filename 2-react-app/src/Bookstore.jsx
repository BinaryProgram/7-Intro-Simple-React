import Book from "./Book";
export default function Bookstore({ books }) {
  return (
    <div>
      {books.map((book) => (
        <Book book={book}></Book>
      ))}
    </div>
  );
}
