import * as React from 'react';
import {Tab} from './TabNav';

export class TabBody extends React.Component<IProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);
    }

    public render() {

        const {tab} = this.props;

        if (typeof tab.content === 'string') {

            // return <webview id={'tab-webview-' + tab.id}
            //                 style={TabStyles.WEBVIEW}
            //                 src={tab.content}/>;

            return <webview id={'tab-webview-' + tab.id}
                            disablewebsecurity
                            autosize
                            nodeintegration
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                            src={tab.content}></webview>;



        } else {
            return tab.content;
        }

    }

}


interface IProps {
    readonly tab: Tab;
}

interface IState {
}


declare namespace JSX {
    interface IntrinsicElements {
        webview: any;
    }
}
