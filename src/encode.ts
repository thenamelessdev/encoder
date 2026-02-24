import { letters } from "./index.js";
import shuffle from "./shuffle.js";

type LetterPair = string[]

// @internal
export default function encode(text: string){
    let mixedLetters: LetterPair[] = [];
    let inputLetters = letters;
    let outputLetters = shuffle([...letters]);
    let output = text;
    let rule = "";

    const letterMap: Record<string, string> = {};
    inputLetters.forEach((letter: string, index: number) => {
        letterMap[letter] = outputLetters[index];
        rule = rule + letter + outputLetters[index];
    });

    output = text.split("").map(char => letterMap[char] ?? char).join("");

    return rule + "=" + output;
}