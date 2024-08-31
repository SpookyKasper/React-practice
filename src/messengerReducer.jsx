export const initialState = {
  selectedId: 0,
  messages: [
    { message: "Hello", id: 0 },
    { message: "Peak", id: 1 },
    { message: "Time", id: 2 },
  ],
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case "edited_message": {
      return {
        ...state,
        messages: state.messages.map((messObj) =>
          messObj.id === state.selectedId
            ? { message: action.message, id: state.selectedId }
            : messObj
        ),
      };
    }
    case "sent_message": {
      return {
        ...state,
        message: "",
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
