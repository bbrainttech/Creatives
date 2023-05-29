AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
})

cls(q('.loader'), 'stop', 'a')

// handle clicks on lists
const all_ls = q('.menu ul li', true);

on('mousedown', all_ls, function (e, i) {
    all_ls.forEach(ls => { cls(ls, 'act', 'r'); });
    cls(this, 'act', 'a')
}, true)


// Update Range value on change
const vgi = q('.rt>span input', true)

vgi.forEach(v => {
    on('input', v, () => {
        v.style = `--vg : ${10.05 * v.value}%`
    })
})