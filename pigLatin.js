let playerInput = process.argv[2]?.toLowerCase()

if (!playerInput) {
    console.log("Please enter English word or phrase to convert to Pig Latin")
    process.exit()
}

if (!/^[a-zA-Z\s]+$/.test(playerInput)) {
    console.log("Invalid input! Please enter only English letters and spaces.")
    process.exit()
}
const words = playerInput.split(' ')
const vowels = ['a', 'e', 'i', 'o', 'u']
const pigLatin = []

words.forEach(word => {
    if (vowels.includes(word[0])) {
        pigLatin.push(word + 'way')
    } 
    else if (!vowels.includes(word[0]) && vowels.includes(word[1])) {
        pigLatin.push(word.slice(1) + word[0] + 'ay')
    }
    else {
        pigLatin.push(word.slice(2) + word.slice(0, 2) + 'ay')
    }
})

console.log(pigLatin.join(' '))