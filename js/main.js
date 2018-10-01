$(function(){

  initScroll();

  function initScroll() {
    // init controller
    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

    // build scenes
    new ScrollMagic.Scene({triggerElement: "#parallax1"})
    .setTween("#parallax1 > div", {y: "80%", ease: Power2.easeOut})
    .addTo(controller);
  }
  
});
