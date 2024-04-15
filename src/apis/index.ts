import { ApiService } from "@/service";
import type { User } from "@/types";


/**
 * 获取文章列表
 * @returns 
 */
export const getArticleList = () => ApiService.request({ url: '/articles' })

export const login = (mobile: string, password: string) => ApiService.post<User>('https://consult-api.itheima.net/login/password', { mobile, password })

