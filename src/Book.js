import React, { Component } from 'react';

class Book extends Component {
  state = {
    shelf: ''
  }

  updateShelf(book, shelf) {
    this.setState({ shelf: shelf})
    this.props.updateBook(book, shelf)
  }

  render() {
    const { book } = this.props
    return (
      <div className='book'>
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select
              onChange={(event) => this.updateShelf(book, event.target.value)}
              defaultValue={book.shelf}
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