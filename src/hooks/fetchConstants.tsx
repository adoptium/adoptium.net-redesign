import { useEffect, useState } from 'react';
import axios from 'axios';
import {capitalize} from '../util/capitalize'

const baseUrl = 'https://api.adoptium.net/v3';

export function fetchOses(isVisible: boolean): OperatingSystem[] {

    const [oses, setOses] = useState<OperatingSystem[]>([]);

    useEffect(() => {
        if (isVisible) {
        (async () => {
            const url = `${baseUrl}/types/operating_systems`;

            axios.get(url)
                .then(function (response) {
                    const newOses = response.data
                        .map(s => {
                            const o: OperatingSystem = { name: capitalize(s), value: s.toLowerCase() }
                            return o
                        })
                        .sort((o1, o2) => o1.name.localeCompare(o2.name))

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
                    const newArches = response.data
                        .map(s => {
                            const a: Architecture = { name: capitalize(s), value: s.toLowerCase() }
                            if(a.name === 'x32') a.name = 'x86'
                            return a;
                        })
                        .sort((a1, a2) => a1.name.localeCompare(a2.name))    

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
