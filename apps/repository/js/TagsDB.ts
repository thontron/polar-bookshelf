import {Tag} from '../../../web/js/tags/Tag';
import {DocID} from "../../../web/js/datastore/Datastore";

/**
 * A simple in-memory database of tags which can be built when we load the .json
 * data from disk.
 */
export class TagsDB {

    // TODO: actually we need more of a 'set' interface here because we really have
    // more of a set vs delete and a document can be updated with only its tags
    // changed.  We also need to look at the RelatedTags and update this accordingly
    // too as both TagsDB and RelatedTags could have the same index structure.

    /**
     * Stores the actual data we're indexing.  The key is the lowercase
     * representation of a tag
     */
    private readonly index: {[id: string]: TagRef} = {};

    public register(id: DocID, ...tags: Tag[]): void {

        for (const tag of tags) {

            if (! this.index[tag.id]) {
                this.index[tag.id] = {
                    tag,
                    references: new Set()
                };
            }

            this.index[tag.id].references.add(id);

        }

    }

    public unregister(id: DocID, ...tags: Tag[]): void {

        for (const tag of tags) {

            const tagRef = this.index[tag.id];

            if (tagRef) {

                tagRef.references.delete(id);

                if (tagRef.references.size === 0) {
                    delete this.index[tag.id];
                }

            }

        }

    }

    /**
     * Get all the labels of all the tags we've indexed so far.
     */
    public tags(): Tag[] {
        return Object.values(this.index).map(current => current.tag);
    }

}

export interface TagRef {

    readonly tag: Tag;

    readonly references: Set<DocID>;

}