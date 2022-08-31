import './tailwind.postcss'
import './custom.css'
import DefaultTheme from 'vitepress/theme'
import HomePage from '../../../components/HomePage.vue'
import navbar from '../../../components/navbar.vue'
import Earth from '../../../components/Earth.vue'
import Love from '../../../components/Love.vue'
import FrontEnd from '../../../components/FrontEnd.vue'
import Design from '../../../components/Design.vue'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
      app.component('HomePage',HomePage)
      app.component('navbar',navbar)
      app.component('Earth',Earth)
      app.component('Love',Love)
      app.component('FrontEnd',FrontEnd)
      app.component('Design',Design)
    }
}
