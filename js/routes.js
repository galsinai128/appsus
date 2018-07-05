import homePage from './pages/home-page.js'
import mailPage from './pages/mail-app-page.js'
import keeperPage from './pages/keeper-app-page.js'

export default [
    {path: '/', component: homePage},
    {path: '/email', component: mailPage},
    {path: '/keeper', component: keeperPage},
]