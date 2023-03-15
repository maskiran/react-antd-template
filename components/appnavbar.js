import Link from "next/link"
import { DashboardOutlined } from "@ant-design/icons"

const appNavItems = [
    {
        key: "/page1",
        label: <Link href="/page1">Page1</Link>,
        icon: <DashboardOutlined />
    },
    {
        key: "/page2",
        label: <Link href="/page2">Page2</Link>
    },
]

// change this function according to the needs
export const appNavGetSelectedKey = (router) => {
    // router is https://nextjs.org/docs/api-reference/next/router
    return router.pathname
}

export default appNavItems