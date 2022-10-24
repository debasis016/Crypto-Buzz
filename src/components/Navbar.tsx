import React from 'react'
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import icon from '../images/cryptocurrency.png';
import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons';

const navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon}/>
        <Typography.Title level={2} className="logo">
            <Link to="/"></Link>
        </Typography.Title>
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
            </Menu.Item>
            
        </Menu>
        {/* <Button className="menu-control-container">

        
        </Button> */}
      </div>
    </div>
  )
}

export default navbar
