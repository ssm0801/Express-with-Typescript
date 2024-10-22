# Express + Typescript

## Install required packages

```bash
npm i -D @types/node @types/express @types/dotenv nodemon typescript ts-node
```

## Change files extension

If you have .js files already created then rename all to .ts

## Configure Typescript

Run below command to create tsconfig.json

```bash
npx tsc --init
```

And paste below configuration in tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "baseUrl": "src",
    "outDir": "dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## Update package.json

If you dont want to configure nodemon then directly update the dev script in package.json

```json
{
  "scripts": {
    "dev": "nodemon ./src/index.ts",
    "build": "npx tsc"
  }
}
```

## Nodemon configuration [optional]

If you are using nodemon for development then create nodemon.json in root directory and paste below configuration in it

```json
{
  "watch": ["src", ".env"],
  "ext": "js,ts,json",
  "ignore": ["node_modules", "dist"],
  "exec": "ts-node --transpile-only  ./src/index.ts"
}
```

## Update package.json

If you have configured nodemon as per above configuration then only update dev script

```json
{
  "scripts": {
    "dev": "nodemon --watch",
    "build": "npx tsc"
  }
}
```

Don't add `"type": "module"` in package.json

## Final

Run the project using `npm run dev`
