export const getAllClass = {
  tags: ["Class"],
  summary: "To Get All the Class",
  description: "To Get All the  Class",

  responses: {
    200: {
      description: "Ok",
      content: {
        "application/json": {
          schema: {
            type: "array",
            example: {
              message: "Class details sent successfully",
              data: [
                {
                  _id: "6401adf7008dab2c140a4baf",
                  class_name: "12 std",
                  school_name: {
                    _id: "640074a38d8dff59f0b4fa1a",
                    school_name: "sparkout",
                    __v: 0,
                  },
                  __v: 0,
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: "Invalid request body",
    },
    404: {
      description: "Class not found",
    },
    500: {
      description: "Bad request",
    },
  },
};
