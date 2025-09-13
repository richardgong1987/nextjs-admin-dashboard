"use client";
import { EmailIcon, PasswordIcon } from "@/assets/icons";
import Link from "next/link";
import React, { useState } from "react";
import InputGroup from "../FormElements/InputGroup";
import { Checkbox } from "../FormElements/checkbox";
import { ApiUser } from "@/lib/api/system/api-user";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { UseUserInfoStore } from "@/store/userInfo-store";
import { PAGES } from "@/lib/constant";

export default function SigninWithPassword() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const { Login } = UseUserInfoStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await ApiUser.Login({
      username: data.username,
      password: data.password,
    });
    setLoading(false);
    console.log(res);
    if (res.code === 0 && res.data?.token) {
      toast.success("ログインに成功しました");
      Login(res.data.user, res.data.token, res.data.expiresAt);
      // 登录成功后的逻辑
      const redirectPath = sessionStorage.getItem("redirect_after_login");
      if (redirectPath) {
        sessionStorage.removeItem("redirect_after_login");
        router.replace(redirectPath);
      } else {
        router.replace(PAGES.PAGE_DASHBOARD);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-sm">
      <div>
        <InputGroup
          type="text"
          label="Username"
          className="mb-4 [&_input]:py-[15px]"
          placeholder="Enter your username"
          name="username"
          handleChange={handleChange}
          value={data.username}
          icon={<EmailIcon />}
        />

        <InputGroup
          type="password"
          label="Password"
          className="mb-5 [&_input]:py-[15px]"
          placeholder="Enter your password"
          name="password"
          handleChange={handleChange}
          value={data.password}
          icon={<PasswordIcon />}
        />

        <div className="mb-6 flex items-center justify-between gap-2 py-2 font-medium">
          <Checkbox
            label="Remember me"
            name="remember"
            withIcon="check"
            minimal
            radius="md"
            onChange={(e) =>
              setData({
                ...data,
                remember: e.target.checked,
              })
            }
          />
        </div>

        <div className="mb-4.5">
          <button
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
          >
            Sign In
            {loading && (
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent dark:border-primary dark:border-t-transparent" />
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
