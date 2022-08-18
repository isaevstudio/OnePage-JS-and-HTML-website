var toggle = document.querySelector('.toggle');
var topNav = document.querySelector('.nav_top ul');
var time = new Date().getHours() + ':' + new Date().getMinutes();
var greetings

// Adding styling to the tag (active)
toggle.addEventListener('click', function(){
    topNav.classList.toggle('active');
});

// Adding time and greetings to the pop up tab
document.querySelector('#time').innerHTML = 'Current time is ' + time;

if (new Date().getHours() < 12) {
    greetings = 'Good Morning!';
    document.querySelector('#greetings').innerHTML = greetings;
} else if ( new Date().getHours() > 12 & new Date().getHours() < 18) {
    greetings = 'Good Afternoon!';
    document.querySelector('#greetings').innerHTML = greetings;
} else if ( new Date().getHours() > 18 & new Date().getHours() < 22) {
    greetings = 'Good Evening!';
    document.querySelector('#greetings').innerHTML = greetings;
} else {
    greetings = 'Good Night!';
    document.querySelector('#greetings').innerHTML = greetings;
}

// Trigger the pop up tab when the browser is reloaded or just opened
function choice(){
    document.querySelector('.choice').style.display = 'block';
}

// choosing the modes
document.querySelector('.light').addEventListener('click', function() {
    document.querySelector('.choice').style.display='none';
    alert('The light mode has been activated... Please reload the page if you want to switch the mode.');
})
document.querySelector('.dark').addEventListener('click', function() {
    document.querySelector('.choice').style.display='none'; // onclick change the pop up display to none
    document.querySelector('.nav').style.backgroundColor = 'black'; //nav bar background color
    document.querySelector('.nav').style.color = 'white'; // nav text to white (Your Name)
    document.querySelector('.toggle').style.border='3px solid white'; // icon border to white in nav
    document.querySelector('.toggle .fas').style.color='white'; // icon three strips to white in nav
    document.querySelector('.nav ul').style.backgroundColor = 'black'; // background of dropdown nav to black, so the text is visible
    //document.querySelector('.nav_top a').style.color = 'white'; // it will select only one element (first tag), so it is better to use for loop
    // For loop and it's preparation. change the (home, about...) part to white using for loop as there are more than on a tags
    var x = document.querySelectorAll('.black');
    var i;

    for(i=0; i < x.length; i++) {
        x[i].style.color='white'
    };

    // home section
    // purple
    var purple = document.querySelectorAll('.purple');
    var i;
    for(i=0; i < purple.length; i++) {
        purple[i].style.color = '#F0ECE2';
    }

    // gray
    var gray = document.querySelectorAll('.gray');
    var i;
    for(i=0; i < gray.length; i++) {
        gray[i].style.color = '#F0ECE2';
    }
    // buttons
    var btn_purple = document.querySelectorAll('.btn-purple');
    var i;
    for(i=0; i < btn_purple.length; i++) {
        btn_purple[i].style.backgroundColor = '#F2A365';
        btn_purple[i].style.boxShadow = '0px 5px 20px #F2A365';
    }
    document.querySelector('#home').style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0), #010101), url(static/pics/806443.jpg)";
    document.querySelector('body').style.backgroundColor = '#010101'; // whole body

    alert('The dark mode has been activated... Please reload the page if you want to switch the mode.');

    //bg-white
    var bg_light = document.querySelectorAll('.bg-white');
    var i;
    for(i=0; i < bg_light.length; i++){
        bg_light[i].style.backgroundColor = '#222831';
    }

    // purple light
    var purple_light = document.querySelectorAll('.purple-light');
    var i;
    for(i=0; i < purple_light.length; i++){
        purple_light[i].style.color = '#F0ECE2';
    }

    // box_shadow
    var box_shadow = document.querySelectorAll('#box_shadow');
    var i;
    for(i=0; i < box_shadow.length; i++){
    box_shadow[i].style.boxShadow = '1px 2px 8px 1px white';
    }
    
    // lead
    var lead = document.querySelectorAll('.lead');
    var i;
    for(i=0; i < lead.length; i++){
        lead[i].style.color = '#F0ECE2';
    }

    // features section
    var fa_chart_line = document.querySelectorAll('.fa-chart-line');
    var i;
    for(i=0; i<fa_chart_line.length; i++){
        fa_chart_line[i].style.color = 'white';
    }

    // box shadow for features
    var box_shadow_li = document.querySelectorAll('.box_shadow_li');
    var i;
    for(i=0; i < box_shadow_li.length; i++) {
        box_shadow_li[i].style.boxShadow = '1px 2px 8px 1px white';
    }

    // #cards_1 .row .col-xxl-2
    var chart_box = document.querySelectorAll('#cards_1 .row .col-xxl-2');
    var i;
    for(i=0; i<chart_box.length; i++){
        chart_box[i].style.boxShadow = '1px 2px 8px 1px white';
    }

    // cards_1 pricing

    var fs1_1_cards = document.querySelectorAll('#cards_1 .row .col-xxl-2 .fs-1');
    var i;
    for(i=0; i<fs1_1_cards.length; i++){
        fs1_1_cards[i].style.color = '#F0ECE2';
    }
    
    // cards_1 text
    var list_style_none = document.querySelectorAll('#cards_1 .row .col-xxl-2 .list-style-none li');
    var i;
    for(i=0; i<list_style_none.length; i++){
        list_style_none[i].style.color = '#F0ECE2';
    }
    
    // cards_1 button
    var btn_purple_light = document.querySelectorAll('.btn-purple-light');
    var i;
    for(i=0; i<btn_purple_light.length; i++){
        btn_purple_light[i].style.color = '#F0ECE2';
        btn_purple_light[i].style.border = '3px solid #F0ECE2';
    }

    // BLOG features5
    var features5 = document.querySelectorAll('#features5 .row .col-xxl-3');
    var i;
    for(i=0;i < features5.length; i++){
        features5[i].style.boxShadow = '1px 2px 4px 1px white';
    }

    // footer
    var footer_small = document.querySelectorAll('.small')
    var i;
    for(i=0; i < footer_small.length; i++){
        footer_small[i].style.color = '#F0ECE2'
    }
});

