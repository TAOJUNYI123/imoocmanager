import React from 'react';
import { Card, Table,Badge, Modal, message } from 'antd';
// 凡是从npm下载的插件，不会用，就去npmjs官网搜索此插件
import axios from './../../axios/index';
import Utils from './../../utils/utils';
export default class HighTable extends React.Component {
    state = {
        dataSource: [],
    };
    params = {
        page: 1
    }
    componentDidMount() {
        this.request();
    }
    request = () => {
        let that = this;
        axios.ajax({
            url: '/table/high/list',
            data: {
                params: {
                    page: this.params.page
                },
                // isShowLoading:false
            }
        }).then((res) => {
            if (res.code === 0) {
                res.result.list.map((item, index) => {
                    item.key = index;
                })
                this.setState({
                    dataSource: res.result.list,
                    pagination: Utils.pagination(res, (current) => {
                        that.params.page = current;
                        that.request()
                    })
                })
            }
        })
    }
    handleChange = (pagination, filters, sorter)=>{
        console.log(pagination);
        console.log(filters);
        console.log(sorter);
        this.setState({
            // 升序和降序
            sortOrder:sorter.order
        })
    }
    // 删除操作
    handleDelete = (row)=>{
        let id = row.id;
        Modal.confirm({
            title:'确认',
            content:'您确定要删除此数据吗？',
            onOk:()=>{
                message.success('删除成功！')
                this.request()
            }
        })
    }
    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render: (text, row, index) => {
                    return text === 1 ? '男' : '女';
                },
                // render(sex){
                //   return sex === 1 ? '男' : '女'
                // }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 80,
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '才子一个',
                        '3': 'FE',
                        '4': '风华浪子',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '美食',
                        '4': '书法',
                        '5': '旅游'
                    }
                    return config[interest];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 120
            },
            {
                title: '早起时间',
                dataIndex: 'time',
                width: 80
            },
        ];
        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
                // 固定在左侧
                fixed:'left'
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80,
                fixed:'left'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render: (text, row, index) => {
                    return text === 1 ? '男' : '女';
                },
                // render(sex){
                //   return sex === 1 ? '男' : '女'
                // }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 80,
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '才子一个',
                        '3': 'FE',
                        '4': '风华浪子',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '美食',
                        '4': '书法',
                        '5': '旅游'
                    }
                    return config[interest];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 80
            },
            {
                title: '生日',
                dataIndex: 'birthday2',
                width: 80
            },
            {
                title: '生日',
                dataIndex: 'birthday3',
                width: 80
            },
            {
                title: '生日',
                dataIndex: 'birthday4',
                width: 80
            },
            {
                title: '生日',
                dataIndex: 'birthday5',
                width: 80
            },
            {
                title: '生日',
                dataIndex: 'birthday6',
                width: 80
            },
            {
                title: '生日',
                dataIndex: 'birthday7',
                width: 80
            },
            {
                title: '生日',
                dataIndex: 'birthday8',
                width: 80
            },
            {
                title: '生日',
                dataIndex: 'birthday9',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 120,
                fixed:'right'
            },
            {
                title: '早起时间',
                dataIndex: 'time',
                width: 80,
                // 固定在右侧
                fixed:'right'
            },
        ];
        const columns3 = [
            {
                title: 'id',
                key:'id',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                key:'userName',
                dataIndex: 'userName',
            },
            {
                title: '性别',
                key:'sex',
                dataIndex: 'sex',
                render: (text, row, index) => {
                    return text === 1 ? '男' : '女';
                },
                // render(sex){
                //   return sex === 1 ? '男' : '女'
                // }
            },
            {
                title:'年龄',
                key:'age',
                dataIndex:'age',
                sorter: (a, b) => a.age - b.age,
                sortOrder: this.state.sortOrder,
            },
            {
                title: '状态',
                key:'state',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '才子一个',
                        '3': 'FE',
                        '4': '风华浪子',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key:'interest',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '美食',
                        '4': '书法',
                        '5': '旅游'
                    }
                    return config[interest];
                }
            },
            {
                title: '生日',
                key:'birthday',
                dataIndex: 'birthday',
            },
            {
                title: '地址',
                key:'address',
                dataIndex: 'address',
            },
            {
                title: '早起时间',
                key:'time',
                dataIndex: 'time',
            },
        ];
        const columns4 = [
            {
                title: 'id',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                dataIndex: 'userName',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render: (text, row, index) => {
                    return text === 1 ? '男' : '女';
                },
                // render(sex){
                //   return sex === 1 ? '男' : '女'
                // }
            },
            {
                title:'年龄',
                dataIndex:'age',
                sorter: (a, b) => a.age - b.age,
                sortOrder: this.state.sortOrder,
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '才子一个',
                        '3': 'FE',
                        '4': '风华浪子',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': <Badge status='success' text='游泳'/>,
                        '2': <Badge status='error' text='打篮球'/>,
                        '3': <Badge status='default' text='美食'/>,
                        '4': <Badge status='processing' text='旅游'/>,
                        '5': <Badge status='warning' text='学习'/>
                    }
                    return config[interest];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday',
            },
            {
                title: '地址',
                dataIndex: 'address',
            },
            {
                title: '操作',
                render: (text, row, index) => {
                    return <a onClick={(row)=>{this.handleDelete(row)}}>删除</a>;
                },
            },
        ];
        return (
            <div>
                <Card title="头部固定">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false}
                        scroll={{ y: 240 }}
                    />
                </Card>
                <Card title="左侧固定" style={{ margin: '10px 0' }}>
                    <Table
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false}
                        // x为每一列的宽度总和多一点
                        scroll={{x:1320}}
                    />
                </Card>
                <Card title="表格排序" style={{ margin: '10px 0' }}>
                    <Table
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作按钮" style={{ margin: '10px 0' }}>
                    <Table
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}