SEW | Working with Objects

## User Story 1
*As a curious developer I want to learn about objects, so that I can use them in the right way.*

### Acceptance Criteria
- An object x is defined in a certain way, so that the statement console.log(x.y.z) prints 42 to the console.


## User Story 2
*As a curious developer I want to learn about objects, so that I can use them in the right way.*

### Acceptance Criteria
- An object v is defined in a certain way, so that the statement console.log(v.v().v) prints 42 to the console.

## User Story 3
*As a curious developer I want to learn about objects, so that I can use them in the right way.*

### Acceptance Criteria
- A new property is added to the object v (from user story 2).
- The value of this new property is printed to the console.
  
## User Story 4
*For debugging purposes I can print all keys and all values of an object.*

### Acceptance Criteria
- A function debugObject(obj) is available.
- The function first prints a list of all keys, followed by a list of all values, followed by a list of key:value pairs.

## User Story 5
*As a lazy developer I want to compare the structure of two objects easily, so that I can be sure about them.*

### Acceptance Criteria
- A function equals(obj1, ob2) is available.
- The function returns true, if obj1 and obj2 are equal.
- The objects are equal if
  - they have the same number of members
  - if they both have members with the same name
- The order of the members does not matter

## User Story 6
*As a curious developer, I want to learn about Destructuring and Spread to use them efficiently in my code.*

Use the following object:

```js
const person = {
  name: "Maya",
  age: 27,
  address: {
    city: "Berlin",
    zip: "10115"
  }
};
```

### Acceptance Criteria
- Destructuring is used to store name and city in separate variables.
- A new object `personExtended` with spread is created that contains all properties of person, plus an additional field email with the value "maya@example.com".
- The `age` field in the new object is overwritten to 28 using spread.

## User Story 7
*As a professional JavaScript developer, I want to understand a key difference between traditional function expressions and arrow functions.*

### Acceptance Criteria
- Create an object representing a person with `name` and `age` properties.  
- The object has two methods:  
  - One using a traditional function.  
  - One using an arrow function.  
- Both methods log `this.name` to the console.  
- The observed behavior is explained in a comment.

## Skill(s)
- [JavaScript Objects](https://my.skilldisplay.eu/en/skill/1838/0)
