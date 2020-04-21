const initialState = {
  currentUser: {},
};

export default {
  ...initialState,
  resetStore(state: Object) {
    return {...state, ...initialState};
  },
  setCurrentUser(state: Object, payload: Object) {
    return {
      ...state,
      currentUser: payload,
    };
  },
  updateCurrentUser(state: Object, payload: Object) {
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        ...payload,
      },
    };
  },
  updateCreditCard(state: Object, payload: Object) {
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        creditCards: payload.creditCards,
      },
    };
  },
};
