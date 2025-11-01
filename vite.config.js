import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

// 👇 yahan apne repo ka naam zaroor likhna hai
export default defineConfig({
  base: "/my-react-practice/",
  plugins: [react(), tailwindcss()],
  
})



