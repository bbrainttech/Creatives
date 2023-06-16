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
        v.style = `--vg : ${10.05 * v.value}%`
        add_on(r_all[ind], parseInt(v.value))
    })
})



const battery_el = q('[data-battery-per]')

const show_battery = () => {
    if (navigator.getBattery) {
        navigator.getBattery().then(battery => {
            let bat_lev = (battery.level * 100).toFixed(0), bat_col = '#08a9f4';
            const isCharging = battery.charging
            if (isCharging) { cls(q('.batt'), 'charging', 'a') } else { cls(q('.batt'), 'charging', 'r') }

            bat_col = (bat_lev <= 25) ? 'var(--col2)' :
                (bat_lev <= 50) ? 'var(--col4)' :
                    (bat_lev <= 75) ? '#70d1f7' :
                        '#08a9f4'


            q('body').style.setProperty('--battery_col', bat_col)
            q('[data-props]').style.setProperty('--battery_lev', bat_lev + '%')

            battery_el.textContent = bat_lev + '%'
        })
    }
}
setInterval(show_battery, 10)
show_battery()