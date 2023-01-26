export interface UserUpdate {
  id: string;
  type: 'addProduct';
  payload: {
    name?: string;
    photo?: string;
    user?: string;
    productId?: number;
  }
}