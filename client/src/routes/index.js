import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"


const routes = [
    {
        path:'/',
        page: HomePage,
        isShowHeader: true
    },
    // {
    //     path:'/order',
    //     page: OrderPage,
    //     isShowHeader: true
    // },
    // {
    //     path:'/products',
    //     page: ProductsPage,
    //     isShowHeader: true
    // },
    // {
    //     path:'/:type',
    //     page: TypeProductPage,
    //     isShowHeader: true
    // },
    {
        path:'/signup',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path:'/login',
        page: LoginPage,
        isShowHeader: false
    },
    {
        path:'/product-detail',
        page: ProductDetailPage,
        isShowHeader: true
    }
    // {
    //     path:'*',
    //     page: NotFoundPage,
    //     isShowHeader: false
    // }
]

export default routes