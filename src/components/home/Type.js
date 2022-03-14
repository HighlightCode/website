import React, { useState } from "react";

import Typist from "react-typist";

export default function InfTypist({ words }) {
  const [index, setIndex] = useState(0);

  let word = words[index % words.length];
  let Infi = () => {
    return (
      <Typist className="lead typist" cursor={{ show: false }}
        onTypingDone={() => {
          setIndex((i) => i + 1);
        }}
      >
        {" "}
        {word}
        <Typist.Backspace count={word.length} delay={word.length * 100} />
      </Typist>
    );
  };
  return <Infi />;
}