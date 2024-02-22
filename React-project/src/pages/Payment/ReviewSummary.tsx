import { FC } from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const PaymentMethod: FC = () => {
    return (
    <>
    <div className="flex justify-between items-center">
        <div>
            <svg width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.91706 0.941761C5.47814 0.941761 6.01792 1.03587 6.53638 1.22408C7.0584 1.41229 7.5236 1.71236 7.93198 2.12429C8.34391 2.53622 8.66884 3.0831 8.90676 3.76491C9.14824 4.44318 9.27076 5.27592 9.27431 6.26314C9.27431 7.18999 9.16955 8.0174 8.96003 8.74538C8.75407 9.46982 8.45755 10.0859 8.07047 10.5938C7.6834 11.1016 7.21642 11.4886 6.66955 11.755C6.12267 12.0178 5.51188 12.1491 4.83716 12.1491C4.10918 12.1491 3.46642 12.0089 2.9089 11.7283C2.35137 11.4442 1.90215 11.0589 1.56124 10.5724C1.22388 10.0824 1.01969 9.53196 0.948668 8.92116H3.22317C3.31195 9.31889 3.49838 9.62784 3.78248 9.84801C4.06657 10.0646 4.41813 10.1729 4.83716 10.1729C5.54739 10.1729 6.08716 9.86399 6.45648 9.24609C6.8258 8.62464 7.01223 7.77415 7.01578 6.6946H6.94121C6.77786 7.0142 6.55769 7.28942 6.2807 7.52024C6.00371 7.74751 5.68588 7.9233 5.32722 8.04759C4.97211 8.17188 4.59391 8.23402 4.19263 8.23402C3.54988 8.23402 2.97637 8.0831 2.47211 7.78125C1.96784 7.4794 1.57012 7.06392 1.27892 6.5348C0.987731 6.00568 0.842134 5.40199 0.842134 4.72372C0.838583 3.99219 1.00726 3.34055 1.34817 2.76882C1.68908 2.19709 2.16493 1.74964 2.77573 1.42649C3.39007 1.09979 4.10385 0.93821 4.91706 0.941761ZM4.93304 2.75284C4.57438 2.75284 4.25478 2.83807 3.97424 3.00852C3.69725 3.17898 3.47708 3.40803 3.31373 3.69567C3.15392 3.98331 3.0758 4.30469 3.07935 4.6598C3.07935 5.01847 3.15748 5.34162 3.31373 5.62926C3.47353 5.91335 3.69015 6.14062 3.96358 6.31108C4.24057 6.47798 4.55662 6.56143 4.91174 6.56143C5.17807 6.56143 5.42488 6.51172 5.65215 6.41229C5.87942 6.31285 6.07651 6.17614 6.24341 6.00213C6.41387 5.82457 6.54703 5.62038 6.64292 5.38956C6.7388 5.15874 6.78674 4.91371 6.78674 4.65447C6.78319 4.31001 6.70151 3.99396 6.54171 3.70632C6.38191 3.41868 6.16174 3.18786 5.8812 3.01385C5.60066 2.83984 5.28461 2.75284 4.93304 2.75284ZM11.92 10.7322C11.5684 10.7322 11.2666 10.608 11.0144 10.3594C10.7659 10.1108 10.6416 9.80895 10.6416 9.45384C10.6416 9.10582 10.7659 8.80753 11.0144 8.55895C11.2666 8.31037 11.5684 8.18608 11.92 8.18608C12.2609 8.18608 12.5592 8.31037 12.8149 8.55895C13.0705 8.80753 13.1984 9.10582 13.1984 9.45384C13.1984 9.68821 13.138 9.90305 13.0173 10.0984C12.9001 10.2901 12.7456 10.4446 12.5539 10.5618C12.3621 10.6754 12.1508 10.7322 11.92 10.7322ZM11.92 5.37891C11.5684 5.37891 11.2666 5.25462 11.0144 5.00604C10.7659 4.75746 10.6416 4.45561 10.6416 4.1005C10.6416 3.75249 10.7659 3.45597 11.0144 3.21094C11.2666 2.96236 11.5684 2.83807 11.92 2.83807C12.2609 2.83807 12.5592 2.96236 12.8149 3.21094C13.0705 3.45597 13.1984 3.75249 13.1984 4.1005C13.1984 4.33842 13.138 4.55504 13.0173 4.75035C12.9001 4.94212 12.7456 5.09482 12.5539 5.20845C12.3621 5.32209 12.1508 5.37891 11.92 5.37891ZM14.575 10.0824V8.26598L19.1293 1.09091H20.6953V3.60511H19.7685L16.8974 8.14879V8.23402H23.3694V10.0824H14.575ZM19.8111 12V9.52841L19.8537 8.72408V1.09091H22.0164V12H19.8111ZM29.2057 1.09091V12H26.8993V3.28018H26.8353L24.3371 4.84624V2.80078L27.0377 1.09091H29.2057Z" fill="#242424" />
            </svg>
        </div>
        <div>
            <svg width="67" height="12" viewBox="0 0 67 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.35" x="42.832" y="0.833984" width="21" height="10.3333" rx="2.16667" stroke="#242424" />
                <path opacity="0.4" d="M65.332 4.00098V8.00098C66.1368 7.6622 66.6601 6.87411 66.6601 6.00098C66.6601 5.12784 66.1368 4.33975 65.332 4.00098Z" fill="#242424" />
                <rect x="44.332" y="2.33398" width="18" height="7.33333" rx="1.33333" fill="#242424" />
                <path fillRule="evenodd" clipRule="evenodd" d="M29.6671 2.61456C31.8918 2.61465 34.0315 3.46876 35.6438 5.00036C35.7652 5.1186 35.9593 5.11711 36.0789 4.99701L37.2395 3.82668C37.3 3.76577 37.3338 3.68326 37.3333 3.59741C37.3328 3.51156 37.2981 3.42945 37.2368 3.36925C33.0049 -0.682979 26.3286 -0.682979 22.0967 3.36925C22.0354 3.42941 22.0006 3.51149 22 3.59734C21.9994 3.68319 22.0331 3.76573 22.0936 3.82668L23.2546 4.99701C23.3741 5.11729 23.5683 5.11878 23.6897 5.00036C25.3022 3.46866 27.4421 2.61455 29.6671 2.61456ZM29.6671 6.42214C30.8894 6.42206 32.0681 6.87602 32.9742 7.69579C33.0968 7.81214 33.2898 7.80961 33.4093 7.69011L34.5685 6.51978C34.6296 6.45839 34.6635 6.37511 34.6626 6.28858C34.6617 6.20204 34.6261 6.11947 34.5639 6.05934C31.8047 3.49493 27.5318 3.49493 24.7726 6.05934C24.7103 6.11947 24.6747 6.20208 24.6739 6.28865C24.6731 6.37521 24.7071 6.45848 24.7683 6.51978L25.9272 7.69011C26.0467 7.80961 26.2397 7.81214 26.3623 7.69579C27.2677 6.87656 28.4455 6.42265 29.6671 6.42214ZM31.9893 8.98398C31.9911 9.07075 31.9569 9.15442 31.8949 9.21521L29.8896 11.2372C29.8308 11.2966 29.7507 11.3301 29.6671 11.3301C29.5834 11.3301 29.5033 11.2966 29.4445 11.2372L27.4389 9.21521C27.3769 9.15437 27.3428 9.07068 27.3447 8.9839C27.3465 8.89713 27.3841 8.81495 27.4486 8.75678C28.7292 7.67451 30.6049 7.67451 31.8856 8.75678C31.95 8.815 31.9875 8.8972 31.9893 8.98398Z" fill="#242424" />
                <path fillRule="evenodd" clipRule="evenodd" d="M16 0.666016H15C14.4477 0.666016 14 1.11373 14 1.66602V10.3327C14 10.885 14.4477 11.3327 15 11.3327H16C16.5523 11.3327 17 10.885 17 10.3327V1.66602C17 1.11373 16.5523 0.666016 16 0.666016ZM10.3333 2.99935H11.3333C11.8856 2.99935 12.3333 3.44706 12.3333 3.99935V10.3327C12.3333 10.885 11.8856 11.3327 11.3333 11.3327H10.3333C9.78105 11.3327 9.33333 10.885 9.33333 10.3327V3.99935C9.33333 3.44706 9.78105 2.99935 10.3333 2.99935ZM6.66667 5.33268H5.66667C5.11438 5.33268 4.66667 5.7804 4.66667 6.33268V10.3327C4.66667 10.885 5.11438 11.3327 5.66667 11.3327H6.66667C7.21895 11.3327 7.66667 10.885 7.66667 10.3327V6.33268C7.66667 5.7804 7.21895 5.33268 6.66667 5.33268ZM2 7.33268H1C0.447715 7.33268 0 7.7804 0 8.33268V10.3327C0 10.885 0.447715 11.3327 1 11.3327H2C2.55228 11.3327 3 10.885 3 10.3327V8.33268C3 7.7804 2.55228 7.33268 2 7.33268Z" fill="#242424" />
            </svg>
        </div>
    </div>
    <div className="flex justify-start items-center mt-6 gap-[4.1rem]">
        <Link className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex justify-center items-center" to={"/pay/addCard"}>
            <img src="/black-arrow.png" className="w-5 h-3"></img>
        </Link>
        <p className="font-semibold ff-Inter text-gray-600">Review Summary</p>
    </div>
    <div className="w-full h-36 mt-5 rounded-2xl flex justify-start p-2 items-center gap-4">
        <img src="/bg3.jpg" className="w-32 h-32 rounded-lg"></img>
            <div className="">
                <div className="flex justify-start text-sm ff-Inter text-gray-500 font-medium items-center gap-1"><img src="/star.png" className="w-5 h-5"></img><h3>4.5</h3></div>
                <div className="text-md font-semibold ff-Inter mt-1">Introduction of Figma</div>
                <div className="flex justify-start items-center gap-2 mt-2">
                    <img src="/user.jpg" className="w-5 h-5"></img>
                    <h1 className="text-gray-500 text-sm ff-Inter">Jacob Jones</h1>
                </div>
                <div className="flex justify-start items-center gap-2 mt-2">
                    <h1 className="text-blue-700 font-semibold ff-Inter text-sm">$180.00</h1>
                    <div className="bg-orange-100 flex justify-center items-center w-20 h-6 rounded-3xl"><h3 className="text-orange-500 text-xs ff-Inter">Best seller</h3></div>
                </div>
            </div>
    </div>
    <div className="h-[0.01rem] w-full bg-gray-200 mt-4"></div>
    <div className="flex flex-col mt-3">
        <div className="flex justify-between items-center mt-2">
            <p className="font-medium text-sm text-gray-500 ff-Inter">Language</p>
            <p className="font-semibold text-sm ff-Inter text-gray-800">English</p>
        </div>
        <div className="flex justify-between items-center mt-2">
            <p className="font-medium text-sm text-gray-500 ff-Inter">Lessons</p>
            <p className="font-semibold text-sm ff-Inter text-gray-800">32</p>
        </div>
        <div className="flex justify-between items-center mt-2">
            <p className="font-medium text-sm text-gray-500 ff-Inter">Level</p>
            <p className="font-semibold text-sm ff-Inter text-gray-800">Begginer</p>
        </div>
    </div>
    <div className="h-[0.01rem] w-full bg-gray-200 mt-4"></div>
    <div className="flex flex-col mt-3">
        <div className="flex justify-between items-center mt-2">
            <p className="font-medium text-sm text-gray-500 ff-Inter">Amount</p>
            <p className="font-semibold text-sm ff-Inter text-gray-800">$180.00</p>
        </div>
        <div className="flex justify-between items-center mt-2">
            <p className="font-medium text-sm text-gray-500 ff-Inter">Tax</p>
            <p className="font-semibold text-sm ff-Inter text-gray-800">$5.00</p>
        </div>
    </div>
    <div className="h-[0.01rem] w-full bg-gray-200 mt-4"></div>
    <div className="flex justify-between items-center mt-4">
        <p className="font-medium text-sm text-gray-500 ff-Inter">Total</p>
        <p className="font-semibold text-sm ff-Inter text-gray-800">$185.00</p>
    </div>
    <div className="h-[0.01rem] w-full bg-gray-200 mt-4"></div>
    <div className="flex justify-start items-center mt-4 mb-32">
        <img src="/card.png" className="w-6 h-6"></img>
        <p className="font-medium text-gray-500 text-sm ff-Inter ml-4">Paypal</p>
        <Link className="font-semibold ff-Inter text-blue-600 text-sm ml-[12.3rem]" to={""}>Change</Link>
    </div>
    <div className="rounded-tl-2xl rounded-tr-2xl w-96 h-28 border-t-2 flex flex-col justify-center z-50 bg-white bg-opacity-100 absolute top-[105%] left-[36.1%]" style={{ boxShadow: "0px -5px 15px rgba(0, 0, 0, 0.1)" }}>
        <Link to={"/pay/paymentSuccess"} className="px-5"><Button Text={"Continue"} className="h-12 mt-2 w-full"></Button></Link>
        <div className="mt-1 flex items-center">
            <svg width="375" height="34" viewBox="0 0 375 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="121" y="21" width="134" height="5" rx="2.5" fill="#242424" />
            </svg>
        </div>
    </div>
      </>
    )
}

export default PaymentMethod;