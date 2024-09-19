import axios from "axios";

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  getHeader(token) {
    return {
      "Content-Type": "application/json",
    };
  }

  getWorkersHours() {
    return axios.get(`${this._baseUrl}/GetWorkersHours`);
  }
  catch(error) {
    console.error("Error fetching workers hours:", error);
  }

  postWorkerHours(workerName, taskName, startDate, endDate) {
    return axios.post(`${this._baseUrl}/SaveWorkerHour`, {
      workerName,
      taskName,
      startDate,
      endDate,
    });
  }
}

export const api = new Api({
  baseUrl: "http://localhost:5107/api/workershours",
});
