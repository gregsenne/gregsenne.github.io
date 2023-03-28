window.onscroll = function() {scrollFunction()};
window.onresize = function() {resize()};
// document.getElementById("headerButton").addEventListener("click",toggleMenu,false);
function scrollFunction() {

        if (document.body.scrollTop > 50) {
            document.getElementById("header").classList.add('small5');
            document.getElementById("header").classList.remove('small1');
            document.getElementById("header").classList.remove('small2');
            document.getElementById("header").classList.remove('small3');
            document.getElementById("header").classList.remove('small4');
        }
        else if (document.body.scrollTop > 40) {
            document.getElementById("header").classList.add('small4');
            document.getElementById("header").classList.remove('small1');
            document.getElementById("header").classList.remove('small2');
            document.getElementById("header").classList.remove('small3');
            document.getElementById("header").classList.remove('small5');
        }
        else if (document.body.scrollTop > 30) {
            document.getElementById("header").classList.add('small3');
            document.getElementById("header").classList.remove('small1');
            document.getElementById("header").classList.remove('small2');
            document.getElementById("header").classList.remove('small4');
            document.getElementById("header").classList.remove('small5');
        }
        else if (document.body.scrollTop > 20) {
            document.getElementById("header").classList.add('small2');
            document.getElementById("header").classList.remove('small1');
            document.getElementById("header").classList.remove('small3');
            document.getElementById("header").classList.remove('small4');
            document.getElementById("header").classList.remove('small5');
        }
        else if (document.body.scrollTop > 10) {
            document.getElementById("header").classList.add('small1');
            document.getElementById("header").classList.remove('small2');
            document.getElementById("header").classList.remove('small3');
            document.getElementById("header").classList.remove('small4');
            document.getElementById("header").classList.remove('small5');
        }
        else { 
            document.getElementById("header").classList.remove('small1');
            document.getElementById("header").classList.remove('small2');
            document.getElementById("header").classList.remove('small3');
            document.getElementById("header").classList.remove('small4');
            document.getElementById("header").classList.remove('small5');
            document.getElementById("header").classList.remove('smallHeader');
        }


//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").classList.add('smallHeader');
//   } else {
//     document.getElementById("header").classList.remove('smallHeader');
//   }
}
function resize() {
    document.getElementById("header").classList.remove('expanded');
}
function toggleMenu() {
    if (document.getElementById("header").classList.contains('expanded'))
        document.getElementById("header").classList.remove('expanded');
    else
        document.getElementById("header").classList.add('expanded');
}
