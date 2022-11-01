import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Bcrypt {
  async hashPassword(password: string): Promise<string> {
    const jumps = 10;
    return await bcrypt.hash(password, jumps);
  }

  async comparePassword(
    passwordBank: string,
    passwordTyped: string,
  ): Promise<boolean> {
    return bcrypt.compareSync(passwordTyped, passwordBank);
  }
}
