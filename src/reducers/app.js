import { actionTypes } from '../actions';
import { List } from 'immutable';
import { shuffle } from '../util/shuffle';

const deckOfCards = () => {
  let data = [];
  for (var i = 0; i < 8; i++) {
    data.push({ symbol: i, active: false })
    data.push({ symbol: i, active: false })
  }
  shuffle(data)
  return new List(data);
}

const initialState = {
  gameWon: false,
  data: deckOfCards(),
  matches: new List([]),
  selected: new List([]),
}

export default function app(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case actionTypes.CREATE_GAME:
      return initialState;
    case actionTypes.FLIP_CARD:
      const id = action.id;

      let newData = state.data.update(id, (card) => {
        card.active = true;
        return card;
      });

      if (state.selected.size === 2) {
        for (let i = 0; i < state.selected.size; i++) {
          state.selected.get(i).active = false
        }
        state.selected = new List([]);
      }

      let selectedCard = state.data.get(id);
      let selectedList = state.selected.push(selectedCard)
      let matchedList = state.matches

      if (selectedList.size > 1) {
        if (selectedList.get(0).symbol === selectedList.get(1).symbol) {
          matchedList.push(selectedList.get(0))
          matchedList.push(selectedList.get(1))
          selectedList = new List([]);
        }
      }

      return {
        ...state,
        data: newData,
        selected: selectedList,
        matches: matchedList,
      }
    default:
      return state;
  }
}