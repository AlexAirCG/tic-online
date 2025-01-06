import { prisma } from "@/shared/lib/db";
import { UserEntity } from "../domain";

export function saveUser(user: UserEntity): Promise<UserEntity> {
  prisma.user.upsert({
    where: {
      id: user.id,
    },
    create: user,
    update: user,
  });
}
export const userRepository = {};
