# code-challenge

## Encoder function 

- I started writing the encoder function by enforcing that the type of input should be string, but then I had an alternative idea where I check if input isn't string and then throw new error and decided to change the code as I think it will be easier to debug in the future. If this was a real world app and someone was working with me on this project, they might know about the encoder function but not that it is supposed to only accept strings. 

- I decided to write an if check on the input to see if the string only has alphabetic characters with a regular expression. The reason for doing this was due to this part of the coding challenge " You can assume the string to be encoded has no digits and consists solely of alphabetic characters. ". But this could also be enforced on the frontend of the application, so I am not entirely confident about this.  

- The next step was to actually count the characters in the string, for this I decided to use a for...of loop, and looped through the input of the function to count how many characters there are of same type in the input. This gave me an object structured like {"T": 1, "e": 1, "s": 2, "t": "2", "i": 1}. I wasn't sure if I should merge lowercase and uppercase letters of the alphabet. But I decided to write out the rest of my function before getting feedback on that. 

- The next step I had to do after counting the characters was to flatten the object I had gotten and get that nice output value as described in the challenge. To do that, I decided to use the Object.entries() method so that I can get access to both keys and values of every item in the object. I picked object methods because I think process was very simple. This was also the reason characters variable was declared as an object and not an array as I intended to do at first. In the loop, I destructured keys and values from the object and flattened them together. Since map returns an array, the result I got from this was structured like ["T1", "e1". "s2", "t2", "i1"]

- After getting this array I decided to use the join() array method. The join() method was most suited to the final step as it concatenates all of the elements in the array and gives me the perfect output needed for this challenge: "T1e1s2t2i1". Unless it was supposed to be all uppercase :( 