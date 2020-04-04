import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const LocalStorageActions = [
    'get-settings',
    'set-settings',
    'get-notes',
    'set-notes',
];

export interface LocalStorageProps {
    action: string;
    args: string[][];
}

export const LocalStorage = (props: LocalStorageProps) => {
    const storeLocalData = (data: string[][]) => {
        AsyncStorage.multiSet(data, (err) => {
            throw `Error storing data set: ${err}`;
        });
    };


    const storeSettings = (tuples: string[][]) => {
        tuples.map((tuple: string[]) => {
            tuple[0] = 'settings#' + tuple[0];
        });
        storeLocalData(tuples);
    };

    // const retrieveSettings = (tuples: string[][]) => {
    //     AsyncStorage. .getItem('test1').then((val) =>
    //         console.log(`read test1 val=${val}`)
    //     );
    // };

    const storeNotes = (tuples: string[][]) => {
        tuples.map((tuple: string[]) => {
            tuple[0] = 'notes#' + tuple[0] + tuple[1];  // format: <prefix-id>#<notebook-name>#<page-name>
        });
        storeLocalData(tuples);
    };

    const storePreferences = (tuples: string[][]) => {
        AsyncStorage.multiSet(props.args, (err) => {
            throw err;
        });
    };

    switch (props.action) {
        case 'get-settings':
            // retrieveSettings(props.args);
            break;

        case 'set-settings':
            storeSettings(props.args);
            break;

        case 'get-notes':
            // retrieveNotes(props.args);
            break;

        case 'set-notes':
            storeNotes(props.args);
            break;

        default:
            throw `Invalid action specified: ${props.action}`;
    }
};
