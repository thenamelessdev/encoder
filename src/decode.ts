// @internal
export default function decode(text: string){
    const rules = text.split("=")[0];
    const encodedText = text.split("=")[1];
    if(!rules || rules === null) throw new Error("invalid string");
    const ruleArr = (rules.match(/.{1,2}/g) ?? []).map(pair => pair.split(""));
    
    const letterMap: Record<string, string> = {};
    ruleArr.forEach((rule: any) => {
        letterMap[rule[1]] = rule[0];
    });

    return encodedText!.split("").map(char => letterMap[char] ?? char).join("");
}