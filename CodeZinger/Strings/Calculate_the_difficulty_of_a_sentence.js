//Calculate the difficulty of a sentence

// Given a string S, find the difficulty of the given string. Here a Word is considered hard if it has 4 consecutive consonants or number of consonants is more than the number of vowels. Else word is easy. Difficulty of the string is defined as 5*(number of hard words) + 3*(number of easy words).

// Input:Difficulty of sentence

// Output:13

// Explanation:

// Hard words = 2(Difficulty and sentence) Easy words = 1(of) So, answer is 5*2+3*1 = 13

function solution(str) {
    str = str.split('')
    let vowels = { "a": 1, "e": 1, "i": 1, "o": 1, "u": 1 }
    let vowel = 0;
    let consonant = 0;
    let conConsonant = 0;
    let hard = 0;
    let easy = 0;
    for (let i = 0; i < str.length; i++) {
        if (!vowels[str[i].toLowerCase()] && str[i] != " ") {
            consonant++;
            conConsonant++;
        } else if (vowels[str[i].toLowerCase()]) {
            vowel++;
            conConsonant = 0;
        }
        if (str[i] == " " || i == str.length - 1) {
            if (conConsonant == 4 || consonant > vowel) {
                hard++;
                consonant = 0;
                vowel = 0;
                conConsonant = 0;
            } else {
                easy++;
                consonant = 0;
                vowel = 0;
                conConsonant = 0;
            }
        }
    }
    return 5 * hard + 3 * easy
}
console.log(solution("Difficulty of sentence"))