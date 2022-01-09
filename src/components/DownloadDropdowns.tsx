import * as React from "react"
import { Link } from "gatsby"

import { detectOS, UserOS } from '../util/detectOS';
import { updateTable } from '../hooks';
import { oses, arches, packageTypes, versions} from '../hooks/updateDownloadTable'

// This is where we set defaults
const defaultVersion = '17'
const defaultPackageType = 'jdk'
const defaultArchitecture = 'x64'
let defaultOS = ''

const DownloadDropdowns = () => {

    const userOS = detectOS();
    switch (userOS) {
      case UserOS.MAC:
        defaultOS = 'macos'
        break;
      case UserOS.LINUX:
      case UserOS.UNIX:
        defaultOS = 'linux'
        break;
      default:
        defaultOS = 'windows'
        break;
    }

    updateTable(null, defaultVersion, defaultOS, defaultArchitecture)

    return (
        <div className="input-group mb-5">
            <label className="px-2 fw-bold" htmlFor="os">Operating System</label> 
            <select id="os-filter" onChange={updateTable} defaultValue={defaultOS}className="form-select form-select-sm">
                <option key="any" value="any">Any</option>
                {oses.map(
                    (os, i): string | JSX.Element =>
                        os && (
                            <option key={os.toLowerCase()} value={os.toLowerCase()}>{os}</option>
                    )
                )}
            </select>
            <label className="px-2 fw-bold" htmlFor="arch">Architecture</label> 
            <select id="arch-filter" onChange={updateTable} defaultValue={defaultArchitecture} className="form-select form-select-sm">
                <option key="any" value="any">Any</option>
                {arches.map(
                    (arch, i): string | JSX.Element =>
                        arch && (
                            <option key={arch.toLowerCase()} value={arch.toLowerCase()}>{arch}</option>
                    )
                )}
            </select>
            <label className="px-2 fw-bold" htmlFor="package-type">Package Type</label> 
            <select id="package-type-filter" onChange={updateTable} defaultValue={defaultPackageType} className="form-select form-select-sm">
                <option key="any" value="any">Any</option>
                {packageTypes.map(
                    (packageType, i): string | JSX.Element =>
                        packageType && (
                            <option key={packageType.toLowerCase()} value={packageType.toLowerCase()}>{packageType}</option>
                    )
                )}
            </select>
            <label className="px-2 fw-bold" htmlFor="version">Version</label> 
            <select id="version-filter" onChange={updateTable} defaultValue={defaultVersion} className="form-select form-select-sm">
                <option key="any" value="any">Any</option>
                {versions.map(
                    (version, i): string | JSX.Element =>
                        version && (
                            <option key={version} value={version}>{version}</option>
                    )
                )}
            </select>
        </div>
    );
};

export default DownloadDropdowns;