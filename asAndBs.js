function asAndBs(str) {
    var a = 0;
    var b = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (char === "a" || char === "A") {
            a++
        } else if (char === "b" || char === "B") {
            b++
        }
    }
    return (a === b)
}

console.log(asAndBs("abbaaaabbab"))
console.log(asAndBs("aAabbbaBab"))
