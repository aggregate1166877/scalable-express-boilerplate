# Scalable TS NodeJS Express boilerplate

A scalable 'hello world' NodeJS Express boilerplate application with routes,
controllers, and middleware that does nothing (except print out "Hello, world!"
of course). The server is TS-bundled out of the box.

The goal of this project is to provide a well-structured, not-too-minimal
working environment for a RESTful API server that could potentially grow into a
larger project.

I created this to help me quickly set up new API projects. If it helps someone
else, that's a bonus.

The authentication middleware used in this project is merely a proof-of-concept
placeholder I wrote, and should not be used in the real world. NPM packages
such as
[passport-jwt](https://www.npmjs.com/package/passport-jwt) and
[acl](https://www.npmjs.com/package/acl) are great packages for actual
authentication.

# Setting up this project

You'll need to install NPM and NodeJS before you can use this project. Ask
Uncle Google if you are unsure what this means.

At the time of writing, this project works with NodeJS 18 and up (I've not
recently tested this with older NodeJS versions, but this project was initially
made for NodeJS version 6; YMMV).

Run npm install:

```bash
npm i
```

Next, run the server:

```bash
npm run dev
```

Open http://127.0.0.1:3017 in your browser. It should give you a message
stating that "Your API server is up and awaiting requests." It will
automatically restart when you change code.

For production use, first build the project, and then start.

```bash
npm run build-prod
npm start
```

# Some application usage examples

Fire up a HTTP request tester such as [postman](https://www.getpostman.com/)
and send the server the following GET request with no parameters:
http://127.0.0.1:3017/hello

It should spit out usage. Now, send a POST request to http://127.0.0.1:3017
hello/message
with the following body:

```json
{
  "token": "Hello, server!"
}
```

Two things should happen:

* You should receive a JSON message containing "Hello, world!"
* Your terminal should display an auth warning along
  with `--> API server received: "Hello, server!"`

*If you receive an error stating that a token is required, ensure that you have
set your content type to `application/json` inside your HTTP query
application.*

You may want to send the same request with the above token using GET. Due to
the fact that sending auth tokens via URL params is a security problem, you
should use GET headers instead, because it achieves the same result as
using `body` for POSTs. This boilerplate will work just fine when using GET
headers. There's an amazing wiki covering that here:
https://www.owasp.org/index.php/REST_Security_Cheat_Sheet#Sensitive_information_in_HTTP_requests

# Navigating the directory structure and using this in your own projects

Before we start, you may notice that there is a lot of separation of logic.
Specifically, a seemingly single piece of functionality is separated into many
different files. This is make code more maintainable in the long run, and makes
it easier to find the exact functionality you're looking for in larger
projects.

There are three important directories in this application. When making a web
request, the order of execution is as follows:

* server/routes
* server/middlewares
* server/controllers

The routes directory has source files that determine which functions are called
in response to requests. Any API requests made will be filtered by these
routes, and any unmatched requests will default to "bad request" or "method not
allowed,"depending on what's appropriate.

Middlewares intercept requests before they can reach their target functions.
These include things like user authentication.

Controllers decide what to do with requests. Controllers receive requests if
these requests were not rejected by the routes and middlewares.

You'll want to have a look at how the `hello...js` files work. Using the hello
files as templates, you can create new routes and controllers to respond to new
endpoints. If you want to intercept and preprocess data for whatever reason,
have a look at how the authenticator does it.

Finally, all configs are stored in `server/config`.
