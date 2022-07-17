module.exports = function encoder(text) {
 /* Declaring an empty object into which I will add counted characters */
  let characters = {};

  /* Removing any special characters that aren't from the alphabet  */
  const noSpecialChars = text.replace(/[^a-zA-Z0-9 ]/g, '');

  /* Changing all text to uppercase so the encoder counts all alphabetic characters equally */
  const txt = noSpecialChars.toUpperCase();

  /* This loop will run for every character inside of text */
  for (const char of txt) {
    /* If the looped character matches a character previously looped in the object I increment the count by 1 */
    if (characters[char]) {
      characters[char]++;
      /* If the character is looped through for first time it won't exist in the object yet so I set the count to 1 */
    } else {
      characters[char] = 1;
    }
  }

  /* This loop runs through all the counted characters */
  const flattenedCharacters = Object.entries(characters).map((obj) => {
    /* Destructuring the object keys and properties */
    [keys, values] = obj;

    /* Only return values that are actual alphabetical characters and not empty spaces*/
    if (keys !== ' ') return keys + values;
  });

  // Concatenating all array elements to get final desired output
  const result = flattenedCharacters.join('');

  return result;
};
