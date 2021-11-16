### react-webpack-boilerplate

Proyecto básico con la configuración de **react-webpack-ts-sass-babel**

Paquetes básicos que hemos instalado:

- **[🗃️](https://emojipedia.org/card-file-box/) - ref:babel: @babel/cli - @babel/core - @babel/preset-env - @babel/preset-react - @babel/preset-typescript**
- **[🗃️](https://emojipedia.org/card-file-box/) - ref:react: @types/react - @types/react-dom**
- **[🗃️](https://emojipedia.org/card-file-box/) - ref:loaders: babel-loader - css-loader - html-loader - sass-loader - style-loader**
- **[🗃️](https://emojipedia.org/card-file-box/) - ref:plugins: clean-webpack-plugin - html-webpack-plugin - mini-css-extract-plugin**
- **[🗃️](https://emojipedia.org/card-file-box/) - ref:typescript:typescript**
- **[🗃️](https://emojipedia.org/card-file-box/) - ref:webpack: webpack - webpack-bundle-analyzer - webpack-cli - webpack-dev-server - webpack-merge - dotenv-webpack**

Arranque de proyecto:

```jsx
npm run start:dev
npm run start
```

Versión de dist:

```jsx
npm run build:prod
npm run build:dev
```

## How to install Husky:

Husky nos va a permitir lanzar una serie de **Hooks** cuando realicemos un **commit** o un **push** y comprobar si nuestros ficheros modificados siguen la estructura definida por las normas de **lintado**.

para añadir husky a nuestro boilerplate debemos de seguir los siguientes pasos:

- Instalar Husky: `**npm install —save-dev husky**`
- Instalar pretty-quick: `**npm install --save-dev pretty-quick**`
  Esto nos genera una carpeta .**husky** en la raíz de nuestro proyecto
- Ahora ejecutamos el siguiente comando: **`npx husky set .husky/pre-commit "npx pretty-quick --staged"`**
- En caso de querer añadir prepush: **`npx husky set .husky/pre-push "npx pretty-quick --staged"`**

La estructura de nuestra carpeta es:

```jsx
📁.husky
	|_ 📁_
			|_📄husky.sh
	|_ 📄.gitignore
	|_ 📄precommit
```

Y nuestro fichero **precommit**:

```jsx
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx pretty-quick --staged
npx lint-staged
```

\*Más info [click Me!](https://prettier.io/docs/en/precommit.html)
