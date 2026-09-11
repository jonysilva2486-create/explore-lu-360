import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  health() {
    return { status: "ok", service: "explore-lu-360-api", version: "v1" };
  }
}
