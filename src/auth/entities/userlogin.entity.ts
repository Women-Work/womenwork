import { ApiProperty } from '@nestjs/swagger';

export class UserLogin {
  @ApiProperty()
  public user: string;

  @ApiProperty()
  public password: string;
}
