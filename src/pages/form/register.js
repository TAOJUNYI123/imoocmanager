import React from 'react';
import { Card, Form, Input, Upload, InputNumber, Button, Icon, Select, Checkbox, Switch, Radio, DatePicker, TimePicker, message } from 'antd';
import moment from 'moment';
import RadioGroup from 'antd/lib/radio/group';
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

class FormRigiter extends React.Component {
    state = {
        loading: false,
    };
    // ---上传---
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    // ---注册按钮---
    handleSubmit = e => {
        // let userInfo = this.props.form.getFieldsValue();
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success('注册成功！');
            console.log('Received values of form: ', values);
        }
        });
}
render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 4 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
        },
    };
    const offsetLayout = {
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14, offset: 4 },
        },
    };
    return (
        <div>
            <Card title="注册表单">
                <Form layout="horizontal" {...formItemLayout}>
                    <FormItem label="用户名">
                        {
                            getFieldDecorator('userName', {
                                // initialValue: 'Jack',
                                rules: [
                                    {
                                        required: true,
                                        message: '用户名不能为空!'
                                    }
                                ]
                            })(
                                <Input
                                    placeholder="请输入用户名"
                                />
                            )
                        }
                    </FormItem>
                    <FormItem label="密码">
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
                                />
                            )
                        }
                    </FormItem>
                    <FormItem label="性别">
                        {
                            getFieldDecorator('sex', {
                                initialValue: '1',
                            })(
                                <RadioGroup>
                                    <Radio value="1">男</Radio>
                                    <Radio value="2">女</Radio>
                                </RadioGroup>
                            )
                        }
                    </FormItem>
                    <FormItem label="年龄">
                        {
                            getFieldDecorator('age', {
                                initialValue: 18,
                            })(
                                <InputNumber />
                            )
                        }
                    </FormItem>
                    <FormItem label="当前状态">
                        {
                            getFieldDecorator('state', {
                                initialValue: 'FE',
                            })(
                                <Select>
                                    <Option value="1">咸鱼一条</Option>
                                    <Option value="2">FE</Option>
                                    <Option value="3">上班族</Option>
                                    <Option value="4">上学ing</Option>
                                    <Option value="5">旅游</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem label="爱好">
                        {
                            getFieldDecorator('interest', {
                                initialValue: ['2', '5'],
                            })(
                                <Select mode="multiple">
                                    <Option value="1">学习</Option>
                                    <Option value="2">游泳</Option>
                                    <Option value="3">瑜伽</Option>
                                    <Option value="4">画画</Option>
                                    <Option value="5">美食</Option>
                                    <Option value="6">自拍</Option>
                                    <Option value="7">旅游</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem label="婚姻状态">
                        {
                            getFieldDecorator('isMarried', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Switch />
                            )
                        }
                    </FormItem>
                    <FormItem label="生日">
                        {
                            getFieldDecorator('birthday', {
                                initialValue: moment('2015-01-01'),
                            })(
                                <DatePicker />
                            )
                        }
                    </FormItem>
                    <FormItem label="联系地址">
                        {
                            getFieldDecorator('address', {
                                initialValue: '',
                            })(
                                <TextArea
                                    autosize={{ minRows: 2, maxRows: 6 }}
                                />
                            )
                        }
                    </FormItem>
                    <FormItem label="早起时间">
                        {
                            getFieldDecorator('time', {
                                // 注意：默认值为moment类型
                                initialValue: moment(),
                            })(
                                <TimePicker />
                            )
                        }
                    </FormItem>
                    <FormItem label="头像">
                        {
                            getFieldDecorator('userImg', {
                            })(
                                <Upload
                                    listType="picture-card"
                                    showUploadList={false}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    onChange={this.handleChange}
                                >
                                    {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> :
                                        <div>
                                            <Icon type={this.state.loading ? 'loading' : 'plus'} />
                                            <div className="ant-upload-text">Upload</div>
                                        </div>
                                    }
                                </Upload>
                            )
                        }
                    </FormItem>
                    <FormItem  {...offsetLayout}>
                        {
                            getFieldDecorator('agree', {
                            })(
                                <Checkbox>
                                    我已阅读过
                                        <a href="#">慕课协议</a>
                                </Checkbox>
                            )
                        }
                    </FormItem>
                    <FormItem  {...offsetLayout}>
                        <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                    </FormItem>
                </Form>
            </Card>
        </div>
    )
}
}
export default Form.create()(FormRigiter);
