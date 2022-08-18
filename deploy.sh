# 实现打包并推送到Gitee远程仓库分支


set -e

# npm run docs:build

# cd docs/.vitepress/dist

# git操作
git init 
git add -A
git commit -m 'gitee actions Deployment complete '
# 强制推送
# git push -f https://gitee.com/Earthb0y/docs.git master:gh-pages
#  git push -f  https://github.com/Ekarmore/ekar.git 
git remote add origin https://github.com/Ekarmore/ekar.git
git branch -M main
git push -f origin main
# 退出目录
# cd - 
# 删除dist
# rm -rf docs/.vitepress/dist