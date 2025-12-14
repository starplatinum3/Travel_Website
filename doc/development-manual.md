# AtlasVoyage 前端开发手册

本项目为纯静态站点，包含首页、5 个二级页以及 10 个目的地详情页，主要技术为 HTML + CSS + 原生 JavaScript。

## 目录结构
- `index.html`：首页，含主轮播与文字滚动效果。
- `pages/`：二级与详情页面集合。
  - `destinations.html`、`experiences.html`、`tips.html`、`gallery.html`、`about.html`：二级页面。
  - `pages/details/*.html`：10 个目的地详情页，复用统一版式。
- `assets/css/style.css`：站点全局样式与动画定义。
- `assets/js/main.js`：轮播、文字跑马灯、筛选按钮与基础交互逻辑。
- `doc/development-manual.md`：本手册。

## 开发约定
1. **样式**：统一使用 `style.css` 中的变量与栅格，新增组件请复用 `.container`、`.section`、`.grid`、`.card` 等通用类名。
2. **脚本**：仅依赖原生 JS，不引入外部框架。所有交互放在 `assets/js/main.js`，确保选择器存在判空处理。
3. **资源**：图片目前使用 Unsplash 远程地址，若需本地资源请放入 `assets/` 并使用相对路径引用。
4. **可访问性**：轮播按钮与关键链接需附带 `aria-label` 或可读文案。
5. **导航**：保持各页面导航一致，新增页面请在导航中补充对应链接。

## 运行与预览
无需构建步骤，直接用任何静态服务器打开根目录即可，例如：

```bash
python -m http.server 8000
```

浏览器访问 `http://localhost:8000` 查看效果。

## 继续扩展
- 可新增更多目的地详情页，复制 `pages/details/` 中任意文件并调整文案与图片。
- 如需引入表单或后台接口，请新建独立 JS 模块并在页面底部以 `<script>` 引用，保持命名语义化。
- 动画/交互新增时，请确保在移动端下仍保持流畅，必要时加入 `@media` 适配。
