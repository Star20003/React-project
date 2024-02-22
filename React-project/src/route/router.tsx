import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Splash from "../pages/Splash";
import WelcomePage1 from "../pages/Welcome/welcomePage1";
import WelcomePage2 from "../pages/Welcome/welcomePage2";
import WelcomePage3 from "../pages/Welcome/welcomePage3";
import WelcomePage4 from "../pages/Welcome/welcomePage4";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";
import Vertification from "../pages/Authentication/Vertification";
import NewPassword from "../pages/Authentication/NewPassword";
import About from "../pages/CourseDetails/About";
import Lessons from "../pages/CourseDetails/Lessons";
import Reviews from "../pages/CourseDetails/Reviews";
import CompleteProfile from "../pages/Authentication/CompleteProfile";
import PaymentMethod from "../pages/Payment/PaymentMethod";
import AddCard from "../pages/Payment/AddCard";
import ReviewSummary from "../pages/Payment/ReviewSummary";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";

const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Splash/>
                },
                {
                    path: '/home',
                    element: <Home/>
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
        },
        {
            path: '/auth',
            element: <Layout/>,
            children: [
                {
                    path: '/auth/login',
                    element: <Login/>
                },
                {
                    path: '/auth/signup',
                    element: <Signup/>
                },
                {
                    path: '/auth/vertification',
                    element: <Vertification/>
                },
                {
                    path: '/auth/changePassword',
                    element: <NewPassword/>
                },
                {
                    path: '/auth/completeProfile',
                    element: <CompleteProfile/>
                },
            ]
        },
        {
            path: '/courseDetail',
            element: <Layout/>,
            children: [
                {
                    path: '/courseDetail/about',
                    element: <About/>
                },
                {
                    path: '/courseDetail/lessons',
                    element: <Lessons/>
                },
                {
                    path: '/courseDetail/reviews',
                    element: <Reviews/>
                },
            ]
        },
        {
            path: '/pay',
            element: <Layout/>,
            children: [
                {
                    path: '/pay/paymentMethod',
                    element: <PaymentMethod/>
                },
                {
                    path: '/pay/addCard',
                    element: <AddCard/>
                },
                {
                    path: '/pay/reviewSummary',
                    element: <ReviewSummary/>
                },
                {
                    path: '/pay/paymentSuccess',
                    element: <PaymentSuccess/>
                }
            ]
        }
    ])
 
export default router;