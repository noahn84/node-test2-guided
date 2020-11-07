const supertest = require("supertest")
const server = require("../server")

test("GET /", async () => {
  const res = await supertest(server).get("/")
  
  // checking the status code
  expect(res.statusCode).toBe(200)

  // checking data type
  expect(res.type).toBe("application/json")

  // checking message
  expect(res.body.message).toBe("Welcome to our API")
})