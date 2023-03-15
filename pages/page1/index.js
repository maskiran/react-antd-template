import Link from "next/link"
import { DashboardOutlined } from "@ant-design/icons"

export default function Page1() {
    return <h1>Page1</h1>
}

Page1.sidebarItems = [
    {
        key: "/page1/item1",
        label: <Link href="/page1/item1">Item 1</Link>,
        icon: <DashboardOutlined />
    },
    {
        key: "/page1/item2",
        label: <Link href="/page1/item2">Item 2</Link>,
        icon: <DashboardOutlined />
    }
]

Page1.getSelectedKey = (router) => {
    return router.asPath
}
