import React from 'react';
import './ui.less'
import { Card, message, Tabs, Icon } from 'antd';
const { TabPane } = Tabs;
export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        this.state = {
          
        };
      }
    callback = (key) => {
        message.info("您选择了" + key + "标签页")
    }
    onChange = (activeKey)=>{
        this.setState({
            activeKey 
        })
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
      };
    
    componentWillMount(){
        const panes = [
            {
                title:'Tab 1',
                content:'Tab 1',
                key:'1'
            },
            {
                title:'Tab 2',
                content:'Tab 2',
                key:'2'
            },
            {
                title:'Tab 3',
                content:'Tab 3',
                key:'3'
            },
        ]
        this.setState({
            panes,
            activeKey:panes[0].key
        })
    }
    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    };
    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
    };
    render() {
        return (
            <div>
                <Card title="标签页" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">
                            Tab 1
                        </TabPane>
                        <TabPane tab="Tab 2" disabled key="2">
                            Tab 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Tab 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="带图的页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab={
                            <span>
                                <Icon type="apple" />
                                Tab 1
                            </span>
                        } key="1">
                            Tab 1
                        </TabPane>
                        <TabPane tab={
                            <span>
                                <Icon type="android" />
                                Tab 2
                            </span>
                        } disabled key="2">
                            Tab 2
                        </TabPane>
                        <TabPane tab={
                            <span>
                                <Icon type="delete" />
                                Tab 2
                            </span>
                        } key="3">
                            Tab 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="运用map" className="card-wrap">
                    <Tabs 
                    type="editable-card"
                    onChange={this.onChange}
                    activeKey={this.state.activeKey}
                    onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panel)=>{
                                return(
                                    <TabPane tab={panel.title} key={panel.key}>
                                        {panel.content}
                                    </TabPane>
                                )
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}