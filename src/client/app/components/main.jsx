import React, {Component} from 'react';
import styles from '../styles/app.css';

class Main extends Component {
  render () {
    const {
      App: {
        test
      },
      testOn,
      testOff
    } = this.props;

    return (
      <div>
        <h1>
          {`Hello world, ${test}`}
        </h1>
        {
          test ?
            (
              <button onClick={testOff}>
                Turn me off
              </button>
            ):
            (
              <button onClick={testOn}>
                Turn me off
              </button>
            )
          }
      </div>
    );
  }
}

export default Main;
