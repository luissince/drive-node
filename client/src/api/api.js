import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });
  }

  async apiCall(request) {
    try {
      return (await request()).data;
    } catch (error) {
      return "error conexión";
    }
  }

  async getContent(path) {
    return await this.apiCall(() => this.api.get(`/content/${path}`));
  }

  async uploadFiles(path, files) {
    return await this.apiCall(() => this.api.post(`/upload/${path}`, files));
  }

  async mkDir(path, name) {
    return await this.apiCall(() => this.api.post(`/dir/${path}`, { name }));
  }

  async rmFile(path, name, absolutePath){
    return await this.apiCall(() => this.api.get(`/remove?path=${path}&name=${name}&absolutePath=${absolutePath}`));
  }

  async dwFile(path, name){
      return await this.apiCall(() => this.api.get(`/download?path=${path}&name=${name}`,{ responseType:"blob"}));
  }
}

const api = new Api();
export default api;
