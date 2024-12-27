function generatePassword(length, includeNumbers = true, includeSpecialChars = false) {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "@#%&*!$";

    let allChars = lowercaseLetters + uppercaseLetters;
    if (includeNumbers) allChars += numbers;
    if (includeSpecialChars) allChars += specialChars;

    if (length < 3) throw new Error("Password length must be at least 3");

    let password = [
        uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)],
        includeNumbers ? numbers[Math.floor(Math.random() * numbers.length)] : "",
        includeSpecialChars ? specialChars[Math.floor(Math.random() * specialChars.length)] : "",
    ];

    while (password.length < length) {
        password.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }

    password = password.sort(() => Math.random() - 0.5).join("");
    return password.slice(0, length);
}

// Example usage
console.log(generatePassword(10, true, true));
console.log(generatePassword(9 , true , false));
console.log(generatePassword(7 , false , true));
