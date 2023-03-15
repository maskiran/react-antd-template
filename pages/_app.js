import { useRouter } from "next/router"
import 'antd/dist/reset.css';
import { Layout, Menu } from 'antd';
import appNavItems, { appNavGetSelectedKey } from '../components/appnavbar';

// define a variable named sidebarItems in the component page
// e.g if the component in the page was Page1
// Page1.sidebarItems = [{key: "somekey", label="somelable or react node"},..]
// Page1.selectedItem must be a function that takes router as a parameter and return the key
// for the sidebarItems

export default function App({ Component, pageProps }) {
    const router = useRouter()
    const sidebarItems = Component.sidebarItems || []
    var sidebarSelectedKey = "someignorestring"
    if (sidebarItems.length && Component.getSelectedKey) {
        sidebarSelectedKey = Component.getSelectedKey(router)
        console.log(sidebarSelectedKey)
    }
    return <Layout style={{ minHeight: "100vh" }}>
        <Layout.Header>
            <div className='logo' />
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={appNavGetSelectedKey(router)}
                items={appNavItems}
            />
        </Layout.Header>
        <Layout >
            {sidebarItems.length > 0 &&
                <Layout.Sider theme='light' width={240} collapsible>
                    <Menu theme='light' mode="inline" style={{ height: '100%', borderRight: 0 }}
                        selectedKeys={[sidebarSelectedKey]}
                        items={sidebarItems}
                    />
                </Layout.Sider>
            }
            <Layout.Content style={{ padding: "25px" }}>
                <Component {...pageProps} />
            </Layout.Content>
        </Layout>
    </Layout>
}
