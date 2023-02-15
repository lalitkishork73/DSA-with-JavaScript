let input = "1234surya-name4321&42-age1234&male-gender4321";

// Replace all occurrences of '1234' and '4321' with a space character
// This creates a string that can be split into separate key-value pairs
let ans = input.replace(/1234/g, ' ').replace(/4321/g, ' ').split("&");
console.log(ans);

// Use reduce to create an object with key-value pairs from the split string
let res = ans.reduce((result, current) => {
    // Split the current key-value pair into key and value
    const [key, value] = current.split("-");

    // Add the key-value pair to the result object
    result[value.trim()] = key.trim();

    // Return the updated result object for the next iteration
    return result;
}, {});

console.log(res);

// Output: { 'name': 'surya', 'age': '42', 'gender': 'male' }