import { useEffect, useState } from 'react';

const baseUrl = 'https://api.adoptopenjdk.net/v3';

export function fetchLatestForOS(
    isVisible: boolean,
    version: number,
    os: string
): Binary | null {
    if (!os) {
        return null
    }
    const [binary, setBinary] = useState<Binary | null>(null);
    useEffect(() => {
        if (isVisible) {
        (async () => {
            setBinary(await fetchLatestForOSRequest(version, os));
        })();
        }
    }, [isVisible]);

    return binary;
}

async function fetchLatestForOSRequest(version, os) {
    const url = `${baseUrl}/assets/feature_releases/${version}/ga?os=${os}&architecture=x64&image_type=jdk&jvm_impl=hotspot&page_size=1&vendor=eclipse`;
    const response = await fetch(url);
    const json = (await response.json())[0];
    let binary_link = json.binaries[0].package.link
    if (json.binaries[0].installer) {
        binary_link = json.binaries[0].installer.link
    }
    return {
        release_name: json.release_name,
        link: binary_link
    };
}

export interface Binary {
  release_name: string;
  link: string;
}