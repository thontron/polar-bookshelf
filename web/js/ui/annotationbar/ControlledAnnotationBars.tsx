import {AnnotationBar, AnnotationBarCallbacks, AnnotationBarTriggerEvent} from './AnnotationBar';
import * as React from 'react';
import {ControlledPopups} from '../popup/ControlledPopups';
import {ActiveSelectionEvent, ActiveSelections} from '../popup/ActiveSelections';
import {IEventDispatcher, SimpleReactor} from '../../reactor/SimpleReactor';
import {ControlledPopupProps} from '../popup/ControlledPopup';
import {ControlledAnnotationBar} from './ControlledAnnotationBar';
import {Elements} from '../../util/Elements';
import {Logger} from '../../logger/Logger';
import * as ReactDOM from 'react-dom';
import DocRepoApp from '../../../../apps/repository/js/doc_repo/DocRepoApp';
import {Point} from '../../Point';
import {Optional} from '../../util/ts/Optional';
import {Points} from '../../Points';
import {DocFormatFactory} from '../../docformat/DocFormatFactory';
import {HighlightCreatedEvent} from '../../comments/react/HighlightCreatedEvent';
import {MouseDirection} from '../popup/Popup';

const log = Logger.create();

export class ControlledAnnotationBars {

    public static create(controlledPopupProps: ControlledPopupProps,
                         annotationBarCallbacks: AnnotationBarCallbacks) {

        this.registerEventListener(annotationBarCallbacks);

    }

    private static registerEventListener(annotationBarCallbacks: AnnotationBarCallbacks) {

        const target = document.getElementById("viewerContainer")!;

        let annotationBar: HTMLElement | undefined;

        ActiveSelections.addEventListener(activeSelectionEvent => {

            const pageElement = Elements.untilRoot(activeSelectionEvent.element, ".page");

            if (! pageElement) {
                log.warn("Not found within .page element");
                return;
            }

            const pageNum = parseInt(pageElement.getAttribute("data-page-number"), 10);

            switch (activeSelectionEvent.type) {

                case 'created':

                    annotationBar = this.createAnnotationBar(pageNum,
                                                             pageElement,
                                                             annotationBarCallbacks,
                                                             activeSelectionEvent);

                    break;

                case 'destroyed':

                    if (annotationBar) {
                        this.destroyAnnotationBar(annotationBar);
                    }

                    break;

            }

            if (activeSelectionEvent.type === 'destroyed') {
                // only created supported for now.
                return;
            }

        }, target);

    }

    private static destroyAnnotationBar(annotationBar: HTMLElement) {

        if (annotationBar && annotationBar.parentElement) {
            annotationBar.parentElement!.removeChild(annotationBar);
        }

    }

    private static computePosition(pageElement: HTMLElement,
                                   point: Point,
                                   offset: Point | undefined,
                                   mouseDirection: MouseDirection): Point {

        const docFormat = DocFormatFactory.getInstance();

        let origin: Point =
            Optional.of(pageElement.getBoundingClientRect())
                .map(rect => {
                    return {'x': rect.left, 'y': rect.top};
               })
                .get();

        // one off for the html viewer... I hope we can unify these one day.
        if (docFormat.name === 'html') {
            origin = {x: 0, y: 0};
        }

        const relativePoint: Point =
            Points.relativeTo(origin, point);

        offset = offset || {x: 0, y: 0};

        const x = relativePoint.x + offset.x;
        const y = relativePoint.y + offset.y;

        return { x, y };

    }

    private static createAnnotationBar(pageNum: number,
                                       pageElement: HTMLElement,
                                       annotationBarCallbacks: AnnotationBarCallbacks,
                                       activeSelectionEvent: ActiveSelectionEvent) {

        const point: Point = {
            x: activeSelectionEvent.boundingClientRect.left + (activeSelectionEvent.boundingClientRect.width / 2),
            y: activeSelectionEvent.boundingClientRect.top
        };

        const offset: Point = {
            x: -75,
            y: -50
        };

        // TODO use the mouseDirection on the activeSelectionEvent and place
        // with top/bottom

        // TODO: we have to compute the position above or below based on the
        // direction of the mouse movement.

        let position = this.computePosition(pageElement, point, offset, activeSelectionEvent.mouseDirection);

        console.log("FIXME: activeSelectionEvent.boundingClientRect: ", JSON.stringify(activeSelectionEvent.boundingClientRect, null, "  "));
        console.log("FIXME: point: ", JSON.stringify(point, null, "  "));
        console.log("FIXME: position before: ", JSON.stringify(position, null, "  "));


        // FIXME: in theory we can j ust adjust by the height to position it at
        // the botom but the height seems wrong..
        position = {...position, y: position.y + activeSelectionEvent.boundingClientRect.height};

        console.log("FIXME: position after: ", JSON.stringify(position, null, "  "));

        const annotationBar = document.createElement('div');

        annotationBar.addEventListener('mouseup', (event) => event.stopPropagation());
        annotationBar.addEventListener('mousedown', (event) => event.stopPropagation());

        annotationBar.style.position = 'absolute';
        annotationBar.style.zIndex = '10000';

        annotationBar.style.top = `${position.y}px`;
        annotationBar.style.left = `${position.x}px`;

        pageElement.insertBefore(annotationBar, pageElement.firstChild);

        const onHighlightedCallback = (highlightCreatedEvent: HighlightCreatedEvent) => {
            // TODO: there's a delay here and it might be nice to have a progress
            // bar until it completes.
            annotationBarCallbacks.onHighlighted(highlightCreatedEvent);
            this.destroyAnnotationBar(annotationBar);
        };

        ReactDOM.render(
            <ControlledAnnotationBar activeSelection={activeSelectionEvent}
                                     onHighlighted={onHighlightedCallback}
                                     type='range'
                                     pageNum={pageNum}/>,

            annotationBar

        );

        return annotationBar;

    }

}



