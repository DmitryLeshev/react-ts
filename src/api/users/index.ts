import axios from "axios";

export default {
  getAll: async () => {
    const response = await axios.get("api/v1/users");
    return response.data;
  },
};
