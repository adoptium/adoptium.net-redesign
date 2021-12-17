import * as React from "react"
import { updateDownloadTable } from '../../hooks';

import './VendorSelector.scss';

const VendorSelector = () => {
    return (
        <ul className="vendor-list pt-5">
            <li className="vendor-li"><input type="checkbox" id="vendor-adoptium" checked onChange={updateDownloadTable}/>
                <label className="vendor-label" for="vendor-adoptium" title="Adoptium"><img src="https://i.ibb.co/fSwdSQt/vendor-adoptium.png"/></label>
            </li>
            <li className="vendor-li"><input type="checkbox" id="vendor-microsoft" checked onChange={updateDownloadTable}/>
                <label className="vendor-label" for="vendor-microsoft" title="Microsoft"><img src="https://i.ibb.co/X3NJBjp/vendor-microsoft.png"/></label>
            </li>
            <li className="vendor-li"><input type="checkbox" id="vendor-azul" checked onChange={updateDownloadTable}/>
                <label className="vendor-label" for="vendor-azul" title="Azul"><img src="https://i.ibb.co/KGmL129/vendor-azul.png"/></label>
            </li>
        </ul>
    );
};

export default VendorSelector;
