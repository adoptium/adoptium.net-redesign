import * as React from "react"
import { Link } from "gatsby"

interface Props {
    versions: array;
}

const defaultJDK = '17'


const DownloadDropdowns = ({
    versions
}) => {

    if (!versions) {
        return null;
    }
    let oses = ['Linux', 'Alpine', 'Windows', 'macOS'];
    let arches = ['x64', 'x86', 'aarch64', 's390x', 'ppc64le', 'arm32'];
    versions = versions.split(',');

    return (
        <div className="dropdown">
            <button className="btn btn-secondary m-2 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Version
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownVersion">
                {versions.map(
                    (version, i): string | JSX.Element =>
                        version && (
                            <li><Link className={version === defaultJDK ? `dropdown-item active` : `dropdown-item`} to={`?version=${version}`}>Temurin {version} (LTS)</Link></li>
                        )
                )}
            </ul>
            <button className="btn btn-secondary m-2 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Operating System
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownOS">
                {oses.map(
                    (os, i): string | JSX.Element =>
                        os && (
                            <li><a className="dropdown-item" href="#">{os}</a></li>
                    )
                )}
            </ul>
            <button className="btn btn-secondary m-2 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Architecture
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownArchitecture">
                {arches.map(
                    (arch, i): string | JSX.Element =>
                        arch && (
                            <li><a className="dropdown-item" href="#">{arch}</a></li>
                    )
                )}
            </ul>
        </div>
    );
};

export default DownloadDropdowns;