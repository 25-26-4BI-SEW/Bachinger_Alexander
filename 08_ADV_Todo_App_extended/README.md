SEW | Todo App extended

## User Story 1
*As a user, I want to be alerted if my input exceeds a certain character limit, so I can ensure my TODOs stay within acceptable length.*

### Acceptance Criteria
- A watcher is implemented in the form component to monitor the character count of the input.
- If the character count exceeds 50 characters, a warning message is displayed to the user.
- The warning message should be clear and informative, indicating the character limit has been exceeded.

## User Story 2
As a user, I want my previously saved TODOs to be loaded automatically when the app starts.

### Acceptance Criteria
- Newly created TODOs are saved to localStorage.
- On app load, saved TODOs are retrieved from localStorage

## User Story 3
*As a user, I want the textarea to automatically gain focus when the TODO-taking component loads, so I can start typing immediately.*

### Acceptance Criteria
- The textarea is automatically focused.

## User Story 4
*As a developer, I want to have a flexible and reusable TODO component.*

### Acceptance Criteria
- The component should allow different content to be passed through the slots, making it reusable in various contexts.

## User Story 5
*As a user, I want smooth visual transitions when TODOs are added or removed from the list, to enhance the app's user experience.*

### Acceptance Criteria
- Fade-in and fade-out transitions are applied to TODOs when they are added or removed.

## Skill(s)
- [Watchers](https://my.skilldisplay.eu/en/skill/2973/0)
- [LifeCycle Hooks](https://my.skilldisplay.eu/en/skill/2974/0)
- [Template Refs](https://my.skilldisplay.eu/en/skill/2975/0)
- [Slots](https://my.skilldisplay.eu/en/skill/2977/0)  
- [Transitions](https://my.skilldisplay.eu/en/skill/2978/0)
- [localStorage](https://my.skilldisplay.eu/en/skill/3008/0)
