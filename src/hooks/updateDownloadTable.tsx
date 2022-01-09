const baseUrl       = 'https://api.foojay.io';
const distributions = [ 'microsoft', 'temurin', 'zulu', 'semeru_certified' ];
export const oses = ['Linux', 'Alpine', 'Windows', 'macOS', 'AIX', 'Solaris'];
export const arches = ['x64', 'x86', 'aarch64', 's390x', 'ppc64le', 'ppc64', 'arm', 'sparcv9'];
export const packageTypes = ['JDK', 'JRE']
export const versions = [ 17, 16, 11, 8 ];

let pkgs = [];
let selectedPkgs = [];

export function updateDownloadTable() {
    let microsoftSelected       = document.getElementById('vendor-microsoft').checked;
    let temurinSelected         = document.getElementById('vendor-adoptium').checked;
    let zuluSelected            = document.getElementById('vendor-azul').checked;
    let ibmSelected             = document.getElementById('vendor-ibm').checked;
    let selectedOperatingSystem = document.getElementById('os-filter').value;
    let selectedArchitecture    = document.getElementById('arch-filter').value
    let selectedPackageType     = document.getElementById('package-type-filter').value;
    let selectedVersion         = document.getElementById('version-filter').value;

    let libc;
    switch(selectedOperatingSystem) {
        case 'windows': libc = 'c_std_lib'; break;
        case 'linux'  : libc = 'glibc'; break;
        case 'macos'  : libc = 'libc'; break;
        case 'aix'    : libc = 'libc'; break;
        case 'solaris': libc = 'libc'; break;
        case 'alpine' : libc = 'musl'; selectedOperatingSystem = 'linux'; break;
        default       : libc = ''; break;
    }

    selectedPkgs = pkgs.filter(pkg => {
        let os;
        let lc;
        if (selectedOperatingSystem === 'any') {
            os = true;
            lc = true
        } else {
            os = pkg.operating_system == selectedOperatingSystem;
            lc = pkg.lib_c_type == libc;
        }

        let pt;
        if (selectedPackageType === 'any') {
            pt = true;
        } else {
            pt = pkg.package_type == selectedPackageType;
        }
        
        let temurin   = temurinSelected   ? pkg.distribution == 'temurin'   : false;
        let microsoft = microsoftSelected ? pkg.distribution == 'microsoft' : false;
        let zulu      = zuluSelected      ? pkg.distribution == 'zulu'      : false;
        let ibm       = ibmSelected       ? pkg.distribution == 'semeru_certified' : false;

        return os && lc && pt && (temurin || microsoft || zulu || ibm);

    });
    updateDownloads();
}

function updateDownloads() {
    // Clear table
    let downloadTableBody = document.getElementById('download-table').getElementsByTagName('tbody')[0];
    
    while (downloadTableBody.firstChild) {
        downloadTableBody.removeChild(downloadTableBody.lastChild);
    }
    
    selectedPkgs.forEach((pkg) => {
        var row = downloadTableBody.insertRow();
        
        // Version and Distribution
        var cellName       = row.insertCell();
        cellName.className = 'table-secondary py-4';
        var versionText = document.createTextNode(normalizeJavaVersion(pkg.java_version));
        var spanVersion = document.createElement('span');
        spanVersion.appendChild(versionText);
        spanVersion.className='text-white'
        var packageTypeText = document.createTextNode(pkg.package_type == 'jdk' ? 'JDK' : 'JRE');
        var spanPackageType = document.createElement('span');
        spanPackageType.className='text-white d-block';
        spanPackageType.appendChild(packageTypeText);
        cellName.appendChild(spanVersion);
        cellName.appendChild(spanPackageType);
        
        
        // Distribution
        var cellDistribution       = row.insertCell();
        cellDistribution.className = 'fw-bold align-middle';
        let distributionText;
        if ( pkg.distribution == 'semeru_certified') {
            distributionText = document.createTextNode('Semeru CE');
        } else {
            distributionText = document.createTextNode(capitalize(pkg.distribution));
        };
        var spanDistribution = document.createElement('span');
        spanDistribution.appendChild(distributionText);
        cellDistribution.appendChild(spanDistribution);

                
        // Vendor
        var cellVendor       = row.insertCell();
        cellVendor.className = 'align-middle';
        var vendorImg = document.createElement('img');
        vendorImg.src = getImageForVendor(getVendorForDistribution(pkg.distribution));
        vendorImg.width = 100;
        var spanVendor = document.createElement('span');
        spanVendor.appendChild(vendorImg);
        cellVendor.appendChild(spanVendor);
        
        
        // Operating System
        let os = pkg.lib_c_type == 'musl' ? 'Alpine' : pkg.operating_system == 'macos' ? 'MacOS' : capitalize(pkg.operating_system);
        var cellOperatingSystem       = row.insertCell();
        cellOperatingSystem.className = 'align-middle';
        var operatingSystemText = document.createTextNode(os);
        var spanOperatingSystem = document.createElement('span');
        spanOperatingSystem.appendChild(operatingSystemText);
        cellOperatingSystem.appendChild(spanOperatingSystem);
        
        
        // Architecture
        var cellArchitecture       = row.insertCell();
        cellArchitecture.className = 'align-middle';
        var architectureText = document.createTextNode(pkg.architecture);
        var spanArchitecture = document.createElement('span');
        spanArchitecture.appendChild(architectureText);
        cellArchitecture.appendChild(spanArchitecture);
        
        
        // Archive Type
        var cellArchiveType       = row.insertCell();
        cellArchiveType.className = 'align-middle text-center';
        var archiveTypeText = document.createTextNode('\u00A0' + pkg.archive_type);
        var archiveTypeIcon = document.createElement('i');
        archiveTypeIcon.className = 'fa fa-download';
        archiveTypeIcon.ariaHidden = true;
        var aArchiveType = document.createElement('a');
        aArchiveType.className = 'btn btn-primary';
        aArchiveType.style.width = '6em';
        aArchiveType.appendChild(archiveTypeIcon);
        aArchiveType.appendChild(archiveTypeText);
        cellArchiveType.appendChild(aArchiveType);
                
        aArchiveType.onclick = async function() {             
            let promise = getDownloadLink(pkg.id, pkg.directly_downloadable);
            promise.then(function(uri) {
            let pkgUri = uri;
            if (pkgUri == null || pkgUri === undefined) { return; }
            var link      = document.createElement('a');
            link.href     = pkgUri;
            link.download = pkgUri.substr(pkgUri.lastIndexOf('/') + 1);
            link.click();
            }, function() { 
            console.log("Error: Problem getting download link");
            pkgUri = null;
            });
        }
    });
}

