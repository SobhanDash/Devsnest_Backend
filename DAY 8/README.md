## Express Middlewares

-> Any middleware mentioned in app.use() method will run before every HTTP request method that gets called.
-> Put app.use() above all the http method calls in which you want to include its working.

### Middleware Usecases:

-> Permission System
-> Login or general Authorisation

### Things to keep in mind

-> For perfomance sake, GET calls are cached by default by the browser.

But, this is a security issue if we try getting passwords using a GET call. As the value to the password key query will be transmitted within the query string of the requested URL and might get stored in the browser's or the web server's cache. Hence, a vulnerability.

<strong>Solution:</strong>
-> POST calls do not get cached.  
-> To get query data from GET calls we used "req.query".
-> To get query data from POST calls we use "req.body". This won't give us anything but "undefined".
So, before that we need to pass the data received in req.body through a middleware that'll convert it into a JSON format.

The middleware is called a body parser and it does as what the name suggests. --> express.json()
