import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/services/user.service';
import { Bcrypt } from '../bcrypt/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private bcrypt: Bcrypt
  ) { }

  async validateUser(username: string, password: string): Promise<any> {

    const searchUser = await this.userService.findByUser(username)

    if (!searchUser)
        throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);
      
    const match = await this.bcrypt.comparePassword(searchUser.password, password)

    if (searchUser && match) {
      const { password, ...result } = searchUser;
      return result;
    }
    return null;
  }

  async login(userLogin: any) {

    const payload = { username: userLogin.user, sub: "womenWork" };

    return {
      user: userLogin.user,
      token: `Bearer ${this.jwtService.sign(payload)}`,
    };
    
  }

}
