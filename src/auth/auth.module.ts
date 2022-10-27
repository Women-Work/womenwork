import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt/dist";
import { PassportModule } from "@nestjs/passport/dist";
import { UserModule } from "src/users/user.module";
import { Bcrypt } from "./bcrypt/bcrypt";
import { jwtConstants } from "./constants/constants";
import { AuthController } from "./controller/auth.controller";
import { AuthService } from "./service/auth.service";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { LocalStrategy } from "./strategy/local.strategy";

@Module({
    imports:[
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '24h' }
        })
    ],
    providers:[Bcrypt, AuthService, LocalStrategy, JwtStrategy],
    controllers:[AuthController],
    exports:[Bcrypt]
})
export class AuthModule { }

