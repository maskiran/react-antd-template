import React from 'react'
import { Link } from 'react-router-dom'
import { DashboardOutlined } from '@ant-design/icons'
import Menu from 'antd/lib/menu'

/*
this has access to the url through this.props.location and other route params
use that to set the key in the sidebar
*/

export default class Route1Sidebar extends React.Component {
    render() {
        var sidebarKey = this.props.location.pathname
        return (
            <Menu mode="inline" theme="light" selectedKeys={[sidebarKey]} style={{ minHeight: "100%" }}>
                <Menu.ItemGroup key="group1" className="sidebar-menu-itemgroup" title="Group 1">
                    <Menu.Item key='/group1-item1' icon={<DashboardOutlined />}>
                        <Link to={'/group1-item1'}>Group 1 Item 1</Link>
                    </Menu.Item>
                    <Menu.Item key='/group1-item2' icon={<DashboardOutlined />}>
                        <Link to={'/group1-item2'}>Group 1 Item 2</Link>
                    </Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="group2" className="sidebar-menu-itemgroup" title="Group 2" >
                    <Menu.Item key='/group2-item1' icon={<DashboardOutlined />}>
                        <Link to='/group2-item1'>Group 2 Item 1</Link>
                    </Menu.Item>
                    <Menu.Item key='/group2-item2' icon={<DashboardOutlined />}>
                        <Link to='/group2-item2'>Group 2 Item 2</Link>
                    </Menu.Item>
                </Menu.ItemGroup>
            </Menu>
        )
    }
}