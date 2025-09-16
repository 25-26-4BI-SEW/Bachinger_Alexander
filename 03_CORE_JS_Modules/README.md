## User Story 1

*As a web designer, I want to be able to convert different RGB color notations into one another.*

### Acceptance Criteria

- A JS Module is available, which exports the following functions as **named exports**:
  - `rgbToHex(r, g, b)` \
    Converts RGB values to a hex value (e.g. `12,160,52 -> #0ca034`).
  
  - `rgbFunctionToHex(rgb)` \
    Converts a rgb() functional notation to a hex value. Each value could either be a number or a percentage (e.g. `"rgb(187,22%,88)" -> #bb3858`).
  
  - `hexToRgb(hex, isPercentage)`
    Converts a hex value to a rgb() functional notation, either with number or percentage values.
- A simple JS Script is available, which tests the modules functions.

## User Story 2

*As a web developer, I want to perform automatic conversion between different color notations.*


### Acceptance Criteria

- A function accepts a color in any of the supported formats (see User Story 1) and converts it in the desired output format.
- The function is part of a JS Module and exported using a **default export**. 
- A simple JS Script is available, which tests the function.    

## User Story 3

*As a web developer, I want to define a set of main colors, so that they can be reused consistently across the application.*

### Acceptance Criteria

- Three colors are defined to the module, which has been created in user story 2.
- The colors can be accessed outside of the module.
  

## Skill(s)

- [JavaScript Modules](https://my.skilldisplay.eu/en/skill/2644/0)

