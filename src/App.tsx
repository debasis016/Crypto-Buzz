import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Navbar } from './components';
import { Layout, Space, Typography } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="navbar">
        <Navbar />
        {/* <h1>CryptoCurrency</h1> */}
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
            CryptoBuzz <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exhanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
      {/* <h1>CryptoCurrency</h1> */}
    </div>
  );
}

export default App;
