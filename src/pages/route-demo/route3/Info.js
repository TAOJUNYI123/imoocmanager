import React from 'react';
export default class Info extends React.Component{
    render(){
        return(
            <div>
                this is Info page，测试动态路由功能.
                动态路由的值是：{this.props.match.params.value}
            </div>
        )
    }
}