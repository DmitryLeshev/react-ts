export const loadApp = (...services: any) => (...dispatch: any) => async (
  ...dispatch: any
) => {
  console.log("services", services);
  console.log("dispatch", dispatch);
};

export default [loadApp];
