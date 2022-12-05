export interface UserLogin {
    id: string;
    user: string;
    password: string;
    token?: string|null;
}