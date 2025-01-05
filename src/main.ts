import { createApp } from 'vue'
import App from './App.vue'
import depthChart from '@real2sport/depth-chart'

const app = createApp(App)
app.use(depthChart)
app.mount('#app')
