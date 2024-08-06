///////////////////////////////////////////////////////////////

#React 学習用サンプルアプリについて

⓪ 概要
ESTATS(政府統計ポータルサイト)、日本郵便から API を呼び出し、
画面に表示を行う。

画面数：4 画面
作成したコンポーネント：10 コンポート
DB：なし
テストクラス：全て作成することまではできなかったのですが、chatGPT やサイトを見ながら実装しております。

① 機能について
4 つの機能を中心に実装しました。
・ログイン機能
→ID と PASS が一致していたら遷移する機能を実装しました。
・ホーム画面機能
→ 各遷移先を用意し、ログイン機能と他画面を繋ぐ役割を作成いたしました。
ユーザー情報ボタンに関しては TODO として今後実装したいと考えております。
・ESTATS 情報取得機能
→ESTAS API から東京都 65 歳以上の割合の取得を行い、グラフで表示する機能を実装しました。CORS エラー回避のため、Node.js サーバーを別で作成し回避することが出来ました。

・郵便番号から住所取得機能
→ テキスト欄に郵便番号を入力し、住所を表示する機能を実装しました。

② 意識した箇所
・useState,props のバケツリレー,CSS を Emotion で当てる方法、カスタムフックス
など習ったものを使用することを意識しました。

・デザイン向上のため、ヘッダーとフッターをログイン以降どの画面からでも同じ位置に表示できるよう実装をし、意識しました。また、MUI ライブラリを使用し、コンポーネントのテキストやボタンのデザインを改善できるよう取り組むことができました。

・Jest を使用したテストクラスを作成し、実際にコンポーネントをテストする際の流れについて学ぶことができました。しかし、axios を使用したクラスのテストが実施できなかった為、こちらについてはしっかり検討したいと考えております。(ESM（ECMAScript Modules）形式の import 文をサポートしていないため)

///////////////////////////////////////////////////////////////

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
