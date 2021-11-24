interface FilterState {
  filter: string | "all";
}

const initialState: FilterState = {
  filter: "all"
};

enum FilterActionTypes {
  SET_FILTER = "SET_FILTER",
  CLEAR_FILTER = "CLEAR_FILTER"
}
interface SetFilterAction {
  type: FilterActionTypes.SET_FILTER;
}
interface ClearFilterAction {
  type: FilterActionTypes.CLEAR_FILTER;
}
type FilterAction = SetFilterAction | ClearFilterAction;

export const filterReducer = (state = initialState, action: FilterAction) => {
  switch (action.type) {
    case FilterActionTypes.SET_FILTER:
      return { ...state };
    case FilterActionTypes.CLEAR_FILTER:
      return { ...state };
    default:
      return state;
  }
};
