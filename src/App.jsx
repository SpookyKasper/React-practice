import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter.js";

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState([]);

  // TODO: allow multiple selection
  const selectedCount = 1;

  function handleToggle(toggledId) {
    if (selectedIds.includes(toggledId)) {
      const selected = selectedIds.filter((id) => id !== toggledId);
      setSelectedIds(selected);
    } else {
      // TODO: allow multiple selection
      const selected = selectedIds.map((id) => id);
      selected.push(toggledId);
      setSelectedIds(selected);
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
