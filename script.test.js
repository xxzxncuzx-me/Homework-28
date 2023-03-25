const removeElement = require("./script.js")

test('the existing element is removed from the array, result is undefined', () => {
    const arrayToTest = [1, 2, 3, 4, 5]
    const itemToDelete = 1

    expect(removeElement(arrayToTest, itemToDelete)).toBeUndefined()
    expect(arrayToTest).not.toContain(itemToDelete)

})

test('deletion of the non-existent element will not occur, the result is undefined', () => {
    const arrayToTest = [1, 2, 3, 4, 5]
    const arrayLength = arrayToTest.length
    const itemToDelete = 6

    removeElement(arrayToTest, itemToDelete)

    expect(removeElement(arrayToTest, itemToDelete)).toBeUndefined()
    expect(arrayToTest).toHaveLength(arrayLength)
})

test('If the first parameter isn\'t an array, the function should throw an error', () => {
    const valueToTest = 'array'
    const itemToDelete = 1

    expect(() => removeElement(valueToTest, itemToDelete)).toThrow()
})

test('if there are several of the specified element in the array, then they should all be deleted', () => {
    const arrayToTest = [1, 2, 3, 4, 5, 6, 7, 7]
    const itemToDelete = 7

    removeElement(arrayToTest, itemToDelete)

    expect(arrayToTest).not.toContain(itemToDelete)
})