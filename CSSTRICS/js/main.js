//colour scrollBar
let preogressbar = document.getElementById('preogressbar')
let percent = document.getElementById('percent')

let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
    let progress = (window.pageYOffset / totalHeight) * 100;
    preogressbar.style.height = progress + "%";
    percent.innerHTML = "Page Scrolled " + Math.round(progress) + "%"

}


//button scroll to top
window.addEventListener('scroll', () => {
    let scroll = document.getElementById('buttonToTop1');
    scroll.classList.toggle('active', window.scrollY > 500)

})

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}




//clock with switcher of background
const switchClock = () => {
    const wallClock = document.querySelector('.wallClock_container');
    wallClock.classList.toggle('light');
}


setInterval(() => {
    const deg = 6;
    const hr = document.getElementById('hr');
    const mn = document.getElementById('mn');
    const sc = document.getElementById('sc');

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotate(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotate(${(mm)}deg)`;
    sc.style.transform = `rotate(${(ss)}deg)`;
})

let marker = document.getElementById('indicator_marker');
let item = document.querySelectorAll('.menuIndicator a');

marker.style.left = item[0].offsetLeft + 'px';
marker.style.width = item[0].offsetWidth + 'px';

const switchMenuIndicator = (link) => {
    marker.style.left = link.offsetLeft + 'px';
    marker.style.width = link.offsetWidth + 'px';


}

    item.forEach(link => {
        link.addEventListener('click', (e) => {
            switchMenuIndicator(e.target);

        })
    })


