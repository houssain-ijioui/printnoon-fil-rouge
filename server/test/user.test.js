import User from "../models/user.model.js";
import authController from '../controllers/auth.controller';
import credentialsDuplicated from '../middlwares/credentials-duplicated.middlware.js';

jest.mock('../models/user.model');

describe('AuthController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /signup', () => {
    test('should create a new user and return 201', async () => {
      const req = { body: { name: 'test', email: 'test@test.com', password: 'password' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      // mock user.save()
      User.prototype.save.mockResolvedValueOnce();

      await authController.signup(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ message: 'User Created Successfully' });
    });

    test('should return 500 if an error occurs in signup', async () => {
      const req = { body: { name: 'test', email: 'test@test.com', password: 'password' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      // Mock User model's save method to throw an error
      User.prototype.save.mockRejectedValueOnce(new Error('Database error'));

      await authController.signup(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Oops somehing went wrong' });
    });
  });

  describe('CredentialsDuplicated middleware', () => {
    test('should call next() if email is not in use', async () => {
      const req = { body: { email: 'new@test.com' } };
      const res = { status: jest.fn(), send: jest.fn() };
      const next = jest.fn();

      // Mock User.findOne to return null, indicating email is not in use
      User.findOne.mockResolvedValueOnce(null);

      await credentialsDuplicated(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
      expect(res.send).not.toHaveBeenCalled();
    });

    test('should return 401 if email is already in use', async () => {
      const req = { body: { email: 'emailexst@example.com' } };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

      // Mock User.findOne to return a user, indicating email is already in use
      User.findOne.mockResolvedValueOnce({ email: 'emailexst@example.com' });

      await credentialsDuplicated(req, res, jest.fn());

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.send).toHaveBeenCalledWith({ message: 'Failed! Email Already in use.' });
    });

    test('should return 500 if an error occurs during middleware execution', async () => {
      const req = { body: { email: 'new@example.com' } };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

      // Mock User.findOne to throw an error
      User.findOne.mockRejectedValueOnce(new Error('Database error'));

      await credentialsDuplicated(req, res, jest.fn());

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith({ message: 'Oops somehing went wrong' });
    });
  });
});
