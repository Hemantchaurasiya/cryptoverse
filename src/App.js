import {Switch,Link,Route,BrowserRouter} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
import {Navbar,HomePage,News,Cryptocurrencies,Exchanges,CryptoDetails} from "./components";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>

      <div className="main">
            <Layout>
              <div className="routes">
                <Switch>

                  <Route exact path="/">
                    <HomePage/>
                  </Route>

                  <Route exact path="/cryptocurrencies">
                    <Cryptocurrencies/>
                  </Route>

                  <Route exact path="/crypto/:coinId">
                    <CryptoDetails/>
                  </Route>

                  <Route exact path="/exchanges">
                    <Exchanges/>
                  </Route>

                  <Route exact path="/news">
                    <News/>
                  </Route>

                </Switch>
              </div>
            </Layout>
            <div className="footer">
              <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
                <Link to="/">
                  Cryptoverse Inc.
                </Link> <br />
                All Rights Reserved.
              </Typography.Title>
              <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
              </Space>
              <p style={{color:"blue", margin:"3px"}}>by: Hemant Chaurasiya</p>
            </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
