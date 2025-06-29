import { test, expect, request } from '@playwright/test';
import { UserApi } from '../api/userApi.js';
import { createUserPayload, updateUserPayload } from '../api-test-data/payloads.js';

test.describe('User API Test Suite', () => {
  let apiContext;
  let userApi;

  test.beforeAll(async () => {
    apiContext = await request.newContext({
      baseURL: 'https://petstore.swagger.io'
    });
    userApi = new UserApi(apiContext);
  });

  test('Create User - POST /user', async () => {
    const response = await userApi.createUser(createUserPayload);
    expect(response.status()).toBe(200);
  });

  test('Login User - GET /user/login', async () => {
    const response = await userApi.loginUser('anishkr90', 'anish@90');
    expect(response.status()).toBe(200);
  });

  test('Get User - GET /user/string', async () => {
    const response = await userApi.getUser('string');
    expect(response.status()).toBe(200);
  });

  test('Update User - PUT /user/string', async () => {
    const response = await userApi.updateUser('string', updateUserPayload);
    expect(response.status()).toBe(200);
  });

  test('Delete User - DELETE /user/string', async () => {
    const response = await userApi.deleteUser('string');
    expect(response.status()).toBe(200);
  });
});
