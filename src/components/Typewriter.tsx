import { useEffect, useState } from "react";

export function Typewriter({ words, speed = 80, pause = 1400 }: { words: string[]; speed?: number; pause?: number }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    if (!del && text === word) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(() => {
      setText((cur) => del ? cur.slice(0, -1) : word.slice(0, cur.length + 1));
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return (
    <span>
      {text}
      <span className="caret ml-0.5 inline-block w-[2px] h-[1em] -mb-1 bg-current align-middle" />
    </span>
  );
}
