import { connect } from 'react-redux';

import FullScreen from '../components/FullScreen';

// Actions
import {
  addView
} from '../stores/views.js';

function mapStateToProps(state) {
  return {
    images: state.images,
    views: state.views,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addView: () => dispatch(addView())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FullScreen);
