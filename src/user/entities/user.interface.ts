import { User } from 'generated/prisma';

export type UserInterface = User;
export type UserCreateInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
