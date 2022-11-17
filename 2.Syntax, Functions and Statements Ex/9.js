function wordsUpperCase(text){
    let editedText = text.match(/\w+/g).join(", ").toUpperCase()
    console.log(editedText);
}
wordsUpperCase('hello')