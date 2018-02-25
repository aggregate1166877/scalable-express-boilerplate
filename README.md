# Simple but scalable NodeJS Express boilerplate
A scalable 'hello world' NodeJS Express boilerplate application with routes, controllers, and
middleware that does nothing (except print out "Hello, world!" of course).

The idea behind this project is to have a well structured not-too-minimal working environment for
a RESTful API server that could potentially grow into a larger project. This
project uses [Babel](https://www.npmjs.com/package/babel-cli) transpiling for compatibility on older systems, and
[mocha](https://mochajs.org/) with [supertest](https://www.npmjs.com/package/supertest)
for tests. Note that the tests included are merely proof concept, and do not
cover all code.

I created this to help me more easily set up new API projects quickly. If this
helps someone else, bonus.

The authentication middleware used in this project is merely a proof-of-concept
placeholder I wrote, and should not be used in the real world. NPM packages such as
[passport-jwt](https://www.npmjs.com/package/passport-jwt) and
[acl](https://www.npmjs.com/package/acl) are great packages for actual
authentication.

# Setting up this project
You'll need to install NPM and NodeJS before you can use this project. Ask
Uncle Google if you are unsure what this means.

At the time of writing, this project works with NodeJS versions 6.12.3 and
8.9.4.

Run npm install:
```bash
npm i
```

Next, run the server:
```bash
npm run dev
```
Open http://127.0.0.1:3017 in your browser. It should give you a message
stating that "Your API server is up and awaiting requests."

During development, I personally want my Node instance to automatically restart when code changes occur. This can easily be achieved with [nodemon]() (npm install -g nodemon).
```bash
nodemon npm run dev
```

For production use, first build the project, and then start.
```bash
npm run build
npm start
```

Running tests:
```bash
npm run test
```

# Some usage examples
Fire up a HTTP request tester such as [postman](https://www.getpostman.com/)
and send the server the following GET request with no parameters:
http://127.0.0.1:3017/hello

It should spit out usage. Now, send a POST request to http://127.0.0.1:3017hello/message
with the following body:
```json
{
	"token": "Hello, server!"
}
```

Two things should happen:
 * You should receive a JSON message containing "Hello, world!"
 * Your terminal should display an auth warning along with `--> API server received: "Hello, server!"`

*If you receive an error stating that a token is required, ensure that you have
set your content type to `application/json` inside your HTTP query application.*

You may want to send the same request with the above token using GET. Due to the fact that
sending auth tokens via URL params is a security problem, you should use GET headers
instead, because it achieves the same result as using `body` for POSTs. This
boilerplate will work just fine when using GET headers. There's an amazing wiki
covering that here:
https://www.owasp.org/index.php/REST_Security_Cheat_Sheet#Sensitive_information_in_HTTP_requests

# License
Licence: [unlicense](http://unlicense.org/). This means I don't care what you
do with this code. Change it, sell it, spit on it, burn it, or feed it to your
dog. If running this causes Zeus to strike down your cat, I don't care.

If in doubt, refer to the LICENSE file as it covers everything.
