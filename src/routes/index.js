// @flow
import { getSuspenseRoute } from "../components/routes/getSuspenseRoute";
import { getAsyncRoute } from "../components/routes/getAsyncRoute";

// Import causes routes to be code-split
// We have to specify each route name/path in order to be statically analyzable (see Webpack's JSON output)

export const Browse = getAsyncRoute(() =>
  import(/* webpackChunkName: "route-browse" */ "./browse")
);
