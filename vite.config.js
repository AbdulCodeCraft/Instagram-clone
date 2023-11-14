import { defineConfig } from "vite"
import { resolve } from 'path'
export default defineConfig({
    base:"/Instagram-clone/",
    build :{
       rollupOption:{
        Input:{
            index:resolve(__dirname,'index.html'),
            light:resolve(__dirname,'Light-Theme.html')
        }
       }
    }
    
})