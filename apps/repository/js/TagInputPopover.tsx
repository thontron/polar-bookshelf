import * as React from 'react';
import {Tag} from '../../../web/js/tags/Tag';
import {IStyleMap} from '../../../web/js/react/IStyleMap';
import {RelatedTags} from '../../../web/js/tags/related/RelatedTags';
import Popover from 'reactstrap/lib/Popover';
import PopoverBody from 'reactstrap/lib/PopoverBody';
import {IDs} from '../../../web/js/util/IDs';
import {NULL_FUNCTION} from '../../../web/js/util/Functions';
import {Blackout} from '../../../web/js/ui/blackout/Blackout';
import {TagInputBody} from './TagInputBody';

const Styles: IStyleMap = {

    popover: {
        width: '500px !important',
        maxWidth: '9999px !important'
    },

    label: {
        fontWeight: 'bold'
    },

    relatedTags: {
        marginTop: '5px',
        display: 'flex',
    },

    relatedTagsLabel: {
        marginTop: 'auto',
        marginBottom: 'auto'
    },

    relatedTag: {
        display: 'inline-block',
        backgroundColor: '#e5e5e5',
        color: 'hsl(0,0%,20%)',
        fontSize: '12px',
        padding: '3px',
        marginTop: 'auto',
        marginBottom: 'auto'
    }

};

export class TagInputPopover extends React.Component<IProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);

        this.activate = this.activate.bind(this);
        this.deactivate = this.deactivate.bind(this);

        this.onCancel = this.onCancel.bind(this);
        this.onDone = this.onDone.bind(this);

        this.state = {
            open: false,
            pendingTags: []
        };

    }

    private activate() {

        const pendingTags = this.props.existingTags || [];

        Blackout.enable();

        this.setState({open: true, pendingTags});

    }

    private deactivate() {
        Blackout.disable();
        this.setState({open: false});
    }

    public render() {

        return (

            <Popover placement="auto"
                     isOpen={this.state.open}
                     target={this.props.id}
                     trigger="legacy"
                     delay={0}
                     toggle={() => this.deactivate()}
                     className="tag-input-popover shadow">

                <PopoverBody style={Styles.popover} className="shadow">

                    <TagInputBody {...this.props}
                                  onDone={() => this.onDone()}
                                  onCancel={() => this.onCancel()}/>

                </PopoverBody>
            </Popover>

        );

    }

    private onCancel() {
        this.setState({...this.state, open: false});
        Blackout.disable();
    }

    private onDone() {

        this.setState({...this.state, open: false});
        Blackout.disable();

        const onChange = this.props.onChange || NULL_FUNCTION;

        // important to always call onChange even if we have no valid
        // tags as this is acceptable and we want to save these to
        // disk.

        onChange(this.state.pendingTags);

    }

}

export interface IProps {

    readonly id: string;

    /**
     * The tags that can be selected.
     */
    readonly availableTags: Tag[];

    /**
     * The existing tags on this item.
     */
    readonly existingTags?: Tag[];

    /**
     * The relatedTags index which is updated as the user selects new tags.
     */
    readonly relatedTags: RelatedTags;

    readonly onChange?: (values: Tag[]) => void;

}

interface IState {

    readonly open: boolean;

    /**
     * The tags that are actively being selected but not yet applied.
     */
    readonly pendingTags: Tag[];

}

