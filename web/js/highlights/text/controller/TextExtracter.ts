import {TextHighlightRow} from './TextHighlightRow';
import {TextRect} from '../../../metadata/TextRect';
import {Preconditions} from '../../../Preconditions';

/**
 * Takes TextHighlightRows and then builds adjacent test runs from the data.
 */
export class TextExtracter {

    public static toTextSelections(textHighlightRows: TextHighlightRow[]) {

        const result: TextRect[] = [

        ];

        textHighlightRows.forEach(textHighlightRow => {

            Preconditions.assertPresent(textHighlightRow.rectElements, "rectElements");

            textHighlightRow.rectElements.forEach(rectElement => {

                const textSelection = new TextRect({
                    rect: rectElement.rect,
                    text: rectElement.element.textContent
                });

                result.push(textSelection);

            });

        });

        return result;

    }

}
