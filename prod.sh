echo "================="
echo "building production app..."
yarn build

echo "================="
echo "preparing folder .prod ..."
rm -rf .prod && mkdir .prod

echo "================="
echo "copying .next/standalone to .prod ..."
cp -r .next/standalone .prod/standalone

echo "================="
echo "copying .next/static to .prod/.next/static ..."
cp -r .next/static .prod/standalone/.next/static

echo "================="
echo "copying public to .prod/public ..."
cp -r public .prod/standalone

echo "================="
echo "running the app..."
export PORT=4444 && node ./.prod/standalone/server.js


