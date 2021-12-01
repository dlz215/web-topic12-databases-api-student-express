// Import Vue createApp function
import { createApp } from 'vue'

import App from './App.vue'

// Import API call functions
import StudentService from '@/services/StudentService'

// Create new application instance
let app = createApp(App)

// Object containing two API call functions. Will be available to app and all components.
app.config.globalProperties.$student_api = StudentService

app.mount('#app')

