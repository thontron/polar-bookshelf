import * as React from 'react';
import {NULL_FUNCTION} from '../../../../../web/js/util/Functions';
import Input from 'reactstrap/lib/Input';
import {fastDeepEqual} from '../../../../../web/js/react/Functions';

export class CheckedCell extends React.Component<IProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);

        this.state = {
        };

    }

    public shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any): boolean {

        const cmpProps = {...this.props, onClick: undefined};
        const cmpNextProps = {...nextProps, onClick: undefined};

        return ! fastDeepEqual(cmpProps, cmpNextProps);

    }

    public render() {

        // TODO: going to move tis to a title cell but the context menu needs
        // to be reworked as it has a pointer directly to the cell.

        return (<div>
            <div style={{lineHeight: '1em'}}>

                <Input checked={this.props.checked}
                       style={{
                           marginLeft: 'auto',
                           marginRight: 'auto',
                           margin: 'auto',
                           position: 'relative',
                           top: '2px',
                           width: '16px',
                           height: '16px',
                       }}
                       className="m-auto"
                       onChange={NULL_FUNCTION}
                       onClick={(event) => this.props.onClick(this.props.viewIndex, event.nativeEvent)}
                       type="checkbox"/>

                {/*<i className="far fa-square"></i>*/}

            </div>
        </div>);

    }

}

interface IProps {
    readonly checked: boolean;
    readonly viewIndex: number;
    readonly onClick: (viewIndex: number, event: MouseEvent) => void;

}

interface IState {
}
