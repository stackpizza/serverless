import { AES } from 'crypto-ts';

export const hashPassword = (password: string): string => AES.encrypt(password, 'jwtaccessecretpassword').toString();
