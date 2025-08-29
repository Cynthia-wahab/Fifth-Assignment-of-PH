## Answers of questions of ( সহজ সরল সিম্পল ) ASSIGNMENT-005

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: 

➡️ getElementById is a JavaScript method that finds one specific element on a web page using its unique id. It returns a single HTML element.

on the otherhand, getElementsByClassName is a JavaScript method that finds all elements on a web page that share the same class name. It is a HTMLCollection.

➡️
querySelector method returns the first element within the document that matches the specified CSS selector. If no element matches the selector it returns null

where, querySelectorAll method returns a static NodeList containing all elements within the document that match the specified CSS selector. If no elements match it returns an empty NodeList.


2. How do you **create and insert a new element into the DOM**?

Answer:

➡️ Using document.createElement() 
    setting content
    then insert with appendChild.



3. What is **Event Bubbling** and how does it work?

  Event Bubbling means when you click on a child element, the event first runs on that element, then automatically moves upwards to its parent, grandparent, and so on in the DOM tree.

  Example: If you click a button inside a div, the button’s event runs first, then the div’s event also runs.


4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer:
➡️️️ Event Delegation is a technique in JavaScript where you put one event listener on a parent element instead of adding listeners to all its child elements. The parent listens for events that "bubble up" from the children.

➡️Usefulness:
Saves memory and improves performance.
Works even for new child elements added later (no need to reattach listeners).


5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer:
➡️ preventDefault() stops the browser’s default action (like: stops a link from opening, stops a form from submitting).

➡️ stopPropagation() stops the event from bubbling up to parent elements (only the clicked element’s event runs).