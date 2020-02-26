'use strict'
const assert = require('assert');
const request = require('supertest');
const Application = require('./express-app');

describe('app', function () {
    it('should work for code outside a controller', async function () {
        let app = new Application();
        assert.strictEqual(app.smart(true), true);
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
                    assert.strictEqual(res.body.key, 'value');
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
                    assert.strictEqual(res.body.key, 'value');
                    done();
                });
        });
    });
});
