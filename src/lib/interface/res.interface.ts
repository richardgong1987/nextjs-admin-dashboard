import { IUser } from "@/lib/interface/user.interface";

export interface IRes {
  code: number;
  data: any;
  msg: string;
}
export interface ILoginRes extends IRes {
  data: {
    user: IUser;
    token: string;
    expiresAt: number;
  };
}

/*
{
  "code": 0,
  "data": {
  "user": {
     "ID": 1,
      "CreatedAt": "2025-09-12T19:58:53.104+09:00",
      "UpdatedAt": "2025-09-12T19:58:53.106+09:00",
      "uuid": "0e03f8c7-eea0-4889-a94a-1228191d4b11",
      "userName": "admin",
      "nickName": "Mr.奇淼",
      "headerImg": "https://qmplusimg.henrongyi.top/gva_header.jpg",
      "authorityId": 888,
      "authority": {
      "CreatedAt": "2025-09-12T19:58:52.97+09:00",
        "UpdatedAt": "2025-09-12T19:58:53.109+09:00",
        "DeletedAt": null,
        "authorityId": 888,
        "authorityName": "普通用户",
        "parentId": 0,
        "dataAuthorityId": null,
        "children": null,
        "menus": null,
        "defaultRouter": "dashboard"
    },
    "authorities": [
      {
        "CreatedAt": "2025-09-12T19:58:52.97+09:00",
        "UpdatedAt": "2025-09-12T19:58:53.109+09:00",
        "DeletedAt": null,
        "authorityId": 888,
        "authorityName": "普通用户",
        "parentId": 0,
        "dataAuthorityId": null,
        "children": null,
        "menus": null,
        "defaultRouter": "dashboard"
      },
      {
        "CreatedAt": "2025-09-12T19:58:52.97+09:00",
        "UpdatedAt": "2025-09-12T19:58:53.112+09:00",
        "DeletedAt": null,
        "authorityId": 8881,
        "authorityName": "普通用户子角色",
        "parentId": 888,
        "dataAuthorityId": null,
        "children": null,
        "menus": null,
        "defaultRouter": "dashboard"
      },
      {
        "CreatedAt": "2025-09-12T19:58:52.97+09:00",
        "UpdatedAt": "2025-09-12T19:58:53.111+09:00",
        "DeletedAt": null,
        "authorityId": 9528,
        "authorityName": "测试角色",
        "parentId": 0,
        "dataAuthorityId": null,
        "children": null,
        "menus": null,
        "defaultRouter": "dashboard"
      }
    ],
      "phone": "17611111111",
      "email": "333333333@qq.com",
      "enable": 1,
      "originSetting": null
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiMGUwM2Y4YzctZWVhMC00ODg5LWE5NGEtMTIyODE5MWQ0YjExIiwiSUQiOjEsIlVzZXJuYW1lIjoiYWRtaW4iLCJOaWNrTmFtZSI6Ik1yLuWlh-a3vCIsIkF1dGhvcml0eUlkIjo4ODgsIkJ1ZmZlclRpbWUiOjg2NDAwLCJpc3MiOiJxbVBsdXMiLCJhdWQiOlsiR1ZBIl0sImV4cCI6MTc1ODI4MzM1MSwibmJmIjoxNzU3Njc4NTUxfQ.mA5r6uUVSAjFwmphA374sRHYnhuSsrOkIm8lEfvIO-Y",
    "expiresAt": 1758283351000
},
  "msg": "登录成功"
}*/
