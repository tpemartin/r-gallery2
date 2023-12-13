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

## Week 14 example

<https://github.com/tpemartin/r-gallery2/blob/cb3aa5ed167e5f5f68c397ebfacd6a620b98e243/src/week14/components/Gallery/index.jsx#L11-L15>
```
    const localData = localStorage.getItem("dataObjects")


    // initiate a state variable, dataObjects, with the value of localData
    // if localData is not null, then parse it, otherwise set it to null
    const [dataObjects, setDataObjects] = useState(localData && localData !== "undefined" ? JSON.parse(localData) : null)
```

<https://github.com/tpemartin/r-gallery2/blob/cb3aa5ed167e5f5f68c397ebfacd6a620b98e243/src/week14/components/Gallery/index.jsx#L25-L34>
```
    useEffect(() => {
        fetchData().then(
            (res) => {
                setDataObjects(res)
                // set the localStorage item, dataObjects, to the value of res, the downloaded data
                localStorage.setItem("dataObjects", JSON.stringify(res))
            }
        )


    }, [])
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

---
[<Gallery>](https://github.com/tpemartin/r-gallery2/blob/main/src/week14/components/Gallery/index.jsx)  

In `<Gallery>`, initialize a global variable, `ratings`, to an empty object.
```
    window.ratings = Object()
```

---
[<GalleryCard>](https://github.com/tpemartin/r-gallery2/blob/main/src/week14/components/Gallery/GalleryCard/index.jsx#L23)
For each `<GalleryCard>`, add a state variable, `cardRating`, and let `ratings[number-1]` be equal to `cardRating` so that when the state variable is updated, the global variable is updated as well.
```
  const [cardRating, setCardRating] = useState(null)


  window.ratings[number-1] = cardRating
```

The update function `setCardRating` is passed to the `<GalleryCardAction>` component as a prop.
```
...
          <GalleryCardAction github_link={project["Github link"]} setCardRating={setCardRating} />
...
```

---

[<GalleryCardAction>](https://github.com/tpemartin/r-gallery2/blob/main/src/week14/components/Gallery/GalleryCard/GalleryCardAction/index.jsx)
