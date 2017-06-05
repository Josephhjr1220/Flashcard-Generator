
var argv = process.argv[2];

function BasicCard (front, back) {
    this.front = front;
    this.back = back;
}

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?

    if (argv === "front"){

        // contain front text
        console.log(firstPresident.front);
    }
    else if (argv === "back"){

        // contain back text
        console.log(firstPresident.back);
    }

module.exports = BasicCard;