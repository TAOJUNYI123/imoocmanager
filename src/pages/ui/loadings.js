import React from 'react';
import './ui.less'
import { Card, Spin, Icon, Alert } from 'antd';
export default class Loadings extends React.Component {
    render() {
        const icon = <Icon type="loading" style={{ fontSize: 24 }} />
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large" />
                    <Spin indicator={icon} />
                </Card>
                <Card title="内容遮罩">
                    <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="warning"
                    />
                    <Spin tip="Loading...">
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
                    <Spin indicator={icon}>
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="success"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}

