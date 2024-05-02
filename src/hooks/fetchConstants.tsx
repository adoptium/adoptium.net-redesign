import { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = 'https://api.adoptium.net/v3';

export function fetchOses(isVisible: boolean): OperatingSystem[] {

    const [oses, setOses] = useState<OperatingSystem[]>([]);

    useEffect(() => {
        if (isVisible) {
        (async () => {
            const url = `${baseUrl}/types/operating_systems`;

            axios.get(url)
                .then(function (response) {
                    const newOses = response.data.map(s => {
                        const o: OperatingSystem = { name: s, value: s.toLowerCase() }
                        return o
                    })

                    setOses(newOses);
                })
                .catch(function (error) {
                    setOses([]);
                });
        })();
        }
    }, [isVisible]);

    return oses;
}

export function fetchArches(isVisible: boolean): Architecture[] {

    const [arches, setArches] = useState<Architecture[]>([]);

    useEffect(() => {
        if (isVisible) {
        (async () => {
            const url = `${baseUrl}/types/architectures`;

            axios.get(url)
                .then(function (response) {
                    const newArches = response.data.map(s => {
                        const a: Architecture = { name: s, value: s.toLowerCase() }
                        if(a.name === 'x32') a.name = 'x86'
                        return a;
                    })

                    setArches(newArches);
                })
                .catch(function (error) {
                    setArches([]);
                });
        })();
        }
    }, [isVisible]);

    return arches;
}

export interface OperatingSystem {
    name: string
    value: string
}

export interface Architecture {
    name: string
    value: string
}
