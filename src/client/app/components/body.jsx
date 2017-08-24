import React, {Component, PureComponent} from 'react';

class Body extends PureComponent {
  render () {
    const {
      test,
      testOff,
      testOn
    } = this.props;

    return (
      <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
        <h1>Dashboard</h1>

        <section className="row text-center placeholders">
          {
            test ?
              (
                <button onClick={testOff}>
                  Turn me off
                </button>
              ):
              (
                <button onClick={testOn}>
                  Turn me On
                </button>
              )
            }
        </section>
      </main>
    );
  }
}

export default Body;
