import React from 'react';
import { Card, Button } from 'antd';
import './ui.less'

export default class Buttons extends React.Component {
    state = {
        loading: true,
      };
    closeLoading = ()=>{
        this.setState({
            loading:false
        })
    }

    render() {
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button type="link">Link</Button>
                    <Button disabled>disabled</Button>
                </Card>
                <Card title="图形按钮">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button icon="search">搜索</Button>
                    <Button icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.closeLoading}>关闭</Button>
                </Card>
            </div>
        )
    }
}