/*
 * @Author: liujun 18316880540@163.com
 * @Date: 2022-06-22 13:23:48
 * @LastEditors: liujun 18316880540@163.com
 * @LastEditTime: 2022-07-16 15:05:12
 * @FilePath: \fileUpload\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 引入组件
import FileUpload from './components/FileUpload/index.vue'

// 创建 install 函数
// vue.use 会默认查找并调用 install 函数
const FileUploadConfig = {
    install: (app) => {
        // 注意：第一个参数是组件名称，我们在页面引用时用到
        app.component(FileUpload.name, FileUpload)
    }
}

// 暴露 install 函数
export default FileUploadConfig