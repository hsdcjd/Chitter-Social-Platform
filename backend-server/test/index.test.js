import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';


chai.use(chaiHttp);

describe('backend tests for the app in index', () => {
  // Test the GET route for posts
  describe('GET /posts', () => {
    it('should return all posts', (done) => {
      chai.request(app)
        .get('/posts')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  // Test the POST route for posts
  describe('POST /posts', () => {
    it('should create a new post', (done) => {
      const post = {
        title: 'Test post',
        content: 'This is a test post',
        author: 'Test author'
      };
      chai.request(app)
        .post('/posts')
        .send(post)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('title').equal('Test post');
          expect(res.body).to.have.property('content').equal('This is a test post');
          expect(res.body).to.have.property('author').equal('Test author');
          done();
        });
    });
  });

  // Test the GET route for users
  describe('GET /user', () => {
    it('should return all users', (done) => {
      chai.request(app)
        .get('/user')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  // Test the POST route for signup
  describe('POST /signup', () => {
    it('should create a new user', (done) => {
      const user = {
        username: 'testuser',
        password: 'testpassword'
      };
      chai.request(app)
        .post('/signup')
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('username').equal('testuser');
          done();
        });
    });
  });
});
