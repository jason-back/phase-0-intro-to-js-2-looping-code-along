// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
    // create array of messages
    // takes in array of names
    // create message with each name
    // add each message to the messages array
    // return messages array
    const messages = [];

    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return messages
}

function countDown() {
    for (let i = 10; i >= 0; i--) {
    console.log(i);
    }
}
