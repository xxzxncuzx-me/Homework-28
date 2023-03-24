const removeElement = require("./script.js")

test('the existing element is removed from the array, result is undefined', () => {
    expect(removeElement([1, 2, 3, 4, 5, 6, 7], 7)).toBeUndefined()
})

test('deletion of the non-existent element will not occur, the result is undefined', () => {
    expect(removeElement([1, 2, 3, 4, 5, 6, 7], 8)).toBeUndefined()
})

test('If the first parameter isn\'t an array, the function should throw an error', () => {
    expect(() => removeElement('array', 1)).toThrow()
})

test('if there are several of the specified element in the array, then they should all be deleted', () => {
    expect(() => removeElement([1, 2, 3, 4, 5, 6, 7, 7], 7)).not.toContain(7)
})
