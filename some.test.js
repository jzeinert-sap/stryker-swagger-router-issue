'use strict'
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const Application = require('./express-app');

describe('app', function () {
    it('should work for code outside a controller', async function () {
        let app = new Application();
        expect(app.smart(true)).to.be.true;
    });

    it('should get value when using swagger', function(done) {
        let app = new Application();
        Application.init(app).then(() => {

            request(app)
                .get('/controller')
                .set('Content-Type', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if(err) {
                        done(err);
                    }
                    expect(res.body.key).to.equal('value');
                    done();
                });
        });
    });

    it('should get value when using just express', function(done) {
        let app = new Application();
        Application.init(app).then(() => {

            request(app)
                .get('/endpoint')
                .set('Content-Type', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if(err) {
                        done(err);
                    }
                    expect(res.body.key).to.equal('value');
                    done();
                });
        });
    });
});
