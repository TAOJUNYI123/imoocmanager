import React from 'react';
import { Card, Button, Modal } from 'antd';
import './ui.less'

export default class Modals extends React.Component {
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    };
    
    handleOpen = (type)=>{
        this.setState({
            [type]:true
        })
    }
    handleCancel = ()=>{
        this.setState({
            showModal1:false
        })
    }
    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    {/* 传参需要使用箭头函数，不传参可以不用 */}
                    <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>Open</Button>
                    <Modal
                        title="react"
                        visible={this.state.showModal1}
                        onCancel={this.handleCancel}
                    >
                        欢迎学习antD啦啦啦啦啦啦啦啦啦啦啦啦啦。
                    </Modal>
                </Card>
            </div>
        )
    }
}