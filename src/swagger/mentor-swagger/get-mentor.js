export const getMentor = {
  tags: ["Mentor"],
  summary: "To Get Mentor from path id",
  description: "To Get Mentor from path id",
  parameters: [
    {
      name: "id",
      in: "path", //query
      description: "id of the mentor",
      type: "string",
      example: "640345a535cee07c64695718",
    },
  ],
  security: [{ bearerAuth: [] }],
  responses: {
    200: {
      description: "Ok",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              message: "Mentor details sent successfully",
              data: {
                _id: "640345a535cee07c64695718",
                name: "priya",
                class: {
                  _id: "6401adf7008dab2c140a4baf",
                  class_name: "12 std",
                },
                subject: {
                  _id: "6401ae52008dab2c140a4bb5",
                  name: "maths",
                },
                school_name: {
                  _id: "640074a38d8dff59f0b4fa1a",
                  school_name: "sparkout",
                  __v: 0,
                },
                __v: 0,
              },
            },
          },
        },
      },
    },
    400: {
      description: "Invalid request body",
    },
    404: {
      description: "Mentor not found",
    },
    500: {
      description: "Internal server error",
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description: "Bearer token to access these api endpoints",
      },
    },
  },
};
