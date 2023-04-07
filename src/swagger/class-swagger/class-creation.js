export const createClass = {
  tags: ["Class"],
  summary: "To Create a Class",
  description: "To Create a Class",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            class_name: {
              type: "string",
              description: "Name of the class",
              example: "10 std",
            },
            school_name: {
              type: "string",
              description: "Name of the School",
              example: "640074a38d8dff59f0b4fa1a",
            },
          },
          required: ["class_name"],
        },
      },
    },
  },

  responses: {
    200: {
      description: "Ok",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              message: "Class created successfully",
              data: {
                class_name: "10 std",
                school_name: "640074a38d8dff59f0b4fa1a",
                _id: "640339684ff76388cf88f6b9",
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
    500: {
      description: "Bad request",
    },
  },
};
