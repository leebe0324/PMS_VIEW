import request from "./request";

interface DataInfoResponse<T = {}> {
  code: number;
  message: string;
  data: T;
}

//登录获取token
interface adminLoginParams {
  username: string;
  password: string;
}

type PromiseResponse<T> = Promise<DataInfoResponse<T>>;

interface AdminUser {
  adminId: number;
  password: string;
  readonly: string;
  status: string;
  username: string;
}

export const adminLoginApi = (
  data: adminLoginParams
): PromiseResponse<string> => request.post("/adminUser/login", data);

export const getAdminInfo = ():PromiseResponse<AdminUser> =>
  request.get("/adminUser/info");
