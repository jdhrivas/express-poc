'use strict'
var request = require('supertest')
var app = require('../server')

describe ('GET /about', function(){
    it('expects HTTP response 200', function(done){
        request(app)
        .get('/about')
        .expect(200)
        .end((err) => {
            if (err) return done(err);
            done();
        });
    })
})