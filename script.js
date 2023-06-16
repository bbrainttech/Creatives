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


const vgi = q('.rt>span input', true)

vgi.forEach(v => {
    on('input', v, () => {
        v.style = `--vg : ${10.05 * v.value}%`
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