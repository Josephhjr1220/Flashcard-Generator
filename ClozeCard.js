
function ClozeCard (text, cloze){
    this.fullText = text
    this.cloze = cloze;
    this.partial = text.replace(cloze, '...');
};

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

        // "George Washington"
        console.log(firstPresidentCloze.cloze); 
        console.log("======================");

        // " ... was the first president of the United States.
        console.log(firstPresidentCloze.partial);
        console.log("======================");

        // "George Washington was the first president of the United States.
        console.log(firstPresidentCloze.fullText);
        console.log("======================");

module.exports = ClozeCard;