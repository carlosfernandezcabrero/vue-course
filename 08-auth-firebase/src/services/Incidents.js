import axios from "axios";

export default class Incidents {
  static getUrl = () =>
    "https://forms-vue3-default-rtdb.firebaseio.com/incidents";

  static async getIncidents(user) {
    return await axios
      .get(`${Incidents.getUrl()}/${user.localId}.json?auth=${user.idToken}`)
      .then((data) => Object.values(data.data))
      .catch(() => []);
  }

  static async saveIncident(incident, user) {
    return await axios
      .put(
        `${Incidents.getUrl()}/${user.localId}/${incident.id}.json?auth=${
          user.idToken
        }`,
        JSON.stringify(incident)
      )
      .catch(() => null);
  }

  static async deleteIncident(id, user) {
    return await axios
      .delete(
        `${Incidents.getUrl()}/${user.localId}/${id}.json?auth=${user.idToken}`
      )
      .catch(() => null);
  }
}