export function updateTable(handler, version, os, architecture) {
    pkgs = []
    version ? version : version = document.getElementById('version-filter').value;
    os ? os : os = document.getElementById('os-filter').value;
    architecture ? architecture : architecture = document.getElementById('arch-filter').value;
    let promises = [];
    promises.push(getAllPkgsForVersion(version, os, architecture)
        .then((pkgsFound) =>
            pkgsFound.forEach((pkg) => { 
                pkgs.push(pkg); 
            })
        )
    );
    Promise.all(promises).then( res => 
        updateDownloadTable()
    );
}
    
async function getAllPkgsForVersion(version, os, architecture) {
    let params = '?'
    if (version == 'any' ) {
        versions.forEach((version) => {
            params += '&version=' + version;
        })
    } else {
        params += 'version=' + version;
    }
    if (os == 'any' ) {
        oses.forEach((os) => {
            params += '&operating_system=' + os.toLowerCase();
        })
    } else {
        params += ('&operating_system=' + os)
    }
    if (architecture == 'any' ) {
        arches.forEach((architecture) => {
            params += '&architecture=' + architecture.toLowerCase();
        })
    } else {
        params += ('&architecture=' + architecture)
    }
    distributions.forEach((distro) => {
        params += ('&distro=' + distro);
    });
    params += '&release_status=ga&latest=available&javafx_bundled=false&libc_type=libc&libc_type=c_std_lib&libc_type=glibc&libc_type=musl';
    let   url       = baseUrl + '/disco/v2.0/packages' + params;
    let   json      = await getPkgs(url);
    const response  = JSON.parse(json);
    const data      = response.result;
    let   pkgsFound = []
    for (let i = 0 ; i < data.length ; i++) {
    pkgsFound.push(data[i]);
    }
    return pkgsFound;
}

async function getPkgs(url) {
    let response = await makeRequest("GET", url);
    return response;
}

async function getDownloadLink(id, directly_downloadable) {
    // Get current ephemeralId
    const packagesUrl = baseUrl + '/disco/v2.0/packages/' + id;
    const packageJson  = await makeRequest("GET", packagesUrl);
    let   responseData = JSON.parse(packageJson);
    const pkg          = responseData.result[0];
    const ephemeralId  = pkg.ephemeral_id;

    // Get download link using the current ephemeralId
    const ephemeralIdsUrl = baseUrl + '/disco/v2.0/ephemeral_ids/' + ephemeralId;
    const packageInfoJson = await makeRequest("GET", ephemeralIdsUrl);
    responseData = JSON.parse(packageInfoJson);
    const packageInfo = responseData.result[0];
    return directly_downloadable ? packageInfo.direct_download_uri : packageInfo.download_site_uri;
}

async function makeRequest(method, url): Promise<apiData> {
    const response = await fetch(url);
    const apiResult = await response.text();
    return apiResult
};

// Utility methods
function normalizeJavaVersion(javaVersion) {
    let version = javaVersion
    if (version.indexOf('+') > -1) {
    version = version.substring(0, version.indexOf('+'));
    if (version.indexOf('-ea') > -1) {
        version = version.substring(0, version.indexOf('-ea'));
    }
    } else if (version.indexOf('-ea') > -1) {
    version = version.substring(0, version.indexOf('-ea'));
    }      
    return version;
}

function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}

function getVendorForDistribution(distribution) {
    switch(distribution) {
    case 'microsoft': return 'Microsoft';
    case 'temurin'  : return 'Eclipse Foundation';
    case 'zulu'     : return 'Azul';
    case 'semeru_certified' : return 'IBM';
    default         : return '';
    }
}

function getImageForVendor(vendor) {
    switch(vendor) {
    case 'Microsoft': return '/images/microsoft-logo.png';
    case 'Eclipse Foundation': return '/images/adoptium-logo.png';
    case 'Azul'              : return '/images/azul-logo.png';
    case 'IBM'              : return '/images/ibm-logo.png';
    default                  : return '';
    }
}