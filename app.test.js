const request = require('supertest');
const app = require('./app');




describe("Testing all endpoints",  () => {

    it("GET /", (done) => {
        request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', 'text/html; charset=UTF-8')
        .end((err, res) => {
            if (err) return done(err);
            expect(res.text).toContain('HauteCouture-API'); 
            done()           
        });
    })

})