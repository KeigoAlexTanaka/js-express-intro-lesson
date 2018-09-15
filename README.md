# Express introduction lesson

## Learning Objectives

 - Understand the HTTP request / response flow
 - Describe the role of a web server in a full-stack application
 - Write a route handler for a GET request with Express
 - Pass information with query and route parameters

## Overview

Express is a library we'll use to make web servers for our front-end applications to query our databases.

## HTTP

You may have seen `http` or `https` while browsing the web before. What you may not know is that HTTP is the structure of messages that all information travels in over the web. 

When you visit a webpage in your browser, you type in a URL for a website, like `http://gothamist.com/`. What's technically happening here, is you're making an **HTTP request**. The browser sends a message to Gothamist's web server that speaks HTTP: "Hey, can I have the contents for the domain `gothamist.com`, at the path `/news`?

Gothamist's web server sends an **HTTP response** back with the HTML content of that website.

This **HTTP request** and **response** cycle is at the heart of the web. You might have already wrote HTTP requests - the JavaScript function `fetch()` makes HTTP requests, and provides HTTP responses back to you.

## Where Express fits in

Express is a JavaScript library to set up your own web server, which listens for different kinds of HTTP requests, and serves the right response.

We'll use Express solely as a **JSON API server**. Our database might contain information about music festivals. Our React-powered front-end application will make `fetch()` calls to our server to, say, get all the music festivals at `/api/music-festivals.json`. 

In working on the web server, it is your job to write code to listen for a `/api/music-festivals.json` HTTP request, query information from the database, and then send it back to the front-end in an HTTP reseponse.

## Installing

To use Express, you'll add the package to a project with npm:

```
npm install express
```

## Express boilerplate

To use Express, we `require()` the package, create a new Express application object, and finally start the application "listening" on a specific port:

```js
const express = require('express');
const PORT = process.env.PORT || 5678;

const app = express();

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
```

Our server won't do anything just yet, this is just boilerplate to use Express.

## Running an Express server with `nodemon`

A web server is a long-running process, which you could just run with `node server.js`. However, since you'll be editing the server files and continuously testing it, you would hae to stop the `node server.js` process and restart it after every change. 

Let's use a cool package `nodemon` instead. Add it to your project:

```
npm install nodemon
```

Then modify the `scripts` section in the `package.json` file to add a `start` script:

```
"scripts": {
  "start": "nodemon server.js"
}
```

This way, whenever we run `npm start`, nodemon will run our Express server, and automatically restart it whenever we edit a file. Pretty darn cool!

## Our first route

In Express, you define a **route** in a `server.js` file. A route is a path the user makes an HTTP request for like `/`, and a handler function that takes care of that request.

```js
app.get('/', (request, response) => {
  response.send("Hello there!");
});
```

Whenever an HTTP request to `http://localhost:5678/` is made, the handler function is called. This function has access to two variables: `request` and `response` which represent the HTTP request (any information the user sent along to us) and the HTTP response.

You might end up doing a lot in these route handler functions. One thing they have to do is **send** an HTTP response back, which we're doing here with `response.send()`

When a user visits `http://localhost:5678/` in the browser, they'll see "Hello there!" displayed on the page. Note that if they go to `http://localhost:5678/news`, we see an error message "Cannot GET /news" because that's a different path that we haven't defined a route for.

## Exercise

In the Express server in `server.js`, and define the following routes:

 - Path: / Response content: "Welcome to my webpage"
 - Path: /favorite-food Response content: Your favorite food
 - Path: /favorite-movie Response content: Your favorite movie
 - Path: /about-me Response content: A little autobiography
 - Path: /contact Response content: Your preferred contact info

## Route parameters

If you consider two URLs:

 - goodvibes.com/article/how-to-improve-your-drumming
 - goodvibes.com/article/the-best-vibraphones

You could safely assume that both of these URLs are articles, just with different [URL slugs](https://en.wikipedia.org/wiki/Clean_URL#Slug): `how-to-improve-your-drumming` and `the-best-vibraphones`.

When writing an Express route, you can access the dynamic parts of the path by declaring them as **route parameters**:

```js
app.get('/article/:slug', (request, response) => {
  console.log(request.params);
  // { slug: 'how-to-improve-your-drumming' }
});
```

In the path definition, add a colon before a meaningful name for the parameter. You'll have access to the dynamic value inside of the `request.params` object.

## Route Parameter Exercise

In the server definition in `server.js`, create a route for the path `/student/:name`, so that a visitor could enter `/student/pedro` or `/student/jimbo`. The route should respond "pedro is in our class" or "tiffany is in our class" if the student is in the class, and "who is jimbo?" or "who is peter?" if the student is not in our class.