import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sortBy from 'sort-by'
import BookGrid from './BookGrid';
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    BooksAPI.search(query, 20).then((results) => {
      if (!results) return;
      for (var i = 0, iLen = results.length; i < iLen; i++) {
        const r = results[i]
        for (var j = 0, jLen = this.props.books.length; j < jLen; j++) {
          const book = this.props.books[j];
          if (r.id === book.id) {
            results[i] = book;
            break;
          }
        }
      }
      results.sort(sortBy('title'))
      this.setState({searchResults: results})
    })
  }

  render() {
    const { query, searchResults } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookGrid books={searchResults} updateBook={this.props.updateBook}/>
        </div>
      </div>
    )
  }
}

export default SearchBooks