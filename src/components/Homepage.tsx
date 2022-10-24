import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom';



const Homepage = () => {
const { Title } = Typography;
  return (
    <>
    <Title level={2} className="heading" style={{marginLeft: "180px"}}>
        Global Crypto Stats
    </Title>
    <Row>
        <Col span={12}><Statistic title="Total Cryptocurrency" value="5" /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrency" value="5" /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrency" value="5" /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrency" value="5" /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrency" value="5" /></Col>
    </Row>
    </>
  )
}

export default Homepage
