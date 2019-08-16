import React from 'react';
import { Card, Row, Col } from 'antd';
import './ui.less'
const { Meta } = Card;
export default class Gallery extends React.Component {
    render() {
        const imgs = [
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png'],
            ['16.png', '17.png', '18.png', '19.png', '20.png'],
            ['21.png', '22.png', '23.png', '24.png', '25.png']
        ]
        // map不会改变原数组，而是返回一个新数组
        const imgLsit = imgs.map((list) => list.map((item) =>
            <Card
                style={{ marginBottom: 10 }}
                cover={<img alt="example" src={'/gallery/' + item} />}
            >
                <Meta title="Europe Street beat" description="我在学习antd" />
            </Card>
        ))
        return (
            <div className="card-wrap">
                {/* gutter设置间隙 */}
                <Row gutter={10}>
                    <Col md={5}>
                        {imgLsit[0]}
                    </Col>
                    <Col md={5}>
                        {imgLsit[1]}
                    </Col>
                    <Col md={5}>
                        {imgLsit[2]}
                    </Col>
                    <Col md={5}>
                        {imgLsit[3]}
                    </Col>
                    <Col md={4}>
                        {imgLsit[4]}
                    </Col>
                </Row>
            </div>
        )
    }

}