const initialState = {
  cards: []
};

export default function history(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_HISTORY':
      return { ...state, cards: action.cards }
    default:
      return state;
  }
}
