import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class BookCase extends Component {
  render() {
    let bookShelves = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    };
    for (var i = 0, len = this.props.books.length; i < len; i++) {
      const book = this.props.books[i];
      if (bookShelves[book.shelf]) bookShelves[book.shelf].push(book);
    }
    return (
      <div className='list-books'>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf updateBook={this.props.updateBook} title='Currently Reading' books={bookShelves.currentlyReading}/>
          <BookShelf updateBook={this.props.updateBook} title='Want To Read' books={bookShelves.wantToRead}/>
          <BookShelf updateBook={this.props.updateBook} title='Read' books={bookShelves.read}/>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookCase