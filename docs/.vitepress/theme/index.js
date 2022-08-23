import './tailwind.postcss'
import './custom.css'
import DefaultTheme from 'vitepress/theme'
import HomePage from '../../../components/HomePage.vue'
import Blog from '../../../components/Blog.vue'
import navbar from '../../../components/navbar.vue'
import Earth from '../../../components/Earth.vue'
import aboutLove from '../../../components/aboutLove.vue'
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
      app.component('HomePage',HomePage)
      app.component('Blog',Blog)
      app.component('navbar',navbar)
      app.component('Earth',Earth)
      app.component('aboutLove',aboutLove)
    }
}
