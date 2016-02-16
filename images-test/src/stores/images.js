import { fromJS } from 'immutable';

export const IMAGES_COUNT = 'IMAGES_COUNT';
export const LOAD_ALL = 'LOAD_ALL';
import R from 'ramda';

const defaultState = {
  images: fromJS([])
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case IMAGES_COUNT:
      return state.filter((item, key) => {
        return key < action.payload.count
      });
    case LOAD_ALL:
      return fromJS(action.payload.images);
    default:
      return state;
  }
}

export function changeCount(count = 10) {
  return {
    type: IMAGES_COUNT,
    payload: {count: count}
  }
}

export function loadAll() {
  return {
    type: LOAD_ALL,
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        const images = R.range(0, 100).map(i => `http://lorempixel.com/g/300/${300 + i}/`);
        resolve({
          images: images
        });
      }, 2000);
    })
  }
}
