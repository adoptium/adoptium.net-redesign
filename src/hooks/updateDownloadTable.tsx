const baseUrl       = 'https://api.foojay.io';
const distributions = [ 'microsoft', 'temurin', 'zulu' ];
let pkgs = [];
let selectedPkgs = [];

export function init(versions) {
      // Collect all available packages defined by distributions and versions and store them in pkgs
      collectAllPkgs(versions);
    
    //   let operatingSystem = getOperatingSystem();
    //   switch(operatingSystem) {
    //     case 'Windows': 
    //       document.getElementById('os-filter').value = 'windows'; 
    //       document.getElementByid('archive-type-filter').value = 'msi';
    //       break;
    //     case 'Linux': 
    //     case 'Unix' : 
    //       document.getElementById('os-filter').value = 'linux'; 
    //       document.getElementById('archive-type-filter').value = 'tar.gz';
    //       break;
    //     case 'MacOS': 
    //       document.getElementById('os-filter').value = 'macos';
    //       document.getElementById('archive-type-filter').value = 'tar.gz';
    //       break;
    //   }
    
    //   document.getElementById('arch-filter').value         = 'x64';
    //   document.getElementById('package-type-filter').value = 'jdk';
    //   document.getElementById('version-filter').value      = '17';
}

export function updateDownloadTable() {
    let microsoftSelected       = document.getElementById('vendor-microsoft').checked;
    let temurinSelected         = document.getElementById('vendor-adoptium').checked;
    let zuluSelected            = document.getElementById('vendor-azul').checked;
    let selectedOperatingSystem = document.getElementById('os-filter').value;
    let selectedArchitecture    = document.getElementById('arch-filter').value
    let selectedPackageType     = document.getElementById('package-type-filter').value;
    let selectedVersion         = document.getElementById('version-filter').value;

    let libc;
    switch(selectedOperatingSystem) {
        case 'windows': libc = 'c_std_lib'; break;
        case 'linux'  : libc = 'glibc'; break;
        case 'macos'  : libc = 'libc'; break;
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

        let arc;
        if (selectedArchitecture === 'any') {
            arc = true;
        } else {
            arc = pkg.architecture == selectedArchitecture;
        }

        let pt;
        if (selectedPackageType === 'any') {
            pt = true;
        } else {
            pt = pkg.package_type == selectedPackageType;
        }
        
        let ver;
        if (selectedVersion === 'any') {
            ver = true;
        } else {
            ver = pkg.major_version == selectedVersion;
        }
        
        let temurin   = temurinSelected   ? pkg.distribution == 'temurin'   : false;
        let microsoft = microsoftSelected ? pkg.distribution == 'microsoft' : false;
        let zulu      = zuluSelected      ? pkg.distribution == 'zulu'      : false;

        return os && lc && arc && pt && ver && (temurin || microsoft || zulu);

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
        var distributionText = document.createTextNode(capitalize(pkg.distribution) + (pkg.javafx_bundled ? ' (FX)' : ''));
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

// Functions to collect packages using the foojay.io DiscoAPI
function collectAllPkgs(versions) {
    let promises = [];
    versions.forEach((version) => { promises.push(getAllPkgsForVersion(version).then((pkgsFound) => pkgsFound.forEach((pkg) => { pkgs.push(pkg); }))); });
    Promise.all(promises).then(res => updateDownloadTable());
}
    
async function getAllPkgsForVersion(version) {
    let params  = '?version=' + version;
    distributions.forEach((distro) => {
    params += ('&distro=' + distro);
    });
    params += '&release_status=ga&latest=available&operating_system=windows&operating_system=linux&operating_system=macos&libc_type=libc&libc_type=c_std_lib&libc_type=glibc&libc_type=musl&with_javafx_if_available=true&architecture=x86&architecture=x64&architecture=aarch64';
    
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

function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.open(method, url);
    request.setRequestHeader('Disco-User-Info', 'Adoptium Marketplace');
    request.onload = function () {
        if (this.status >= 200 && this.status < 300) {
        resolve(request.response);
        } else {
        reject({
            status    : this.status,
            statusText: request.statusText
        });
        }
    };
    request.onerror = function () {
        reject({
        status    : this.status,
        statusText: request.statusText
        });
    };
    request.send();
    });
}

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
    default         : return '';
    }
}

function getImageForVendor(vendor) {
    switch(vendor) {
    case 'Microsoft': return './images/microsoft-logo.png';
    case 'Eclipse Foundation': return './images/adoptium-logo.png';
    case 'Azul'              : return './images/azul-logo.png';
    default                  : return '';
    }
}