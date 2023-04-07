export const deleteClass = {
  tags: ["Class"],
  summary: "To Delete Class using path id",
  description: "To Delete Class using path id",
  parameters: [
    {
      name: "id",
      in: "path", //query
      description: "id of the class to delete",
      type: "string",
      example: "64033a5b8dbafe16c878c8da",
    },
  ],
  responses: {
    200: {
      description: "Ok",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              message: "Class deleted successfully",
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
