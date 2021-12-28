import * as React from "react"
// import { useState, useRef } from "react";
import { updateDownloadTable } from '../../hooks';

import './VendorSelector.scss';

const VendorSelector = () => {

    const checkboxRef = React.useRef("");
    const [checkbox, setCheckbox] = React.useState(true);
    const handleChange = () => {
        setCheckbox(checkboxRef.current.checked)
        updateDownloadTable()
    };

    return (
        <ul className="vendor-list pt-5">
            <li className="vendor-li">
                <input id="vendor-adoptium" ref={checkboxRef} type="checkbox" defaultChecked={true} onChange={handleChange} />
                <label className="vendor-label" htmlFor="vendor-adoptium" title="Adoptium"><img src="https://i.ibb.co/fSwdSQt/vendor-adoptium.png"/></label>
            </li>
            <li className="vendor-li">
                <input id="vendor-microsoft" ref={checkboxRef} type="checkbox" defaultChecked={true} onChange={handleChange} />
                <label className="vendor-label" htmlFor="vendor-microsoft" title="Microsoft"><img src="https://i.ibb.co/X3NJBjp/vendor-microsoft.png"/></label>
            </li>
            <li className="vendor-li">
                <input id="vendor-azul" ref={checkboxRef} type="checkbox" defaultChecked={true} onChange={handleChange} />
                <label className="vendor-label" htmlFor="vendor-azul" title="Azul"><img src="https://i.ibb.co/KGmL129/vendor-azul.png"/></label>
            </li>
        </ul>
    );
};

export default VendorSelector;
