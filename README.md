
### Simple Password Validation Demo
Simple list of employees someone would have access control over.
When selecting a user from the dropdown and then clicking the button "Update Employee", it will open a modal where you can mock edit the information for this individual, this is a front-end demo and not persisting data.
The modal will populate with the data associated with that user (including the name inputs). There you will see the validation states implemented. 

## Validation Criteria
1. The `First Name` and `Last Name` fields are required
2. Red error styles on inputs only show after first clicking the "Save Employee Info" button. Input loses focus (_only_ after the first attempted submission)
3. The Update Password fields are optional when empty, but if data is added, the password is checked to ensure it matches the criteria displayed in the UI.
   - The password checklist will update any time a password value is changed
   - An invalid password (using the checklist criteria) prevents form submission
4. When clicking the `Save Employee Info` button, the form displays whether the form is valid or not.



