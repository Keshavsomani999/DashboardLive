import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/DashboardLive/",
  plugins: [react()],
  server :{
    host:true,
    watch: {
      usePolling: true
    }
  }
})
