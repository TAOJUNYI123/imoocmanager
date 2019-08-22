import React from 'react';
import { Card, Table } from 'antd';
// 凡是从npm下载的插件，不会用，就去npmjs官网搜索此插件
import axios from './../../axios/index';
export default class BasicTable extends React.Component {
  state = {
    dataSource: [],
    dataSource2: []
  };
  componentDidMount() {
    // 都需要一个唯一的key
    const dataSource = [
      {
        id: 0,
        userName: 'John Brown',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市朝阳区',
        time: '09:00'
      },
      {
        id: 1,
        userName: 'Kiki',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市朝阳区',
        time: '09:00'
      },
      {
        id: 2,
        userName: 'Lily',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市朝阳区',
        time: '09:00'
      },
    ];
    dataSource.map((item,index)=>{
      item.key = index;
    })
    this.setState({
      dataSource
    })
    this.request();
  }
  // 动态获取mock数据
  request = () => {
    axios.ajax({
      url:'/table/list',
      data:{
        params:{
          page:1
        },
        // isShowLoading:false
      }
    }).then((res)=>{
      if(res.code===0){
        res.result.map((item,index)=>{
          item.key = index;
        })
        this.setState({
          dataSource2:res.result
        })
      }
    })
  }
  // 点击每一行
  onRowClick = (record,index)=>{
    let selectKey = [index];
    this.setState({
      selectedRowKeys:selectKey,
      selectedItem:record
    },()=>{
      console.log(this.state.selectedRowKeys)
      console.log(this.state.selectedItem)
    })
  }
  render() {
    const columns = [
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
        render(sex){
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        render(state){
          let config = {
            '1':'咸鱼一条',
            '2':'才子一个',
            '3':'FE',
            '4':'风华浪子',
            '5':'创业者'
          }
          return config[state];
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render(interest){
          let config = {
            '1':'游泳',
            '2':'打篮球',
            '3':'美食',
            '4':'书法',
            '5':'旅游'
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
        title: '早起时间',
        dataIndex: 'time',
      },
    ];
    const {selectedRowKeys} = this.state
    const rowSelection = {
      type:'radio',
      selectedRowKeys
    }

    return (
      <div>
        <Card title="基础表格">
          <Table
            columns={columns}
            dataSource={this.state.dataSource}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="动态数据渲染表格-Mock" style={{ margin: '10px 0' }}>
          <Table
            columns={columns}
            dataSource={this.state.dataSource2}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="Mock-单选" style={{ margin: '10px 0' }}>
          <Table
            bordered
            rowSelection={rowSelection}
            onRow={(record,index) => {
              return {
                onClick: () => {
                  this.onRowClick(record,index)
                }, // 点击行
              };
            }}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
      </div>
    )
  }
}