// Handles dom manipulation
const q = (x, y = false) => {
    return (y == null || !y) ? document.querySelector(x) : document.querySelectorAll(x)
},

    // Handles event listener function
    on = (type, el, listener, all = false) => {
        if (el) {
            (all) ? el.forEach(e => e.addEventListener(type, listener)) :
                el.addEventListener(type, listener)
        }
    },

    // Handles classList on elements 
    cls = (el, value, type) => {
        if (el) {
            (type === 'a') ? el.classList.add(value) :
                (type === 'r') ? el.classList.remove(value) :
                    el.classList.toggle(value);
        }
    };