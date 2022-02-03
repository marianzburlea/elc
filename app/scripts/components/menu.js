/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React from 'react'
import axios from 'axios'
import SearchItem from './search-item'

class Menu extends React.Component {
  /**
   * Main constructor for the Menu Class
   * @memberof Menu
   */
  constructor() {
    super()
    this.state = {
      showingSearch: false,
      data: [],
    }
  }

  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  showSearchContainer(e) {
    e.preventDefault()
    this.setState({
      showingSearch: !this.state.showingSearch,
    })
  }

  /**
   * Calls upon search change
   * @memberof Menu
   * @param e [Object] - the event from a text change handler
   */
  onSearch(e) {
    // Start Here
    // ...
    const { value } = e.target
    axios.post(`http://localhost:3035/`, { value }).then(({ data }) => {
      console.log('asdalksdja lsdj laksjdlaj sda', data)
      this.setState({ data })
    })
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  render() {
    const { data } = this.state
    console.log(data)
    return (
      <header className="menu">
        <div className="menu-container">
          <div className="menu-holder">
            <h1>ELC</h1>
            <nav>
              <a href="#" className="nav-item">
                HOLIDAY
              </a>
              <a href="#" className="nav-item">
                WHAT'S NEW
              </a>
              <a href="#" className="nav-item">
                PRODUCTS
              </a>
              <a href="#" className="nav-item">
                BESTSELLERS
              </a>
              <a href="#" className="nav-item">
                GOODBYES
              </a>
              <a href="#" className="nav-item">
                STORES
              </a>
              <a href="#" className="nav-item">
                INSPIRATION
              </a>

              <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                <i className="material-icons search">search</i>
              </a>
            </nav>
          </div>
        </div>
        <div
          className={
            (this.state.showingSearch ? 'showing ' : '') + 'search-container'
          }
        >
          <input
            ref="search"
            type="text"
            onChange={(e) => this.onSearch(e)}
            autoFocus
          />
          <a href="#" onClick={(e) => this.showSearchContainer(e)}>
            <i className="material-icons close">close</i>
          </a>

          <div className="search-item__result-list">
            {this.state.data.map(({ name, _id, about, tags, price, picture }) => (
              <SearchItem
                key={_id}
                number={_id}
                name={name}
                about={about}
                price={price}
                picture={picture}
                tags={tags}
              />
            ))}
          </div>
        </div>
      </header>
    )
  }
}

// Export out the React Component
module.exports = Menu
