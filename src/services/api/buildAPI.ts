const buildAPI = (methods: any) => {
  const api: any = {};
  for (const method of methods) {
    api[method] = (...args: any) =>
      new Promise((resolve, reject) => {
        const url = `http://localhost:4000/api/${method}`;
        console.log(url, args);
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(args),
        }).then((res) => {
          const { status } = res;
          if (status !== 200) {
            reject(new Error(`Status Code: ${status}`));
            return;
          }
          resolve(res.json());
        });
      });
  }
  return api;
};

const api = buildAPI(["rect", "move", "rotate", "read", "render", "resize"]);

export default api;
