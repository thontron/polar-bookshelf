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

            type webview = any;


            return <webview id={'tab-webview-' + tab.id}
                            disablewebsecurity
                            autosize
                            nodeintegration
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                            src="http://localhost:8500/htmlviewer/index.html?file=http%3A%2F%2Flocalhost%3A8500%2Ffiles%2F12wMDsdLB37WkkV7x4gS2ZtesSNoJcDqKE9YKJ3YmF5KfxW6sF7&filename=1eAbz9x2kG-Twitter_s_Kafka_adoption_story.phz&fingerprint=1hQFqQz3Wm1ZoozMfRr7&zoom=page-width&strategy=portable"></webview>;



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
