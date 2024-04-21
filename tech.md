# 技术

### 主要模块

- common/exceptions
- common/filter
- common/interceptor
- common/pipe
- common/guard
- modules/auth
- modules/user

### 二方库

- @nestjs/passport passport passport-local
  local.strategy.ts文件来写本地验证策略代码

- @nestjs/jwt
  服务器验证成功后应该签发一个身份标识Token的东西给客户端,这样以后客户端就拿着这个标识来证明自己的身份。而标识用户身份的方式有多种，这里我们采用jwt方式

- passport-jwt @types/passport-jwt
  实现token认证,如何取出token以及根据token拿到用户信息

  ExtractJwt提供多种方式从请求中提取JWT，常见的方式有以下几种：
  fromHeader： 在Http 请求头中查找JWT
  fromBodyField: 在请求的Body字段中查找JWT
  fromAuthHeaderAsBearerToken：在授权标头带有Bearer方案中查找JWT
  我们采用的是fromAuthHeaderAsBearerToken，后面请求操作演示中可以看到，发送的请求头中需要带上,这种方案也是现在很多后端比较青睐的：

- bcrypt.js 加解密密码，主要用到俩个api

```js
import { compareSync, hashSync } from 'bcryptjs';
hashSync(password); // 加密
compareSync(password, user.password); // 比较密码
```

- [映射类型: @nestjs/mapped-types](https://docs.nestjs.cn/10/techniques?id=%e6%98%a0%e5%b0%84%e7%b1%bb%e5%9e%8b)

```ts
import { PickType } from '@nestjs/mapped-types';
export class UpdatePasswordDto extends PickType(CreateUserDto, ['password']) {}
```

## 问题记录

- post/get/delete请求参数不合法，如何规避
- 邀请他人记账，这个怎么做的?邀请其实就是共享，更新账本信息，拿到邀请人的信息即可

## 参考

- [NestJS 简单入门（三）用户登录与JWT](https://juejin.cn/post/7257518510531330106#heading-3)
- [Nest.js 实战系列二-手把手带你-实现注册、扫码登录、jwt认证等](https://juejin.cn/post/7044708915438682148?searchId=20240407102607D2C754E842DCD37A5184#heading-4)