import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from 'antd/lib/layout'
import Routes from './routes'
import 'antd/dist/antd.css'
import PageNavbar from './page_navbar'
import AppSidebar from './app_sidebar'
import './App.css'

export default class App extends React.Component {
    render() {
        return <BrowserRouter>
            <Layout style={{ minHeight: "100vh" }}>
                <Layout.Header>
                    <Route path="/" component={PageNavbar} />
                </Layout.Header>
                <Layout>
                    <Layout.Sider collapsible width="250" theme="light">
                        <Route path="/" component={AppSidebar} />
                    </Layout.Sider>
                    <Layout.Content style={{ padding: "25px 25px" }}>
                        {Routes}
                    </Layout.Content>
                </Layout>
            </Layout>
        </BrowserRouter>
    }
}