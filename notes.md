* data-* attributes allow us to store extra information on standard, semantic HTML elements.
* The HTML option element is used to create a control representing an item within a select, an optgroup or a datalist.
* The .data() method allows us to attach data of any type to DOM elements in a way that is safe from circular references and therefore from memory leaks.
* The .on() method attaches event handlers to the currently selected set of elements in the jQuery object.
* Event Propagation - Any time an event is fired, triggering its event handlers; it then bubbles up the DOM tree, triggering each of its parent event handlers (for this event).
* Event delegation - The process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future.