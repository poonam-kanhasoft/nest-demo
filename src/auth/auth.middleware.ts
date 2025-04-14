import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const authHeader = req.headers?.authorization || ""
    if(!authHeader || !authHeader?.startsWith('Bearer')){
      throw new UnauthorizedException("Invalid Token");
    }
    const token = authHeader?.split(' ')?.[1];
    console.log("token", token);
    
    next();
  }
}
