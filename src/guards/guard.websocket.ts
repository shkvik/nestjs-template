import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class WebsocketGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    return true;
  }
}