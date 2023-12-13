# Storage

<https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API>

## Local Storage

- Local storage is a way to store data in the browser.
- It is persistent, meaning that the data will still be there even if you close the browser.

```
// locally store 'value' with key 'name'
localStorage.setItem('name', 'value');

// Later, retrieve 'value' with key 'name'
localStorage.getItem('name');
```

- value has to be a string. 
- If you want to store an non-string value, you have to convert it to a string first.

```
// store an object
localStorage.setItem('name', JSON.stringify(a_nonstring_value));
```

## Session Storage

- Session storage is similar to local storage, but the data is only available for the current session.
- The data will be lost when the browser is closed.


# Global Variables

- Global variables are variables that are accessible from anywhere in the program.
- In JavaScript, global variables are stored in the `window` object.

```
// create a global variable
window.a_global_variable = 1;

// retrieve a global variable
console.log(window.a_global_variable);
```
