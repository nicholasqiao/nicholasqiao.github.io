// jQuery(window).load(function () {
//     alert('page is loaded');


// })

// $(document).ready(function() {
// 	animationClick('#logo', 'tada');

// 	function animationClick(element, animation){
//   element = $(element);
//   element.click(
//     function() {
//       element.addClass('animated ' + animation);
//       //wait for animation to finish before removing classes
//       window.setTimeout( function(){
//           element.removeClass('animated ' + animation);
//       }, 2000);
//     }
//   );
// };
// })

// $(document).ready(function() {
// 	alert("hello");
// })

jQuery(window).load(function () {
	animationHover('#enter-icon', '#intro-top', '#intro-bottom', '#hrbar', 'tada');
	//animationHover('#intro-top', 'tada');
    //animationTrigger('#enter', 'tada');



	function animationClick(element, animation){
  element = $(element);
  element.click(
    function() {

      element.addClass('animated ' + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
          element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
};

function animationHover(element, element2, element3, element4, animation){
  element = $(element);
  element2 = $(element2);
  element3 = $(element3);
  element4 = $(element4);

  element.hover(
    function() {
      //element.addClass('animated ' + 'bounceOut');
      element2.addClass('animated ' + 'fadeOutUp');
      element3.addClass('animated ' + 'fadeOutDown');
      element4.addClass('animated ' + 'fadeOut');

    },

    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        
      }, 2000);
    }
  );
};

})