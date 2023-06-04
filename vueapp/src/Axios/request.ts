import axios from "axios"
import type { Method, AxiosRequestConfig } from "axios"
const service = axios.create({
    baseURL: "http://localhost:7089",
    timeout: 5000
})
//处理响应拦截器
service.
    interceptors.response.use(response => response.data)
//axios中的ts认为data是有的，但是响应拦截器实际去掉了
//再次对请求方法进行封装
type Date<T> = {
    code: number,
    message: string,
    data: T
}
const request = <T>(url: string, method: Method, submitData: object, config: AxiosRequestConfig) => {
    return service.request<T, Date<T>>({
        url,
        method,
        [method.toLowerCase() === "get" ? "params" : "data"]: submitData,
        ...config
    })
  
}
export default request