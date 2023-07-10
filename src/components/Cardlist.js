import React from "react";
import Book from './Book'
const Cardlist =({books})=>{

  return(
    <div>
      {books.map((user, i) => {
        return <Book key={i} id={books[i].id} keys={books[i].keys} book={books[i].book} author={books[i].author} />
      })}
    </div>
  )
}
export default Cardlist