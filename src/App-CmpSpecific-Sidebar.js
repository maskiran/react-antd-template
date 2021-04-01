import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from 'antd/lib/layout'
import Routes from './routes'
import 'antd/dist/antd.css'
import PageNavbar from './page_navbar'
import './App.css'

export default class App extends React.Component {
    render() {
        return <BrowserRouter>
            <Layout style={{ minHeight: "100vh" }}>
                <Layout.Header>
                    <Route path="/" component={PageNavbar} />
                </Layout.Header>
                {Routes}
            </Layout>
        </BrowserRouter>
    }
}