import React from 'react';
import { Card, Form, Input, Button, Icon, Checkbox } from 'antd';
const FormItem = Form.Item;
class FormLogin extends React.Component {
    handleSubmit = e => {
        // let userInfo = this.props.form.getFieldsValue();
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{ marginTop: 10 }}>
                    <Form style={{ width: 300 }}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    // initialValue: 'Jack',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空!'
                                        }, {
                                            min: 6,
                                            max: 12,
                                            message: '长度应为6~12位'
                                        }, {
                                            pattern: /^[a-zA-Z0-9]{6,12}$/,
                                            message: '必须以字母或数字开头'
                                        }
                                    ]
                                })(
                                    <Input
                                        placeholder="请输入用户名"
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPwd', {
                                    // initialValue: '123456',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空!'
                                        }
                                    ]
                                })(
                                    <Input
                                        type="password"
                                        placeholder="请输入密码"
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remeber', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:"right"}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button style={{width:'100%'}} type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin);