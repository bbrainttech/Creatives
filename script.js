AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
})

cls(q('.loader'), 'stop', 'a')

const all_ls = q('.menu ul li', true);

on('mousedown', all_ls, function (e, i) {
    all_ls.forEach(ls => { cls(ls, 'act', 'r'); });
    cls(this, 'act', 'a')
}, true)


const vgi = q('.rt>span input', true),
    r1 = q('[title="Frank Aguero"] #st_p span', true),
    r2 = q('[title="John Smith"] #st_p span', true),
    r3 = q('[title="Harper seven"] #st_p span', true),
    r4 = q('[title="Malenia lync"] #st_p span', true),
    r5 = q('[title="Tommy Gun"] #st_p span', true),

    r_all = [r1, r2, r3, r4, r5];

const add_on = (lst, val) => {
    lst.forEach(l => cls(l, 'on', 'r'))
    for (let i = 0; i <= val; i++)cls(lst[i], 'on', 'a')
}

vgi.forEach((v, ind) => {
    add_on(r_all[ind], parseInt(v.value))
    on('input', v, () => {
        v.style = `--vg : ${v.value * 10}%`
        add_on(r_all[ind], parseInt(v.value))
    })
})
const nbf = q('.nbf'),
    addFriend = q('.sf button'),
    nm = q('.sf #nm'),
    img_in = q('#img_in');

on('change', img_in, function () {
    const file = this.files[0],
        reader = new FileReader();
    on('load', reader, () => {
        on('click', addFriend, e => {
            e.preventDefault()
            // nbf.innerHTML += `<div data-aos-duration="300" data-aos="fade-up" data-name="${nm.value}"><img src="${reader.result}">${nm.value}</div>`
        })
    })
    reader.readAsDataURL(file)
})

const battery_el = q('[data-battery-per]'),
    bat = q('.batt')

var Bat = ('getBattery' in navigator) ? navigator.getBattery() : null

const show_battery = () => {
    if (Bat != null) {
        Bat.then(bt => {
            try {

                bat_lev = (bt.level * 100).toFixed(0), bat_col = '#08a9f4';
                const isCharging = bt.charging;

                if (isCharging) { cls(bat, 'charging', 'a') } else { cls(bat, 'charging', 'r') }


                bat_col = (bat_lev <= 25) ? 'var(--col2)' :
                    (bat_lev <= 50) ? 'var(--col4)' :
                        (bat_lev <= 75) ? '#70d1f7' :
                            '#08a9f4'


                q('body').style.setProperty('--battery_col', bat_col)
                q('[data-props]').style.setProperty('--battery_lev', bat_lev + '%')

                battery_el.textContent = bat_lev + '%'
            } catch { battery_el.textContent = "can't read battery status please update your browser"; cls(battery_el, 'bad', 'a') }
        })
    } else return
}
setInterval(show_battery, 10)
show_battery()