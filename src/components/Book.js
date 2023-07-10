import React from "react";

const Book = ({ id, keys, book, author }) => {

  return (
    <div className="tc bg-black light-pink dib br3 pa3 ma2 grow shadow-5">
      <img alt='robots' src={`https://covers.openlibrary.org/b/${id}/${keys}-M.jpg`} />
      <div>
        <h2>{book}</h2>
        <p>{author}</p>
      </div>
    </div>
  );
}
export default Book;