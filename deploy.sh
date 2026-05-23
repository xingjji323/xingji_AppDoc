set -e
echo "deploy start"
npm run docs:build
cd public
git init
git add -A
git commit -m "deploy"

git push -f git@210.36.22.245:~/project.git master
cd -

echo "deploy success"