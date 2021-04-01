import React from 'react'
import Menu from 'antd/lib/menu'
import { Link } from 'react-router-dom'

export default class PageNavbar extends React.Component {
    // this has access to the routes, so you can set the active keys based on the url path
    // this.props.location, this.props.match etc
    render() {
        // change or parse the pathname and set the item keys to match and select in the navbar
        var navbarKey = this.props.location.pathname
        return <Menu mode="horizontal" theme="dark" selectedKeys={[navbarKey]}>
            <span style={{marginRight: "32px"}}>Logo</span>
            <Menu.Item key="/route1"><Link to="route1">Item1</Link></Menu.Item>
            <Menu.Item key="/route2"><Link to="route2">Item2</Link></Menu.Item>
            <Menu.Item key="rightitem1" style={{ float: "right" }}>
                Right Item1
            </Menu.Item>
        </Menu >
    }
}
