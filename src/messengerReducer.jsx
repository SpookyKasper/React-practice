export const initialState = {
  selectedId: 0,
  messages: [
    { message: "Hello", id: 0 },
    { message: "", id: 1 },
    { message: "", id: 2 },
  ],
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
        message: state.messages.find((mess) => mess.id === state.id),
      };
    }
    case "edited_message": {
      return {
        ...state,
        message: action.message,
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
