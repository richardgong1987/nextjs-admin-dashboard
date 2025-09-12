import {CommonResponse, httpService} from "@/lib/http";
import {RESPONSE_CODE} from "@/lib/constant";
import { ILoginRes } from "@/lib/interface/res.interface";

export class ApiUser {
    static async profiles() {
        const res = await httpService.GET("/api/bizUser/profile") as CommonResponse;
        if (res.code == RESPONSE_CODE.SUCCESS) {
            return res.data;
        }
    }

    static async RenewToken() {
        return await httpService.GET("/api/bizUser/renew-token") as ILoginRes;
    }
    static async Logout() {
      return await httpService.GET("/api/bizUser/logout");
    }
}