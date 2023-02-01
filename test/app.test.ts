import { describe, it, expect } from "@jest/globals";
import { sumar } from "../src/utils/helper";

describe("primer test", () => {
  it("sumando numeros", () => {
    expect(sumar(1, 2)).toBe(3);
  });
});


// import { describe, it, vi, expect } from "vitest";
// import http from "node:http";

// global.fetch = vi.fn();

// describe("Probando app", () => {
//   it("Esperamos que el estado de la app sea 200", async () => {
//     const request = http.get("http://localhost:9005", (response) => {
//       expect(response.statusCode).toBe(200);
//     });

//     request.on("error", (error) => {
//       console.log(error);
//     });
//   });
// });