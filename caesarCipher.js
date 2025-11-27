let userPhrase = process.argv[2]?.toLowerCase()
let userShift = process.argv[3]

if (!userPhrase || !userShift) {
    console.log("Please enter phrase and a shift number to convert to Caesar Cipher.")
    process.exit()
}

if (!/^[a-zA-Z\s]+$/.test(userPhrase)) {
    console.log("Invalid phrase! Please enter only English letters and spaces.")
    process.exit()
}

if (isNaN(userShift)) {
    console.log("Invalid shift number! Please enter only positve or negative integers.")
    process.exit()
}
let encryptedPhrase = ''
userShift = Number(userShift) % 26

for (let char of userPhrase) {
    let charCode = char.charCodeAt(0)

    if (char >= 'a' && char <= 'z') {
        let shiftedCode = charCode + userShift

        if (shiftedCode > 'z'.charCodeAt(0)) {
            shiftedCode = shiftedCode - 26
        } else if (shiftedCode < 'a'.charCodeAt(0)) {
            shiftedCode = shiftedCode + 26
        }

        encryptedPhrase += String.fromCharCode(shiftedCode)
    } else {
        encryptedPhrase += char
    }
}

console.log(encryptedPhrase)