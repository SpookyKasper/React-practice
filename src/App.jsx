import { useReducer } from "react";
import Chat from "./Chat.jsx";
import ContactList from "./ContactList.jsx";
import { initialState, messengerReducer } from "./messengerReducer";
import React from "react";
import { contacts } from "./messengerReducer.jsx";

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const contact = contacts.find((c) => c.id === state.selectedId);
  const messageObj = state.messages.find(
    (mess) => mess.id === state.selectedId
  );

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={messageObj.message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}
