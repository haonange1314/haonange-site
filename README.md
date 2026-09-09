# 个人开发随记与小工具

`haonange.com` 的个人入口网站，用于展示个人开发项目、开发随记以及实用工具。

当前首页提供：

- DNF 团长排表工具入口；
- 开发随记占位；
- 与 ICP 备案一致的网站名称和备案号；
- 微信等平台使用的 Open Graph 分享预览。

## 本地开发

要求 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

默认访问地址为 `http://localhost:3000`。

## 生产构建

```bash
npm run lint
npm run build
npm start
```

## Docker

```bash
docker build -t haonange-site .
docker run --rm -p 3000:3000 haonange-site
```

正式部署时由统一的 Caddy 网关提供 HTTPS：

- `haonange.com` 跳转到 `www.haonange.com`；
- `www.haonange.com` 反向代理到本项目的 3000 端口；
- `raid.haonange.com` 反向代理到独立的 DNF 排表工具。

生产服务器只对公网开放 80/443，应用容器端口不直接暴露公网。
