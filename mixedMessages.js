//initialize arrays of joke
const dirtyJokes = ["Q. What kind of Bees produce milk? A. Boobees", "Q. Welcome to the Sexual Innuendo Club. A. Thank you all for coming.", "Q. How do you make a pool table laugh? A. Tickle its balls.", "Q. What does a perverted frog say? A. Rubbit"];
const funnyJokes = ["Q. I invented a new word! A. Plagiarism", "Q. Why don't scientists trust atoms? A. Because they make up everything!", "Q. Where are average things manufactured? A. The satisfactory.", "Q. How do you drown a hipster? A. You throw him in the mainstream."];
const flirtyJokes = ["Can I have your picture so I can show Santa what I want for Christmas?", "I'm sorry I wasn't part of your past, can I make it up by being in your future?", "I'm no photographer, but I can picture us together.", "Now what's on the menu? Me-n-u"];

//generate a random number
let generateRandomNum = () => {
    return Math.floor(Math.random() * 4);
};


//output a random combination of jokes
console.log(`Dirty joke: ${dirtyJokes[generateRandomNum()]} ` + '\n' + `Funny joke: ${funnyJokes[generateRandomNum()]}` + '\n' + `Flirty joke: ${flirtyJokes[generateRandomNum()]}`);
