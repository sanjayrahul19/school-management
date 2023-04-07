import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { classRouteDoc } from "./class-swagger/class-route";
import { mentorRouteDoc } from "./mentor-swagger/mentor-route";

export const swagger = (app) => {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Node JS API for School management",
        version: "1.0.0",
        description: "This is just a Curd Operation in Class Collection",
      },
      tags: [
        {
          name: "Class",
          description: "API for Managing Class",
        },
        {
          name: "Mentor",
          description: "API for managing Mentor",
        },
      ],
      paths: {
        ...classRouteDoc,
        ...mentorRouteDoc,
      },
      servers: [
        {
          url: "http://localhost:8000/",
          description: "Localhost",
        },
      ],
    },
    apis: ["./router/router.js"], 
  };

  const swaggerSpec = swaggerJSDoc(options);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
