import {TagsDB} from "./TagsDB";
import {assertJSON} from "../../../web/js/test/Assertions";
import {Tag} from "../../../web/js/tags/Tag";

describe('TagsDB', function() {

    it("Basic functionality", function() {

        const createTag = (name: string): Tag => {
            return {id: name, label: name};
        };

        const tagsDB = new TagsDB();

        assertJSON(tagsDB.tags(), []);

        tagsDB.register('0x01', createTag('foo'));

        assertJSON(tagsDB.tags(), [
            {
                "id": "foo",
                "label": "foo"
            }
        ]);

        tagsDB.register('0x02', createTag('foo'), createTag('bar'));

        assertJSON(tagsDB.tags(), [
            {
                "id": "foo",
                "label": "foo"
            },
            {
                "id": "bar",
                "label": "bar"
            }
        ]);

        tagsDB.unregister('0x01', createTag('foo'));

        assertJSON(tagsDB.tags(), [
            {
                "id": "foo",
                "label": "foo"
            },
            {
                "id": "bar",
                "label": "bar"
            }
        ]);

        tagsDB.unregister('0x02', createTag('foo'));


        assertJSON(tagsDB.tags(), [
            {
                "id": "bar",
                "label": "bar"
            }
        ]);

    });

});