// scrolling

function scroll_about() {
    var element = document.getElementById("btn_about_scroll");
    element.scrollIntoView({behavior: "smooth"});
};
function scroll_our_values() {
    var element = document.getElementById('btn_our_values_scroll');
    element.scrollIntoView({behavior: 'smooth'});
};

function scroll_features(){
    var element = document.getElementById('btn_features_scroll');
    element.scrollIntoView({behavior:'smooth'});
};

function scroll_services(){
    var element = document.getElementById('btn_services_scroll');
    element.scrollIntoView({behavior:'smooth'});
};
function scroll_pricing(){
    var element = document.getElementById('btn_pricing_scroll');
    element.scrollIntoView({behavior:'smooth'});
};
function scroll_blog(){
    var element = document.getElementById('btn_blog_scroll');
    element.scrollIntoView({behavior:'smooth'});
};
function scroll_contacts(){
    var element = document.getElementById('btn_contacts_scroll');
    element.scrollIntoView({behavior:'smooth'});
};


function scroll_(){
    var element = document.getElementById('');
    element.scrollIntoView({behavior:'smooth'});
};


// button scroll back to top

var mybutton = document.getElementById('myBtnup'); //Get the button
window.onscroll = function(){scrollFunction()} // When the user scrolls down 100px from the top of the document, show the button

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        mybutton.style.display = 'block';
    }else{
        mybutton.style.display = 'none';
    }
}
function scrollToSmoothly(pos, time) {
    var currentPos = window.pageYOffset;
    var start = null;
    if(time == null) time = 500;
    pos = +pos, time = +time;
    window.requestAnimationFrame(function step(currentTime) {
        start = !start ? currentTime : start;
        var progress = currentTime - start;
        if (currentPos < pos) {
            window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
        } else {
            window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
        }
        if (progress < time) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
    });
}

document.querySelector('#myBtnup').addEventListener('click', function(e){
  scrollToSmoothly(0, 600);
});