import { fromJS } from 'immutable';

export const ADD_VIEW = 'ADD_VIEW';

const defaultState = {
  views: fromJS({
    '7': 150
  })
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ADD_VIEW:
      console.info('add view', action.payload.count);
      return {
        views: state.views.map((item, key) => {
          return item + 1;
        })
      };
    default:
      return state;
  }
}

export function addView(count = 1) {
  return {
    type: ADD_VIEW,
    payload: {count: count}
  }
}
