export const getClass = {
  tags: ["Class"],
  summary: "To Get Class from path id",
  description: "To Get Class from path id",
  parameters: [
    {
      name: "id",
      in: "path", //query
      description: "id of the class to get",
      type: "string",
      example: "6401adf7008dab2c140a4baf",
    },
  ],
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
                  classes: {
                    _id: "6401adf7008dab2c140a4baf",
                    class_name: "12 std",
                    school_name: {
                      _id: "640074a38d8dff59f0b4fa1a",
                      school_name: "sparkout",
                      __v: 0,
                    },
                    __v: 0,
                  },
                  student: [
                    {
                      _id: "6401b1e1008dab2c140a4bc5",
                      name: "sanjay",
                    },
                    {
                      _id: "64034ed0b1221f50e0859433",
                      name: "rahul",
                    },
                    {
                      _id: "64034f0cb1221f50e085943b",
                      name: "gopi",
                    },
                    {
                      _id: "64034f12b1221f50e085943d",
                      name: "raj",
                    },
                  ],
                  mentor: [
                    {
                      _id: "6401b985486bfa17600865c8",
                      name: "saranya",
                      subject: {
                        _id: "6401ae62008dab2c140a4bb9",
                        name: "social",
                      },
                    },
                    {
                      _id: "6401c2980f7f1b0e5cc484d4",
                      name: "priya",
                      subject: {
                        _id: "6401ae5a008dab2c140a4bb7",
                        name: "science",
                      },
                    },
                    {
                      _id: "6401c2ca0f7f1b0e5cc484d6",
                      name: "mohana",
                      subject: {
                        _id: "6401ae52008dab2c140a4bb5",
                        name: "maths",
                      },
                    },
                    {
                      _id: "6401c2ec0f7f1b0e5cc484d8",
                      name: "melton",
                      subject: {
                        _id: "6401ae49008dab2c140a4bb3",
                        name: "english",
                      },
                    },
                    {
                      _id: "6401c30b0f7f1b0e5cc484da",
                      name: "aravind",
                      subject: {
                        _id: "6401ae1f008dab2c140a4bb1",
                        name: "tamil",
                      },
                    },
                    {
                      _id: "640345a535cee07c64695718",
                      name: "priya",
                      subject: {
                        _id: "6401ae52008dab2c140a4bb5",
                        name: "maths",
                      },
                    },
                  ],
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
      description: "Internal server error",
    },
  },
};
