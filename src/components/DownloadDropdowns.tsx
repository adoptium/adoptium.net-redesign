import * as React from "react"
import { Link } from "gatsby"

import { detectOS, UserOS } from '../util/detectOS';
import { init, updateDownloadTable } from '../hooks';

const oses = ['Any', 'Linux', 'Alpine', 'Windows', 'macOS'];
const arches = ['Any', 'x64', 'x86', 'aarch64', 's390x', 'ppc64le', 'arm32'];
const packageTypes = ['Any', 'JDK', 'JRE']
const versions = [ 17, 16, 11, 8 ];

// This is where we set defaults
const defaultVersion = '17'
const defaultPackageType = 'jdk'
const defaultArchitecture = 'x64'
let defaultOS = ''

init(versions)

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

    return (
        <div className="input-group mb-5">
            <label className="px-2 fw-bold" for="os">Operating System</label> 
            <select id="os-filter" onChange={updateDownloadTable} defaultValue={defaultOS}className="form-select form-select-sm">
                {oses.map(
                    (os, i): string | JSX.Element =>
                        os && (
                            <option value={os.toLowerCase()}>{os}</option>
                    )
                )}
            </select>
            <label className="px-2 fw-bold" for="arch">Architecture</label> 
            <select id="arch-filter" onChange={updateDownloadTable} defaultValue={defaultArchitecture} className="form-select form-select-sm">
                {arches.map(
                    (arch, i): string | JSX.Element =>
                        arch && (
                            <option value={arch.toLowerCase()}>{arch}</option>
                    )
                )}
            </select>
            <label className="px-2 fw-bold" for="package-type">Package Type</label> 
            <select id="package-type-filter" onChange={updateDownloadTable} defaultValue={defaultPackageType} className="form-select form-select-sm">
                {packageTypes.map(
                    (packageType, i): string | JSX.Element =>
                        packageType && (
                            <option value={packageType.toLowerCase()}>{packageType}</option>
                    )
                )}
            </select>
            <label className="px-2 fw-bold" for="package-type">Version</label> 
            <select id="version-filter" onChange={updateDownloadTable} defaultValue={defaultVersion} className="form-select form-select-sm">
                {versions.map(
                    (version, i): string | JSX.Element =>
                        version && (
                            <option value={version}>{version}</option>
                    )
                )}
            </select>
        </div>
    );
};

export default DownloadDropdowns;