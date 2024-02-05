import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Splash from "../pages/Splash";
import WelcomePage1 from "../pages/Welcome/welcomePage1";
import WelcomePage2 from "../pages/Welcome/welcomePage2";
import WelcomePage3 from "../pages/Welcome/welcomePage3";
import WelcomePage4 from "../pages/Welcome/welcomePage4";

const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Splash/>
                }
            ]
        },
        {
            path: '/Welcome',
            element: <Layout/>,
            children: [
                {
                    path: '/Welcome/page1',
                    element: <WelcomePage1/>
                },
                {
                    path: '/Welcome/page2',
                    element: <WelcomePage2/>
                },
                {
                    path: '/Welcome/page3',
                    element: <WelcomePage3/>
                },
                {
                    path: '/Welcome/page4',
                    element: <WelcomePage4/>
                }
            ]
        }
    ])
 
export default router;