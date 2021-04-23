import axios from "axios";

export default {
  getAll: async () => {
    const response = await axios.get("/api/v1/files");
    return response.data;
  },
  getOne: async ({ id }: { id: number }) => {
    // const response = await axios.get(`/api/v1/files/${id}`);
    // const response = await axios.get(`img/first.jpg`);
    const response = await axios.get(`/api/v1/files/${id}`, {
      responseType: "arraybuffer",
    });
    console.log(response);
    return Buffer.from(response.data, "binary").toString("base64");
  },
};
