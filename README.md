# code-challenge

## Encoder function 

- I started writing the encoder function by enforcing that the type of input should be string, but then I had an alternative idea where I check if input isn't string and then throw new error and decided to change the code as I think it will be easier to debug in the future. If this was a real world app and someone was working with me on this project, they might know about the encoder function but not that it is supposed to only accept strings. 

- I decided to write an if check on the input to see if the string only has alphabetic characters with a regular expression. The reason for doing this was due to this part of the coding challenge " You can assume the string to be encoded has no digits and consists solely of alphabetic characters. ". But this could also be enforced on the frontend of the application, so I am not entirely confident about this. (In the end I decided to enforce it on both frontend and backend).

- The next step was to actually count the characters in the string, for this I decided to use a for...of loop, and looped through the input of the function to count how many characters there are of same type in the input. This gave me an object structured like {"T": 1, "e": 1, "s": 2, "t": "2", "i": 1}. I wasn't sure if I should merge lowercase and uppercase letters of the alphabet. But I decided to write out the rest of my function before getting feedback on that. 

- UPDATE: After getting feedback that the result is up to me, I decided to adjust the function so it counts all alphabet characters the same no matter if it is lowercase or uppercase , even though an uppercase T and lowercase t look like different symbols they are still same characters of the alphabet. 

- The next step I had to do after counting the characters was to flatten the object I had gotten and get that nice output value as described in the challenge. To do that, I decided to use the Object.entries() method so that I can get access to both keys and values of every item in the object. I picked object methods because I think process was very simple. This was also the reason characters variable was declared as an object and not an array as I intended to do at first. In the loop, I destructured keys and values from the object and flattened them together. Since map returns an array, the result I got from this was structured like ["T1", "e1". "s2", "t2", "i1"]

- After getting this array I decided to use the join() array method. The join() method was most suited to the final step as it concatenates all of the elements in the array and gives me the perfect output needed for this challenge: "T1e1s2t2i1". Unless it was supposed to be all uppercase :( 

## Backend API route

- I installed supertest and jest for setting up testing for the api route. I started off by exporting the app from app.js and listening to it in server.js. This set up was required for testing out the app, otherwise supertest can give us an error "port in use", so we have to listen to the app in a seperate file. I also changed package.json so npm start runs server.js file and so I can run "npm test" with jest.

- Since the encoded endpoint is supposed to be protected from unauthorized users, I decided to first make a simple test which checks if the response 401 is given as intended in the authorization middleware. I also wanted to test the scenario where the user was authorized and had sucsessfully sent a string of text for encoding. So I wrote another test that simulates a logged in user with some mock data being sent as the input. Finally I'm checking in that test to see if the result passes the expected output of alphabetic and numeric characters by using a regular expression, and if it has a status code 200. 

- When I started I was thinking about rewriting the encoder function as an api route and using req, res inside of it to get input from body and sending status codes instead of throwing errors, however, upon careful examination of the challenge this caught my eye. "Add a new endpoint that will accept a string, run that string through the encoder function you wrote in the previous step and return that value." So I decided to do just that, and made a very simple api route protected by authorization middleware that accepts a string, runs it through encoder function, and responds with the output of that function. The only change I made to the function is that I moved the if statements outside of the function. I wanted the value from req.body to be validated before being sent into the function.

- After the endpoint was written, I ran the previously written tests, and also did manual testing using Postman through the development process. 