// libraries
import {connect} from 'react-redux';

// components
import Main from '../components/main.jsx';

// actions
import {testOn, testOff} from '../actions/app';

// shared

function mapStateToProps(state) {
  return {
    App: state.App
  }
}

function mapDispatchToProps(dispatch) {
  return {
    testOn() {
      return dispatch(testOn());
    },
    testOff() {
      return dispatch(testOff());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
