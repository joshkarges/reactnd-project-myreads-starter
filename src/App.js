import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './BookCase';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBook = (book, shelf) => {
    this.setState((state) => {
      let bookIdx = state.books.findIndex((b) => b.id === book.id)
      if (bookIdx === -1) {
        bookIdx = state.books.push(book) - 1
      }
      state.books[bookIdx].shelf = shelf
      return {
        books: state.books
      }
    })
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookCase books={this.state.books} updateBook={this.updateBook}/>
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks books={this.state.books} updateBook={this.updateBook}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp