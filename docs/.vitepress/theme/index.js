import './tailwind.postcss'
import './custom.css'
import DefaultTheme from 'vitepress/theme'
import HomePage from '../../../components/HomePage.vue'
import Blog from '../../../components/Blog.vue'
import navbar from '../../../components/navbar.vue'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
      app.component('HomePage',HomePage)
      app.component('Blog',Blog)
      app.component('navbar',navbar)
    }
}
