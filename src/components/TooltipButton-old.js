
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import React, { useRef, useState } from 'react';

const TooltipButton = (props) => {

const [show, setShow] = useState(false);
const target = useRef(null);

        return (
            <OverlayTrigger  target={target.current} show={show}
                placement="right"
                data-html="true"
                overlay={<Tooltip>
                  <div dangerouslySetInnerHTML={{__html:props.title}} />
                  {props.text}
                  </Tooltip>}
                >
                <i aria-hidden="true" className="fal fa-question-circle ml-2" ref={target} 
                onClick={() => setShow(!show)}></i>
            </OverlayTrigger>
        );

}

export default TooltipButton
