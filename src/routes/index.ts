import { Main } from "../layouts";

const nameRouters = ["home", "settings", "auth", "users"];

function getRoute(nameRoute: string) {
  const route = require(`./${nameRoute}`);
  return route.default;
}

function getRoutes(nameRouters: string[]) {
  let routes: any = [
    {
      component: Main,
      routes: [],
    },
  ];
  nameRouters.forEach((nameRoute) => {
    const route = getRoute(nameRoute);
    routes[0].routes.push(route);
  });
  return routes;
}

export default getRoutes(nameRouters);
