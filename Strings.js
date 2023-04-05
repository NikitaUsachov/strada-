function vertLine(word) {
    for (let char = 0; char < word.length; char++) {
        if (word.length >= 7 && word[0] === "s"){
            console.log(word[0].toUpperCase())
            console.log(word[1])
            console.log(word[2])
            console.log(word[3])
            console.log(word[4])
            console.log(word[5])
            console.log(word[6])
            break;
        }
        else if (word[0] === "s"){
            console.log(word[0].toUpperCase())
            console.log(word[1])
            console.log(word[2])
            console.log(word[3])
            console.log(word[4])
            console.log(word[5])
            break;
        }
        else {
            console.log(word.charAt(char));
        }
        
    }
}
vertLine("strada");

