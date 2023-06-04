import axios from "axios"
import type { Method, AxiosRequestConfig } from "axios"
const service = axios.create({
    baseURL: "http://localhost:7089",
    timeout: 5000
})
//������Ӧ������
service.
    interceptors.response.use(response => response.data)
//axios�е�ts��Ϊdata���еģ�������Ӧ������ʵ��ȥ����
//�ٴζ����󷽷����з�װ
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