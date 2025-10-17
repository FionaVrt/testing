


import { describe, test, expect } from "@jest/globals"

describe('FizzBuzz', () =>{
    test('1', () =>{
        expect(fizzbuzz(1)).toEqual("1")
    })
    test('2', () =>{
        expect(fizzbuzz(2)).toEqual("2")
    })
    test('3', () =>{
        expect(fizzbuzz(3)).toEqual("Fizz")
    })
    test('4', () =>{
        expect(fizzbuzz(4)).toEqual("4")
    })
    test('5', () =>{
        expect(fizzbuzz(5)).toEqual("Buzz")
    })
    test('15', () =>{
        expect(fizzbuzz(15)).toEqual("FizzBuzz")
    })
})


describe("FizzBuzz ParameterizedTest", () => {
    test.each([
        [1, "1"],
        [2, "2"],
        [3, "Fizz"],
        [5, "Buzz"],
        [15, "FizzBuzz"],
        [30, "FizzBuzz"],
        [13, "13"],
    ])("fizzbuzz(%i) devrait retourner %s", (input, expected) => {
        expect(fizzbuzz(input)).toBe(expected);
    });
});



function fizzbuzz(n: number): string {
    return n % 3 === 0 && n % 5 === 0 ? 'FizzBuzz' : n % 3 === 0 ? 'Fizz' : n % 5 === 0 ? 'Buzz' : n.toString()
}