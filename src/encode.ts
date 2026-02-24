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

    inputLetters.forEach((letter: string, index: number) => {
        mixedLetters[index] = [letter, outputLetters[index]]
    });

    
    mixedLetters.forEach((letterPair: any) => {
        output = output.replaceAll(letterPair[0], letterPair[1])
        rule = rule + letterPair[0] + letterPair[1];
    });

    return rule + "-" + output;
}