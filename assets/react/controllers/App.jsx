import React from 'react';
import CharSheet from "./classes/CharSheet";

export default function (props) {
    return (
        <CharSheet
            username={props.username}
            value={props.value}
            hasMastery={props.hasMastery}
        />
    );
}