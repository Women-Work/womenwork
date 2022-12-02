export interface UserLogin {
    id: number;
    user: string;
    password: string;
    token?: string|null;
}