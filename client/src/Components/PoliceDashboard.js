import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



class PoliceDashboard extends Component{
    render(){
        return(
            <div className="container">
            <Tabs>
                <TabList>
                    <Tab>
                        <div className="input-field">
                            <button className="btn grey darken-3">
                                Content 1
                            </button>
                        </div>
                    </Tab>
                    <Tab>Title 2</Tab>
                </TabList>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
  </Tabs>
            </div>
        )
    }
}

export default PoliceDashboard;