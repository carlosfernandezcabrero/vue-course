import axios from "axios";

export default class Incidents {
  static getUrl = () => "https://forms-vue3-default-rtdb.firebaseio.com";

  static async getIncidents() {
    return await axios
      .get(`${Incidents.getUrl()}/.json`)
      .then((data) => {
        return Object.values(data.data);
      })
      .catch((err) => {
        return [];
      });
  }

  static async saveIncident(incident) {
    return await axios
      .put(
        `${Incidents.getUrl()}/${incident.id}.json`,
        JSON.stringify(incident)
      )
      .catch((err) => {
        return null;
      });
  }

  static async deleteIncident(id) {
    return await axios
      .delete(`${Incidents.getUrl()}/${id}.json`)
      .catch((err) => {
        return null;
      });
  }
}
