## Conditional Rendering with EJS:

```html

<% if (locals.numofletters) { %>
  <h1>There are total <%= numofletters %> letters in your name</h1>
<% } else { %>
  <h1>Enter your name below</h1>
<% } %>
```html

    EJS Syntax:
        <% ... %> is used to execute JavaScript code without outputting it.
        <%= ... %> outputs the value of the variable inside the HTML.
    Conditional Statement:
        if (locals.numofletters): Checks if numofletters exists in the locals object passed from the server.
            If it exists, it displays:

            html

<h1>There are total <%= numofletters %> letters in your name</h1>

    Here, <%= numofletters %> dynamically outputs the number of letters.

If it does not exist, it shows:

html

            <h1>Enter your name below</h1>

                This prompts the user to input their name.

Form for User Input:

html

<form action="/submit" method="POST">
  <input type="text" name="fName" placeholder="First name" required>
  <input type="text" name="lName" placeholder="Last name" required>
  <input type="submit" value="OK">
</form>

    Form Tag:
        <form action="/submit" method="POST">: Specifies that when the form is submitted, the data will be sent to the /submit endpoint using the POST method.
    Input Fields:
        <input type="text" name="fName" placeholder="First name" required>:
            Creates a text input for the user's first name.
            name="fName" identifies the input field in the submitted data.
            placeholder provides a hint within the input box.
            required makes it mandatory for the user to fill out this field.
        <input type="text" name="lName" placeholder="Last name" required>:
            Similar to the first input but for the last name.
    Submit Button:

    html

<input type="submit" value="OK">

    This button submits the form data to the server when clicked.
