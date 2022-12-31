This app is designed to calculate mean, median, and mode within the web browser. The purpose is a class project to practice view functions in Node JS. It includes error handling and testing. The app is designed to run on localhost:3000. If running the app on a local server, results can given with the following syntax:

localhost:3000/mean?nums=1,2,3
localhost:3000/median?nums=1,2,3
localhost:3000/mode?nums=1,2,3

The numbers following 'nums=' can be any numbers and any length of numbers. The app handles errors if nums is not entered, no query parameters are entered, or if the list after 'nums=' contains non-numbers.