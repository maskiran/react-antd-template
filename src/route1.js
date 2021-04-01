import React from 'react'
import Layout from 'antd/lib/layout'
import Route1Sidebar from './route1_sidebar'

export default class Route1 extends React.Component {
    render() {
        // return 'Route 1'
        return <Layout>
            <Layout.Sider collapsible width="250" theme="light">
                <Route1Sidebar {...this.props} />
            </Layout.Sider>
            <Layout.Content style={{ padding: "25px 25px" }}>
                Hello Route 1 Content
            </Layout.Content>
        </Layout>
    }
}
