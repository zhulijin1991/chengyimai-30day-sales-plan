# 诚意卖30日销售推进方案

在线查看：https://zhulijin1991.github.io/chengyimai-30day-sales-plan/

本仓库的 `index.html` 是方案的维护入口，包含页面及四个默认折叠的交互原型。

后续修改直接更新本仓库，提交并推送到 `main`，由自定义 GitHub Actions 工作流 `.github/workflows/pages.yml` 自动发布到上面的固定链接。桌面副本已停用。

发布源在仓库 Settings → Pages 中设为 GitHub Actions。工作流仅打包 `index.html`、`.nojekyll` 和自动生成的 `deployment.json`，使用标准 Ubuntu 运行器；发布产物保留 1 天。也可以从 Actions 页面手动运行。

更新后检查对应提交的工作流成功，再核对线上 `deployment.json` 中的提交编号、页面 SHA-256，以及实际网页。链接保持不变。
