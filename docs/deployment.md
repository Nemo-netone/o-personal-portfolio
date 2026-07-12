# 部署说明

## 生产环境

- GitHub：`https://github.com/Nemo-netone/o-personal-portfolio`
- Cloudflare Pages：`https://o-personal-portfolio.pages.dev`
- 生产分支：`main`
- 构建命令：`npm run build`
- 输出目录：`dist`

这是纯静态 React/Vite 项目，不使用服务端 API、数据库或秘密环境变量。

## 发布流程

```bash
npm ci
npm run lint
npm run build
npx wrangler@3 pages deploy dist --project-name o-personal-portfolio --branch main
```

## 验收范围

- 1-20 项目均显示“原站已恢复”
- 项目名称、技术栈、GitHub 与稳定 Pages 地址和各项目最新资料一致
- 第 12 项为美妆商城、第 15 项为动漫论坛、第 11 项为生猪养殖主题

- 桌面端与移动端页面可见性
- 20 个项目完整渲染
- 分类筛选与关键词搜索
- 项目详情弹窗
- GitHub 与在线演示链接
- 页面无横向溢出
