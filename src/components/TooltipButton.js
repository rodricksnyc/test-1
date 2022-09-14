import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';

 function TooltipButton(copy, props) {
   const [show, setShow] = useState(false);
   const target = useRef(null);

   return (

     <>

       <i aria-hidden="true" className="fal fa-question-circle ml-2" ref={target} onClick={() => setShow(!show)}></i>
       <Overlay target={target.current} show={show} placement="right" data-html="true">

         {({ placement, arrowProps, show: _show, ...props }) => (
           <div className="tool"
             {...props}
             style={{
               position: 'absolute',
               background: 'linear-gradient(87.17deg, #86E0B0 -12.81%, #61D5FF 123.59%)',
               padding: '3px 8px',
               color: 'black',
               fontSize: '12px',
               borderRadius: 0,
               zIndex: 99999999,
               container: "body",
               ...props.style,
             }}

           >
            <div dangerouslySetInnerHTML={{__html:copy.title}} />
            <span>{copy.text}</span>

           </div>
         )}
       </Overlay>
     </>
   );
 }



export default TooltipButton;
