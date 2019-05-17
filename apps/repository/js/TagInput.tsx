import * as React from 'react';
import {Tag} from '../../../web/js/tags/Tag';
import {RelatedTags} from '../../../web/js/tags/related/RelatedTags';
import {IDs} from '../../../web/js/util/IDs';
import {Blackout} from '../../../web/js/ui/blackout/Blackout';
import {NullCollapse} from '../../../web/js/ui/null_collapse/NullCollapse';
import {TagInputPopover} from './TagInputPopover';

export class TagInput extends React.Component<IProps, IState> {

    private readonly id = IDs.create("popover-");

    constructor(props: IProps, context: any) {
        super(props, context);

        this.activate = this.activate.bind(this);
        this.deactivate = this.deactivate.bind(this);

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

            <div className="mt-auto mb-auto">

                <i id={this.id}
                   onClick={() => this.activate()}
                   className="fa fa-tag doc-button doc-button-inactive"/>

                <NullCollapse open={this.state.open}>

                    <TagInputPopover id={this.id} {...this.props}/>

                </NullCollapse>

            </div>

        );

    }

}

export interface IProps {

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

