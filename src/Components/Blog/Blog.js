import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div>
            <div className="first-question">
                <h2>
                    1.What is the Difference between authorization and authentication?
                </h2>
                <p>
                    <h4><strong>Authorization:</strong></h4>
                    <p>
                        <ul>
                            <li>Authorization determines what resources a user can access.</li>
                            <li>Authorization works through settings that are implemented and maintained by the organization.</li>
                            <li>Authorization always takes place after authentication.</li>
                            <li>Authorization isn’t visible to or changeable by the user.</li>
                        </ul>
                        <h4><strong>Authentication:</strong></h4>
                        <ul>
                            <li>Authentication verifies who the user is.</li>
                            <li>Authentication is the first step of a good identity and access management process.</li>
                            <li>Authentication is visible to and partially changeable by the user.</li>
                        </ul>
                    </p>
                </p>
            </div> <br /><br />
            <div className="second-question">
                <h2>
                    2.Why are you using firebase? What other options do you have to implement authentication?
                </h2>
                <p>
                    Use personalization to give each user the best experience. When an individual opens your app, delight them by customizing the initial screen based on their preferences, usage history, location, or language.
                    <h4><strong>The other options is</strong></h4>
                    <p>
                        <ul>
                            <li>Back4App.</li>
                            <li>AWS Amplify.</li>
                            <li>Kuzzle.</li>
                            <li>Couchbase.</li>
                            <li>NativeScript.</li>
                            <li>RxDB.</li>
                        </ul>
                    </p>
                </p>
            </div>
            <div className="third-question">
                <h2>
                    3.What other services does firebase provide other than authentication?
                </h2>
                    <h4><strong>There are many services which Firebase provides, Most useful of them are:</strong></h4>
                    <p>
                        <ul>
                            <li>Cloud Firestore</li>
                            <li>Cloud Functions</li>
                            <li>Authentication</li>
                            <li>Hosting</li>
                            <li>Cloud Storage</li>
                            <li>Google Analytics</li>
                            <li>Predictions</li>
                            <li>Cloud Messaging</li>
                            <li>Dynamic Links</li>
                            <li>Remote Config</li>
                        </ul>
                    </p>
            </div>
        </div>
    );
};

export default Blog;