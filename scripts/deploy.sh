set -e
npm run build

cd ../.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:wangdabaoqq/documents.git master:gh-pages

# git push -f git@git.coding.net:recoluan/vuepress-theme-reco-doc.git master

cd -
# rm -rf public