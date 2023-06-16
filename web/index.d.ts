declare module "express-openid-connect" {
  interface RequestContext {
    login(options?: any): void;
  }
}
