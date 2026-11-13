import { Component } from "react";
import style from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <button className={style.button} onClick={this.props.onClick} type="button">
        load more
      </button>
    );
  }
}
export default Button;
