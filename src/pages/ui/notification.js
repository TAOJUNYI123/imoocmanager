import React from 'react';
import './ui.less'
import { Card, Button, notification  } from 'antd';
export default class Notification extends React.Component {
    openNotification = (type,potision) => {
        if(potision){
            notification.config({
                placement:potision
            })
        }
        notification[type]({
            message: 'Notification Title',
            description:
                'This is the content o'
        })
    }
    render() {
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification("success")}>Successs</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warning")}>warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification("info")}>info</Button>
                    <Button type="primary" onClick={()=>this.openNotification("error")}>error</Button>
                </Card>
                <Card title="弹出位置" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification("success","topLeft")}>Successs</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warning","topRight")}>warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification("info","bottomLeft")}>info</Button>
                    <Button type="primary" onClick={()=>this.openNotification("error","bottomRight")}>error</Button>
                </Card>
            </div>
        )
    }
}