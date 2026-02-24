1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

🔹 getElementById → Chooses a single element based on its ID.

🔹 getElementsByClassName → Returns a collection of elements that share the same class name.

🔹 querySelector → Uses the CSS selector to choose the first element that matches.

🔹 querySelectorAll → Uses the CSS selector to choose every element that matches.

2. How do you create and insert a new element into the DOM?

🔹 Utilise the document. To create a new element, use createElement().

🔹 Use textContent or innerText to add text.

🔹 Use appendChild() or append() to insert it.

For instance:

let p = document.createElement("p");
p.innerText = "Hello!";
document.body.appendChild(p);

3. What is Event Bubbling? And how does it work?

When you click on a child element, the event starts on the child and then progresses to the parent, grandparent, and so on. This is known as event bubbling.

It travels from the interior to the exterior.

4. What is Event Delegation in JavaScript? Why is it useful?

Adding an event listener to a parent element rather than numerous child elements is known as event delegation.

It is beneficial because:

🔹 preserves memory
🔹 Functions for elements that are dynamically added
🔹 Code is made cleaner.

5. What is the difference between preventDefault() and stopPropagation() methods?

🔹 The default action (such as preventing a link from opening) is stopped by preventDefault().

🔹 stopPropagation() → Puts an end to bubbling, which is the event's progression to parent elements.