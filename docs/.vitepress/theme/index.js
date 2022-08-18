import './tailwind.postcss'
import DefaultTheme from 'vitepress/theme'
import HomePage from '../../../components/HomePage.vue'
import './custom.css'
import Blog from '../../../components/Blog.vue'



export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
      app.component('HomePage',HomePage)
      app.component('Blog',Blog)
    }
}
