export const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export const initialState = {
  selectedId: 0,
  messages: contacts.map((contact) => ({ message: "", id: contact.id })),
};

export function messengerReducer(state, action) {
  const currentMessageObj = state.messages.find(
    (messObj) => messObj.id === state.selectedId
  );

  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
        messages: currentMessageObj
          ? state.messages
          : [...state.messages, { message: "", id: state.selectedId }],
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
