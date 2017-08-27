// libraries
import React, {Component, PureComponent} from 'react';

// components
import MapComponent from './maps/searchMap.jsx';

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
          <MapComponent />
        </section>
      </main>
    );
  }
}

export default Body;
