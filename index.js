function bionify(word) {
  if (word.length === 1) {
    return word;
  }

  const numBold = Math.ceil(word.length * 0.4);

  return (
    <>
      {" "}
      <b>{word.slice(0, numBold)}</b>
      <span>{word.slice(numBold)}</span>{" "}
    </>
  );
}

function paraToWord(para) {
  return <p>{para.split(" ").map(bionify)}</p>;
}

module.exports = paraToWord;
