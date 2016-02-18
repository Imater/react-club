import { connect } from 'react-redux';

import Tabs from '../components/Tabs';

// Actions
import {
  addView
} from '../stores/views.js';

function mapStateToProps(state) {
  return {
    tabs: state.tabs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addView: () => dispatch(addView())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
