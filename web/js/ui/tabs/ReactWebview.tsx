import * as React from 'react';

/**
 * Used to prevent React from complaining about types.
 */
export class ReactWebview extends React.Component<IProps, any> {

    constructor(props: IProps, context: any) {
        super(props, context);
    }

    public render() {
        //
        // return <webview/>;

        // return <webview asdf="foo"/>;

        // return <webview id={this.props.id}
        //                 disablewebsecurity={this.props.disablewebsecurity}
        //                 autosize={this.props.autosize}
        //                 nodeintegration={this.props.nodeintegration}
        //                 style={this.props.style}
        //                 src={this.props.src}/>;

        return <div/>;

    }

}

interface IProps {
    readonly id: string;
    readonly disablewebsecurity: string;
    readonly autosize: string;
    readonly nodeintegration: string;
    readonly style: React.CSSProperties;
    readonly src: string;
}
