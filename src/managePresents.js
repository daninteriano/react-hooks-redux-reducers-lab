const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {
  // your code here
  if (action.type === "presents/increase") {
    return { numberOfPresents: state.numberOfPresents + 1 };
  } else {
    return state;
  }
}
