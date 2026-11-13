import { Oval } from 'react-loader-spinner'
import { Component } from 'react';
import style from "./Loader.module.css"

class Loader extends Component {
  render() {
    return (
      <div className={style.loader}>
        <Oval
          height={80}
          width={80}
          color="var(--blue)"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="var(--blue)"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
}
export default Loader;
