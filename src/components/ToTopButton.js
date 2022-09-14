
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


function ToTopButton(props) {



  $(window).scroll(function () {


			((window.pageYOffset || document.documentElement.scrollTop) > 100) ?
			$('.back-to-top').css({ opacity: 1, visibility: "visible" }) :
			$('.back-to-top').css({ opacity: 0, visibility: "hidden" });


		});


		function scrollfn(e) {

        $('html, body').animate({scrollTop:0}, '300');

		}

  return (


    <div className="back-to-top"
      onClick={() => scrollfn()}>
      <i aria-hidden="true" class="far fa-angle-up"></i>
    </div>



  )
};




export default ToTopButton;
