import React, { Component } from 'react';

const DEFAULT_BOOK_COVER = 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';

class Book extends Component {
  render() {
    const { book } = this.props
    return (
      <div className='book'>
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks && book.imageLinks.thumbnail) || DEFAULT_BOOK_COVER})` }}></div>
          <div className="book-shelf-changer">
            <select
              onChange={(event) => this.props.updateBook(book, event.target.value)}
              defaultValue={book.shelf || 'none'}
            >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors && book.authors.map((author, idx) => (
          <div key={idx} className="book-authors">{author}</div>
        ))}
      </div>
    )
  }
}

export default Book