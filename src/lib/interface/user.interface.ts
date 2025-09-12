
export interface IUser {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  uuid: string;
  userName: string;
  nickName: string;
  headerImg: string;
  authorityId: number;
  authority: Authority;
  authorities: Authority[];
  phone: string;
  email: string;
  enable: number;
  originSetting: null;
}

export interface Authority {
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: null;
  authorityId: number;
  authorityName: string;
  parentId: number;
  dataAuthorityId: null;
  children: null;
  menus: null;
  defaultRouter: string;
}
