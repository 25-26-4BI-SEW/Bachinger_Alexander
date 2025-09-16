SEW | Registrationform

## User Story 1
*As an admin, I need validation within the registration form, so that I am sure to have validated data from my users.*

### Acceptance Criteria
- A registration form using VueJS is created.
- The following fields are present (all fields marked with * are mandatory):
  - Firstname*
  - Lastname*
  - E-Mail* (must have a valid format)
  - Birthday*
  - Phonenumber
  - Password* (at least 3 characters)
  - Password repeat* (must match the first password field)  
- Initially no error messages are displayed.
- Inputs are immediately validated, not only on submitting the form.
- In case of a validation error a meaningful error message is presented to the user.
- An error message is displayed for every input field.
- The submit button is only clickable, if there are no errors in the registration form.
- Use the library [vuelidate](https://vuelidate-next.netlify.app/) for validation.

## Skill(s)
- [Validation using Vuelidate](https://my.skilldisplay.eu/en/skill/1874/0)  
