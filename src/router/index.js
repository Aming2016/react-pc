import AsyncComponent from '../components/AsyncComponent';
const Home = AsyncComponent(() =>
    import ('../page/home'));
const Detail = AsyncComponent(() =>
    import ('../page/detail'));
const Page = AsyncComponent(() =>
    import ('../page/page'));
    const  Login = AsyncComponent(() =>
    import ('../page/login'));
const routers = [{
        name: 'home',
        contentClass: 'tabPageContent',
        link: '/home',
        requiresAuth:false,
        component: Home
    },
    {
        name: 'detail',
        contentClass: 'Detail',
        link: '/detail',
        requiresAuth:true,
        component: Detail
    },
    {
        name: 'page',
        contentClass: 'Page',
        link: '/page',
        requiresAuth:false,
        component: Page
    },
    {
        name: 'login',
        contentClass: 'login',
        link: '/login',
        requiresAuth:false,
        component: Login
    }
]
export default routers