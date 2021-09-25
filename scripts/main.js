
const scrollAnimations = {

  init: function () {

    Array.prototype.forEach.call(document.querySelectorAll('.imageGrid__item'), function(el, i){
      scrollAnimations.animateThis(el)
    });
  },

  animateThis: function (element) {

    var waypoint = new Waypoint({
      element: element,
      handler: function(direction) {
        this.element.classList.add('isAnimated')
      },
      offset: '85%'
    })
  }

}

scrollAnimations.init();
