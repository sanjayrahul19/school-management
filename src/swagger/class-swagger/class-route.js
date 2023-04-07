import { createClass } from "./class-creation";
import { deleteClass } from "./class-delete";
import { updateClass } from "./class-update";
import { getAllClass } from "./get-all-class";
import { getClass } from "./get-class";

export const classRouteDoc = {
  "/api/v1/create-class": {
    post: createClass,
  },
  "/api/v1/all-class/": {
    get: getAllClass,
  },
  "/api/v1/get-class/{id}": {
    get: getClass,
  },
  "/api/v1/update-class/{id}": {
    patch: updateClass,
  },
  "/api/v1/delete-class/{id}": {
    delete: deleteClass,
  },
};
