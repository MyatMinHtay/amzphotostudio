$(document).ready(function(){

// Start Navbar

// for navbutton 
    $('.navbuttons').click(function(){
       $('.navbuttons').toggleClass('changes');
    });
// for navbutton 
 
// for navbar 
   $(window).scroll(function(){
    let getscrolly = $(this).scrollTop();

    if(getscrolly >= 200){
        $('.navbar').addClass('navmenus');
    }else{
        $('.navbar').removeClass('navmenus');
    }
   });
// for navbar 


// End Navbar

// Start Mission Section 
   $(window).scroll(function(){
    let getscrolly = $(this).scrollTop();
    // console.log(getscrolly);

    if(getscrolly >= 650){
        $('.cameraimgs').addClass('fromlefts');
        $('.missiontexts').addClass('fromrights');
    }else{
        $('.cameraimgs').removeClass('fromlefts');
        $('.missiontexts').removeClass('fromrights');
    }
   });
// End Missin Section 


// Start Gallery Selection 

$('.gallerylists').click(function(){
    let datafilter = $(this).attr('data-filter');
    // console.log(datafilter);

    if(datafilter === "all"){
        $('.filters').show(400);
    }else{
        $('.filters').not('.' + datafilter).hide(400);

        $('.filters').filter('.' + datafilter).show(400);
    }
});

// for ul active 
 $('.gallerylists').click(function(){
    $(this).addClass('activeitems').siblings().removeClass('activeitems');
 });

// for ul active 


// End Gallery Selection 

// Start Pricing Section 
 $(window).scroll(function(){
    let getscrolly = $(this).scrollTop();
    // console.log(getscrolly);

    if(getscrolly >= 4300){
        $('.cardones').addClass('movefromlefts');
        $('.cardtwos').addClass('movefrombottoms');
        $('.cardthrees').addClass('movefromrights');
    }else{
        $('.cardones').removeClass('movefromlefts');
        $('.cardtwos').removeClass('movefrombottoms');
        $('.cardthrees').removeClass('movefromrights');
    }
 });
// End Pricing Section 


    // Start Footer Section
    const showyears = document.getElementById('showyears');
    const getfullyear = new Date().getUTCFullYear();

    showyears.textContent = getfullyear;
    // End Footer Section 
});