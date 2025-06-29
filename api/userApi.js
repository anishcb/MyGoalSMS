export class UserApi {
  constructor(request) {
    this.request = request;
    this.basePath = '/v2/user';
  }

  async createUser(payload) {
    return await this.request.post(`${this.basePath}`, { data: payload });
  }

  async loginUser(username, password) {
    return await this.request.get(`${this.basePath}/login?username=${username}&password=${password}`);
  }

  async getUser(username) {
    return await this.request.get(`${this.basePath}/${username}`);
  }

  async updateUser(username, payload) {
    return await this.request.put(`${this.basePath}/${username}`, { data: payload });
  }

  async deleteUser(username) {
    return await this.request.delete(`${this.basePath}/${username}`);
  }
}
