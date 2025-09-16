## User Story 1
*As a skilled mathematician I want to develop a class for working with complex numbers, so that I can use it in my daily work.*

### Acceptance Criteria
- A class called Complex is available, which is used to create complex numbers.
- A complex number has a real part and an imaginary part.
- The real and imaginary part can only be accessed by the corresponding getter/setter from outside the class. 
- A complex number has two methods:
  - add() to add the arguments to this and return this
  - toString() returns the complex number as string in the format re+im i (Beispiele: 2+5i, -1+2i, -3-4i, 2+i)
- The constructor function and the add method interpret their arguments according to the amount of arguments given, i.e.:
  - no argument -> number is 0
  - one argument -> (real) number or complex object
  - two arguments -> real and imaginary part
- The class has a static method to determine whether two complex numbers are equal.   
- A number of different test cases test **all** methods and possible parameter types.

*Hint*: JavaScript allows [default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters?retiredLocale=de).

## User Story 2
*As a developer, I want to create a subclass to learn about inheritance, so that I can reuse and extend functionality from a parent class.*

### Acceptance Criteria
- A class `Animal` exists with properties `name` and `age`, and a method `describe()` that returns `"name is age years old"`.
- A subclass `Dog` extends `Animal`.
- `Dog` adds a property `breed` and a method `info()` that returns `"name is age years old and is a breed"`.
- Test cases show that:
  - A `Dog` object can access methods from `Animal` (`describe()`).
  - The `info()` method correctly returns the combined information.
  - Objects can be instantiated with different property values.

#### Skill(s)
- [JavaScript Classes](https://my.skilldisplay.eu/en/skill/1839/0)
