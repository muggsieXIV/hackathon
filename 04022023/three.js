
/* 
    Given a search criteria object whose values will only be primitives (ints, strings, bools)
    and a list of objects,
    return any object that matches all the key value pairs in the search criteria object
    Bonus: write a 2nd solution using build in methods to practice functional programming
    EXAMPLE INPUTS/OUTPUT
    const collection = [
        { firstName: "Bob", lastName: "Bobbert", age: 31 },
        { firstName: "John", lastName: "Smith", age: 25 },
        { firstName: "Bob", lastName: "Smith", age: 27 },
        { firstName: "Bob", lastName: "White", age: 31 },
    ];
    const criteria = {
        firstName: "Bob",
        age: 31,
    };
    const expected = [
        { firstName: "Bob", lastName: "Bobbert", age: 31 },
        { firstName: "Bob", lastName: "White", age: 31 },
    ];
*/
