import { Component } from "react";
import style from "./SearchBar.module.css"

class SearchBar extends Component {
  state = {
    searchValue:"",
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.onSubmit(this.state.searchValue)
  };
  render() {
    return (
      <>
        <header className={style.searchbar}>
          <form className={style.form} onSubmit={this.handleSubmit}>
            <button className={style.button} type="submit">
              <span>Search</span>
            </button>

            <input className={style.input} type="text" value={this.state.searchValue}
            onChange={(evt) => this.setState({searchValue: evt.target.value})}/>
          </form>
        </header>
      </>
    );
  }
}
export default SearchBar;
