import { User } from '../../../generated/prisma/client';

export type UserInterface = User;
export type UserCreateInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
