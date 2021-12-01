import React from "react";
import ReactDOM from "react-dom";

import { modal_pop, modal_overlay, edit_avatar} from "./Modal.module.scss";

const Modal = ({ visible, toggle }) => visible ? ReactDOM.createPortal(
  <div className="modal">
    <div className={modal_pop} role="dialog" aria-modal="true">

      <button type="button" onClick={toggle}>Close</button>
    </div>  
    <div className={modal_overlay}></div>    
  </div>, document.body
) : null;

export default Modal;