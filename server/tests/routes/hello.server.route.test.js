require("babel-core/register");
require("babel-polyfill");

let assert = require('assert');
const request = require('supertest');
const app = require("../../../server");

describe('authenticator.test.js', function() {

	let endpoints = [ "create", "update", "disable", "enable", "delete" ];

	describe('GET /', function() {
		it('should respond with error 200', function(done) {
			request(app)
				.get('/')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200, done);
		});
	});

	describe('GET /hello/invalid_url_ieQuaes2', function() {
		it('should respond with error 400: request invalid', function(done) {
			request(app)
				.get('/hello/invalid_url_ieQuaes2')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(400, done);
		});
	});
});

app.server.close();
