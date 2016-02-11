import { connect } from 'react-redux';

import Items from '../components/Items';

// Actions
import {
  changeCount,
  loadAll
} from '../stores/images.js';

function mapStateToProps(state) {
  return {
    images: state.images
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeCount: (count) => dispatch(changeCount(count)),
    loadAll: () => dispatch(loadAll())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);
