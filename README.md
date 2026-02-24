𝟏. 𝐖𝐡𝐚𝐭 𝐢𝐬 𝐭𝐡𝐞 𝐝𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐜𝐞 𝐛𝐞𝐭𝐰𝐞𝐞𝐧 𝐠𝐞𝐭𝐄𝐥𝐞𝐦𝐞𝐧𝐭𝐁𝐲𝐈𝐝, 𝐠𝐞𝐭𝐄𝐥𝐞𝐦𝐞𝐧𝐭𝐬𝐁𝐲𝐂𝐥𝐚𝐬𝐬𝐍𝐚𝐦𝐞, 𝐚𝐧𝐝 𝐪𝐮𝐞𝐫𝐲𝐒𝐞𝐥𝐞𝐜𝐭𝐨𝐫 / 𝐪𝐮𝐞𝐫𝐲𝐒𝐞𝐥𝐞𝐜𝐭𝐨𝐫𝐀𝐥𝐥?

🔹 getElementById → Chooses a single element based on its ID.

🔹 getElementsByClassName → Returns a collection of elements that share the same class name.

🔹 querySelector → Uses the CSS selector to choose the first element that matches.

🔹 querySelectorAll → Uses the CSS selector to choose every element that matches.

𝟐. 𝐇𝐨𝐰 𝐝𝐨 𝐲𝐨𝐮 𝐜𝐫𝐞𝐚𝐭𝐞 𝐚𝐧𝐝 𝐢𝐧𝐬𝐞𝐫𝐭 𝐚 𝐧𝐞𝐰 𝐞𝐥𝐞𝐦𝐞𝐧𝐭 𝐢𝐧𝐭𝐨 𝐭𝐡𝐞 𝐃𝐎𝐌?

🔹 Utilise the document. To create a new element, use createElement().

🔹 Use textContent or innerText to add text.

🔹 Use appendChild() or append() to insert it.

For instance:

let p = document.createElement("p");
p.innerText = "Hello!";
document.body.appendChild(p);

𝟑. 𝐖𝐡𝐚𝐭 𝐢𝐬 𝐄𝐯𝐞𝐧𝐭 𝐁𝐮𝐛𝐛𝐥𝐢𝐧𝐠? 𝐀𝐧𝐝 𝐡𝐨𝐰 𝐝𝐨𝐞𝐬 𝐢𝐭 𝐰𝐨𝐫𝐤?

When you click on a child element, the event starts on the child and then progresses to the parent, grandparent, and so on. This is known as event bubbling.

It travels from the interior to the exterior.

𝟒. 𝐖𝐡𝐚𝐭 𝐢𝐬 𝐄𝐯𝐞𝐧𝐭 𝐃𝐞𝐥𝐞𝐠𝐚𝐭𝐢𝐨𝐧 𝐢𝐧 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭? 𝐖𝐡𝐲 𝐢𝐬 𝐢𝐭 𝐮𝐬𝐞𝐟𝐮𝐥?

Adding an event listener to a parent element rather than numerous child elements is known as event delegation.

It is beneficial because:

🔹 preserves memory

🔹 Functions for elements that are dynamically added

🔹 Code is made cleaner.

𝟓. 𝐖𝐡𝐚𝐭 𝐢𝐬 𝐭𝐡𝐞 𝐝𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐜𝐞 𝐛𝐞𝐭𝐰𝐞𝐞𝐧 𝐩𝐫𝐞𝐯𝐞𝐧𝐭𝐃𝐞𝐟𝐚𝐮𝐥𝐭() 𝐚𝐧𝐝 𝐬𝐭𝐨𝐩𝐏𝐫𝐨𝐩𝐚𝐠𝐚𝐭𝐢𝐨𝐧() 𝐦𝐞𝐭𝐡𝐨𝐝𝐬?

🔹 The default action (such as preventing a link from opening) is stopped by preventDefault().

🔹 stopPropagation() → Puts an end to bubbling, which is the event's progression to parent elements.