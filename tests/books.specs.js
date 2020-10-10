let Book = require('../app/models/books.model');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Books', () => {
  describe('/GET All books', () => {
      it('it should GET all the books', (done) => {
        chai.request(server)
            .get('/books')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(8);
              done();
            });
      });
  });

  describe('/GET book by id', () => {
    it('it should GET single book.', (done) => {
      chai.request(server)
          .get('/books/5')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
            done();
          });
    });
});
describe('/GET book by id if id not matches.', () => {
    it('it should show 404 error message.', (done) => {
      chai.request(server)
          .get('/books/20')
          .end((err, res) => {
                res.should.have.status(404);
            done();
          });
    });
});
});
