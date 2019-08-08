import React from 'react';
import {Row,Col} from 'antd';
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'
export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sysTime: '',
            weather:'',
            dayPictureUrl:''
        };
    }
    componentWillMount(){
        this.setState({
            userName:"河畔一角"
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        },1000)
        this.getWeather()
    }
    getWeather(){
        // Promise实例生成后，可以用then方法分别指定resolved和rejected状态的回调函数
        // then方法可以接受两个回调函数作为参数，第一个是状态变为resolved时调用的，第二个是
        // 状态变为rejected时调用的，第二个是可选的
        let city = '北京'
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            console.log(res.results[0].weather_data[0])
            if(res.status === 'success'){
                this.setState({
                    weather:res.results[0].weather_data[0].weather,
                    dayPictureUrl:res.results[0].weather_data[0].dayPictureUrl
                })
            }
        })
    }
    render(){
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">
                            <img src={this.state.dayPictureUrl} alt=""/>
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}