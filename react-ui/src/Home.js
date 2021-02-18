import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ArticleDiv from './ArticleDiv';
import PublicationDiv from './PublicationDiv';
import OtherDiv from './OtherDiv';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            dataFromJson: {},
            poetryArticles: [],
            flashArticles: [],
            promptArticles:[],
            publicationArticles: []
        };
    }

    componentDidMount() {
        fetch('/getArticles')
            .then(response => response.json())
            .then((responseJson)=> {
                // console.log('responseJson:' + JSON.stringify(responseJson, null, 2));

                let poetryArt = [], flashArt = [], promptArt = [], publicationArt = [];

                Object.keys(responseJson).map(i => {
                    if(responseJson[i].type === 'poetry') {
                        poetryArt.push(responseJson[i]);
                    } else if(responseJson[i].type === 'flash') {
                        flashArt.push(responseJson[i]);
                    } else if(responseJson[i].type === 'publication') {
                        publicationArt.push(responseJson[i]);
                    } else {
                        promptArt.push(responseJson[i]);
                    }
                });

                this.setState({
                    dataFromJson: responseJson,
                    poetryArticles: poetryArt,
                    flashArticles: flashArt,
                    publicationArticles: publicationArt,
                    promptArticles: promptArt
                });

            })
            .catch(error=>console.log(error));
    }
    render() {
        return (
            <div className="container">
                <div>
                    <p className="nameStyle">URMILLA KANNUSWAMY</p>
                    <p className="textStyle">
                        Software Engineer who writes flash fiction and poems on online platforms like Medium and Reddit
                        <br></br>
                    </p>
                    <Tabs>
                        <TabList id="bulletStyle">
                            <Tab className="tabStyle tabStyle1">
                                <Button variant="outline-secondary">Flash Fiction</Button>
                            </Tab>
                            <Tab className="tabStyle tabStyle2">
                                <Button variant="outline-secondary">Poetry</Button>
                            </Tab>
                            <Tab className="tabStyle tabStyle3">
                                <Button variant="outline-secondary">Publication</Button>
                            </Tab>
                            <Tab className="tabStyle tabStyle4">
                                <Button variant="outline-secondary">Other Fiction</Button>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <div className='articleContainer'>
                                <ArticleDiv props={this.state.flashArticles} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='articleContainer'>
                                <ArticleDiv props={this.state.poetryArticles} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='articleContainer'>
                                <PublicationDiv props={this.state.publicationArticles} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <p className="starStyle">* Clicking on the cards will redirect the page to www.reddit.com</p>
                            <div className='articleContainer'>
                                <OtherDiv props={this.state.promptArticles} />
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>

            </div>
        );
    }
}

export default Home;