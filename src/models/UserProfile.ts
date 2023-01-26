import Course from './Course';

export interface UserProfile {
  id: string;
  user: string;
  name: string;
  photo: string;
  product: Course[];
}