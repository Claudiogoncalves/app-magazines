const initialState = {
  allMagazines: 'Teste',
};

export const reduxApp = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_MAGAZINES_EDITIONS':
      return {
        ...state,
        allMagazines: action.allMagazines,
      };
    default:
      return state;
  }
};
