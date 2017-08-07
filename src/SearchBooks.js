import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import BookGrid from './BookGrid';

class SearchBooks extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim().toLowerCase() })
  }

  render() {
    const { books } = this.props
    const { query } = this.state

    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((contact) => match.test(contact.title))
    } else {
      showingBooks = books
    }

    showingBooks.sort(sortBy('title'))

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <BookGrid books={showingBooks} updateBook={this.props.updateBook}/>
        </div>
      </div>
    )
  }
}

export default SearchBooks