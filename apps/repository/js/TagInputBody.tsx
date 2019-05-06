import * as React from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import {Tag} from '../../../web/js/tags/Tag';
import {TagOption} from './TagOption';
import {TagOptions} from './TagOptions';
import {Tags} from '../../../web/js/tags/Tags';
import {Logger} from '../../../web/js/logger/Logger';
import {IStyleMap} from '../../../web/js/react/IStyleMap';
import {RelatedTags} from '../../../web/js/tags/related/RelatedTags';
import Button from 'reactstrap/lib/Button';
import {Toaster} from '../../../web/js/ui/toaster/Toaster';

const log = Logger.create();

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

export class TagInputBody extends React.Component<IProps, IState> {

    private select: CreatableSelect<TagOption> | null = null;

    constructor(props: IProps, context: any) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            open: false,
            pendingTags: []
        };

    }
    public render() {

        const availableTagOptions = TagOptions.fromTags(this.props.availableTags);

        const pendingTags = TagOptions.fromTags(this.state.pendingTags);

        const computeRelatedTags = () => {

            const input = [...this.state.pendingTags]
                            .map(current => current.label)
                            ;

            return this.props.relatedTags.compute(input).map(current => current.tag);

        };

        const relatedTags: string[] = computeRelatedTags();

        const RelatedTagsItems = () => {
            return <span>
                {relatedTags.map(item =>
                     <Button className="mr-1"
                             key={item}
                             style={Styles.relatedTag}
                             color="light"
                             size="sm"
                             onClick={() => this.addRelatedTag(item)}>{item}</Button>)}
            </span>;

        };


        const RelatedTagsWidget = () => {

            if (relatedTags.length === 0) {
                return <div></div>;
            }

            return <div style={Styles.relatedTags}>
                <div className="mr-1" style={Styles.relatedTagsLabel}>
                    <strong>Related tags: </strong>
                </div>
                <RelatedTagsItems/>
            </div>;

        };

        return (

            <div>

                <div className="pt-1 pb-1">
                    <strong>Assign tags to document:</strong>
                </div>

                <CreatableSelect
                    isMulti
                    isClearable
                    autoFocus
                    onKeyDown={event => this.onKeyDown(event)}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(selectedOptions) => this.handleChange(selectedOptions as TagOption[])}
                    value={pendingTags}
                    defaultValue={pendingTags}
                    placeholder="Create or select tags ..."
                    options={availableTagOptions}
                    ref={ref => this.select = ref}>

                </CreatableSelect>

                <div>

                    <RelatedTagsWidget/>

                </div>

                <div className="mt-1">

                    <div style={{display: 'flex'}}>

                        <div className="ml-auto"/>

                        <Button color="secondary"
                                size="sm"
                                onClick={() => this.props.onCancel()}>
                            Cancel
                        </Button>

                        <div className="ml-1"/>

                        <Button color="primary"
                                size="sm"
                                onClick={() => this.props.onDone()}>
                            Done
                        </Button>
                    </div>
                </div>

            </div>

        );

    }

    private addRelatedTag(label: string) {

        const tag: Tag = {
            id: label,
            label
        };

        const tags = [tag, ...this.state.pendingTags];

        this.handleChange(TagOptions.fromTags(tags));

        // need or else the button has focus now...
        this.select!.focus();

    }

    private onKeyDown(event: React.KeyboardEvent<HTMLElement>) {

        if (event.key === "Escape") {
            this.props.onCancel();
        }

        if (event.getModifierState("Control") && event.key === "Enter") {
            this.props.onDone();
        }

    }

    private handleChange(selectedOptions: TagOption[]) {

        const tags = TagOptions.toTags(selectedOptions);

        const validTags = Tags.findValidTags(...tags);
        const invalidTags = Tags.findInvalidTags(...tags);

        if (invalidTags.length !== 0) {

            const invalidTagsStr =
                invalidTags.map(current => current.label)
                    .join(", ");

            Toaster.warning("Some tags were excluded - spaces and other control characters not supported: " + invalidTagsStr,
                            "Invalid tags");

            log.warn("Some tags were invalid", invalidTags);

        }

        this.setState({...this.state, pendingTags: validTags});

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

    readonly onCancel: () => void;

    readonly onDone: () => void;

}

interface IState {

    readonly open: boolean;

    /**
     * The tags that are actively being selected but not yet applied.
     */
    readonly pendingTags: Tag[];

}

