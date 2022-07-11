import { randomElement } from "../../src/random-element.js";
import randomQuote, { quotes } from "../../src/index.js";

test("random array should return random element from array", () => {
    const array = ["a","b","c"];
    expect(array).toContain(randomElement(array));
});

test("returns random quote", () => {
    expect(quotes).toContain(randomQuote());
});

test("quotes should be an array", () => {
    expect(quotes).toBeInstanceOf(Array);
});