import request from 'supertest';
import app from '../../../src/app';

describe('User', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Lucas Medonça',
        email: 'lsm5@cin.ufpe.br',
        password_hash: '123456',
      });

    expect(response.body).toHaveProperty('id');
  });
});
