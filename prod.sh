echo "================="
echo "building production standalone app... => yarn build"
echo 
yarn build

echo "================="
echo "preparing folder .prod ... => rm -rf .prod && mkdir .prod"
rm -rf .prod && mkdir .prod

echo "================="
echo "copying .next/standalone to .prod ... => cp -r .next/standalone .prod/standalone"
cp -r .next/standalone .prod/standalone

echo "================="
echo "copying .next/static to .prod/.next/static ... => cp -r .next/static .prod/standalone/.next/static"
cp -r .next/static .prod/standalone/.next/static

echo "================="
echo "copying public to .prod/public ... => cp -r public .prod/standalone"
cp -r public .prod/standalone

echo "================="
echo "running the app... => pm2 start ./.prod/standalone/server.js or node ./.prod/standalone/server.js"
export PORT=4444 && pm2 start ./.prod/standalone/server.js


