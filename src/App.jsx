import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

const createListItem = (person) => {
  return (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  );
};

export default function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const notChemist = people.filter((person) => person.profession != "chemist");
  const chemistList = chemists.map((person) => createListItem(person));
  const notChemistList = notChemist.map((person) => createListItem(person));
  return (
    <article>
      <h1>Chemists</h1>
      <ul>{chemistList}</ul>
      <h1>everyoneElse</h1>
      <ul>{notChemistList}</ul>
    </article>
  );
}
