export const updateClass = {
  tags: ["Class"],
  summary: "To Update Class using path id",
  description: "To Update Class using path id",
  parameters: [
    {
      name: "id",
      in: "path", //query
      description: "id of the class to update",
      type: "string",
      example: "640339684ff76388cf88f6b9",
    },
  ],
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
              message: "Class updated successfully",
              data: {
                _id: "640339684ff76388cf88f6b9",
                class_name: "11 std",
                school_name: "6401a17a5a1bbcb717a34f38",
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
