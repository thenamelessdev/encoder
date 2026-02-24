# @thenamelessdev/encoder

### What is this
This is a custom encoder and decoder.

**How does it work?**
So bassicly it generates a thing called "rule" which is a string that you need to decode it. It is in the encoded text by default so you don't have to worry about it. A encoded text looks like this: [rule]=[text]. The = is the seporator between the rule and the text. The rule contains the things what should the program replace with what. The rule only conains letters from the English alphabet and if it doesn't conaint something then it will just leave it like that.

### Usage
**Installing**
```
npm install @thenamelessdev/encoder
```

**Usage (in ES module)**
```js
import encoder from "@thenamelessdev/encoder";

const text = "text to encode";
let encoded;

encoded = encoder.encode(text);
console.log(encoded);
console.log(encoder.decode(encoded));
```