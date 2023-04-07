import { getMentor } from "./get-mentor";

export const mentorRouteDoc = {
  "/api/v1/get-mentor/{id}": {
    get: getMentor,
  },
};
