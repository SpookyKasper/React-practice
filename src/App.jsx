import { getImageUrl } from "./utils.js";

const Profile = ({
  name,
  profession,
  imageId,
  awardsNum,
  awardsText,
  discovery,
  size = 70,
}) => {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awardsNum} </b>
          {awardsText}
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
};

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name={"Maria Sklodowska-Curie"}
        imageId={"szV5sdG"}
        profession={"physicist and chemist"}
        awardsNum={4}
        awardsText={
          "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        }
        discovery={"polonium (chemical element)"}
      />
      <Profile
        name={"Katsuko Saruhashi"}
        imageId={"Yfe0qp2"}
        profession={"geochemist"}
        awardsNum={2}
        awardsText={"(Miyake Prize for geochemistry, Tanaka Prize)"}
        discovery={"a method for measuring carbon dioxide in seawater"}
      />
    </div>
  );
}
