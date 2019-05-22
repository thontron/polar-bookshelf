import {TabNav} from '../../js/ui/tabs/TabNav';
import {NULL_FUNCTION} from '../../js/util/Functions';
import * as React from 'react';

export class FakeTabbedBrowser extends React.Component<IProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);




    }

    public render() {

        return (

            // FIXME: if there are too many tabs they are displayed on the next
            // line.

            //
            // Features I need..
            //
            //  - dark grey background
            //  - close tabs with x button
            //  - context menu
            //  - key bindings
            //  - everything should be a tab.. even the main repository app this
            //    things are super fast and the main 'browser' is just a simple
            //    wrapper around webview

            <div >

            <TabNav
                    addTabBinder={NULL_FUNCTION}
                    initialTabs={[
                        {
                            title: "Repository",
                            required: true,
                            content: <div>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                            </div>
                        },
                        {
                            title: "How to be Successful",
                            content: "http://cnn.com"
                        },
                        {
                            title: "How to be Successful",
                            content: "http://msnbc.com"
                        },
                        {
                            title: "How to be Successful",
                            content: "http://news.ycombinator.com"
                        },
                        {
                            title: "How to be Successful",
                            content: "http://reddit.com"
                        },
                        {
                            title: "How to be Successful",
                            content: "http://reddit.com"
                        },
                        {
                            title: "How to be Successful",
                            content: "http://reddit.com"
                        },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },
                        // {
                        //     title: "How to be Successful",
                        //     content: "http://reddit.com"
                        // },

                    ]}/>
            </div>
        );

    }

}


interface IProps {
}

interface IState {
}



