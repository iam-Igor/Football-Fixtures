import { SERIE_A, PREMIER_UK, LIGA_ES } from "../store/store";

const initialState = {
  serieA: [],
  premierleague: [],
  laLiga: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERIE_A:
      return {
        ...state,
        serieA: [action.payload],
      };
    case PREMIER_UK:
      return {
        ...state,
        premierleague: [...state.premierleague, action.payload],
      };
    case LIGA_ES:
      return {
        ...state,
        laLiga: [...state.laLiga, action.payload],
      };

    default:
      return state;
  }
};

export default mainReducer;
