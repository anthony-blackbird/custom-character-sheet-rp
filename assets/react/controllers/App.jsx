import React from 'react';
import CharSheet from "./classes/CharSheet";

export default function (props) {
    return (
        <CharSheet
            charsheet={JSON.parse(props.charSheet)}
        />
    );
}