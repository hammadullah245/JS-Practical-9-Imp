function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, "");
}
console.log(removeVowels("hello world"));
console.log(removeVowels("java script"));