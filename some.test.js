'use strict'
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const SmartApplication = require('./smartapp');

describe('app', function () {
    it('should be smart', async function () {
        let app = new SmartApplication();
        expect(app.smart(true)).to.be.true;
    });

    it('should be in control', function(done) {
        let app = new SmartApplication();
        SmartApplication.init(app).then(() => {

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

    it('end all troubles', function(done) {
        let app = new SmartApplication();
        SmartApplication.init(app).then(() => {

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
