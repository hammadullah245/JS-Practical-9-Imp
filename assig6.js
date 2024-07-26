function reverseString(str) {
    if (str === "") {
        return "";
    }
    return reverseString(str.substr(1)) + str.charAt();
}
console.log(reverseString("hello"));
console.log(reverseString("world"));
