import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v0.0.1",
    title: "Dokumentasi API Zhopee",
    description: "Dokumentasi API Zhopee",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local Server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      ProductCreateRequest: {
        name: "Kemeja",
        description: "Kemeja keren murah",
        images: "",
        price: 100000,
        qty: 100,
        categoryId: "670e1d37642fd7e7aed9f4d0"
      },
      LoginRequest: {
        email: "zul@yopmail.com",
        password: "zul123",
      },
      RegisterRequest: {
        fullName: "zul",
        username: "zul",
        email: "zul@yopmail.com",
        password: "zul123",
        confirmPassword: "zul123",
      },
      UpdateProfileRequest: {
        fullName: "zul",
        username: "zul",
        email: "zul@yopmail.com",
        password: "zul123",
        confirmPassword: "zul123",
      },
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
