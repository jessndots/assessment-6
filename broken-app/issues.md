# Broken App Issues

1. Added callback function to the app.listen so that it would console.log when the app is on a port

2. Added general error handler and 404 handler

3. Passed 'err' as parameter to catch

4. Told express to parse request bodies for form data or JSON with: 
	app.use(express.json());
    app.use(express.urlencoded({extended: true}));

5. created expressError class

6. Changed post function to async function

7. results does not properly await the get request for each developer, so changed it to loop through the developers and await the response one at a time

8. since I made the changes in #4 above, do not need to JSON.stringify the out data

9. App does not handle invalid data, so updated to throw errors

10. Changed variable names to be more descriptive


