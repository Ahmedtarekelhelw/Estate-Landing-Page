//click on toggle to show link in small window 
let links = document.querySelector('.links')
let toggleMenu = document.querySelector('.toggle-menu')


toggleMenu.onclick = function () {
    links.classList.toggle('show')
    toggleMenu.classList.toggle('active')
}

//another way to do this

// toggleMenu.addEventListener('click' ,mobile)
// function mobile() {
//     links.classList.toggle('show')
// }



//close nav-link when click on links
let navLink = document.querySelectorAll('.nav-link')//bring all links with this class

// for loop on links
navLink.forEach(n => n.addEventListener('click', close) )

function close () {
    links.classList.remove('show')
    toggleMenu.classList.remove('active')
}





//decrease padding of header when scrolling
let con = document.querySelector('.container')
window.onscroll = function () {
    // console.log(this.scrollY)
    if (this.scrollY >=50) {
        con.classList.add('small-nav')
    }else {
        con.classList.remove('small-nav')
    }
}

//scroll button
let scroll = document.querySelector('.scroll')

scroll.onclick = function () {
    window.scrollTo(0, 720 );
}