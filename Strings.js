function vertLine(word) {
    for (let char = 0; char < word.length; char++) {
        if (word.length >= 7 && word[0] === "s"){
            console.log(word[0].toUpperCase())
            for (let i = 1; i <= word.slice(1).length;i++){
                console.log(word.charAt(i))
            }
            break;
        }
        else if (word[0] === "s"){
            console.log(word[0].toUpperCase())
            for (let i = 1; i <= word.slice(1).length;i++){
                console.log(word.charAt(i))
            }
            break;
        }
        else {
            console.log(word.charAt(char));
        }
    }
}
vertLine("strada");

