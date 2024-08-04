import { Fragment } from "react";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

const verseComponent = (line, index) => {
  return (
    <Fragment key={index}>
      {index > 0 && <hr />}
      <p key={index}>{line}</p>
    </Fragment>
  );
};

export default function Poem() {
  const poemList = poem.lines.map((line, index) => verseComponent(line, index));
  return <article>{poemList}</article>;
}
