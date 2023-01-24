import { IsNotEmpty } from "class-validator";

interface Product {
  id: number;
}

export class UpdateUserDto {
  @IsNotEmpty()
  id: string;

  user: string;

  name: string;

  photo: string;

  product: Product[];

}