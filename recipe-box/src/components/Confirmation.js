import React from 'react';
import {confirmable} from 'react-confirm';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

const Confirmation = ({show, proceed, dismiss, cancel, confirmation, options}) => {
    const actions = [
        <RaisedButton
            label="Cancel"
            onTouchTap={() => cancel(false)}
        />,
        <RaisedButton
            label="Delete"
            primary={true}
            keyboardFocused={true}
            onTouchTap={() => proceed(true)}
        />,
    ];
    return (
        <div>
            <Dialog
                title="Dialog With Actions"
                actions={actions}
                open={show}
                onRequestClose={() => cancel(false)}>
                The actions in this window were passed in as an array of React objects.
            </Dialog>
        </div>
    )
};

export default confirmable(Confirmation);