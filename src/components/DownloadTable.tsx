import * as React from "react"

const DownloadTable = () => {

    return (
        <table id="download-table" className="table table-bordered releases-table" style={{borderSpacing: '0 10px', borderCollapse: 'separate'}}>
            <thead className="table-dark">
                <tr className="table-head">
                    <td className="table-head">Build Version</td>
                    <td className="table-head">Distribution</td>
                    <td className="table-head">Vendor</td>
                    <td className="table-head">Operating System</td>
                    <td className="table-head">Architecture</td>
                    <td className="table-head">Download</td>
                </tr>
            </thead>
            <tbody className="table-light">
            </tbody>
        </table>
    );
};

export default DownloadTable;