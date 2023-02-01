export interface UserUpdate {
  id: string;
  type: 'addProduct' | 'updatePhoto' | 'removePhoto';
  payload: {
    name?: string;
    photo?: File;
    photoUrl?: string;
    user?: string;
    productId?: number;
  }
}