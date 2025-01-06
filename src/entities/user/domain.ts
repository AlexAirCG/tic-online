import { UserId } from "@/kernel/ids";

export type UserEntity = {
  id: UserId;
  login: string;
  reating: number;
  passwordHash: string;
  salt: string;
};

export type SessionEntity = {
  id: UserId;
  login: string;
};
