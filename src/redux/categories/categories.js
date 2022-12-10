const CHECK = 'bookstore/Category/CHECK';

export function checkStatus() {
  return { type: CHECK };
}

export default function reducer(state = '', action = {}) {
  switch (action.type) {
    case CHECK:
      return 'Under Construction';

    default:
      return state;
  }
}
