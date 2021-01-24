# アプリ名どーん（まだ未定）

## 開発手順
1. 必要なライブラリをインストール

```shell
yarn
```

2. 開発サーバーを立ち上げる

```shell
yarn dev
```

この状態で[http://localhost:8000](http://localhost:8000)にアクセス

## ScaffDog
`components`や`containers`に新規でコンポーネントを追加する時には以下のコマンドを叩いてベースを自動生成すると楽だよ！

### `component`を作成する時
```shell
 yarn generate:component
```

### `container`を作成する時
```shell
 yarn generate:container
```

## これから勉強するといいよリスト
### `1.データ表示までの流れ`
`/src/pages`部分のソースリーディングをしよう！

#### **参考になるかもリンク**
- [next.js 非公式和訳サイト](https://nextjs-ja-translation-docs.vercel.app/docs/basic-features/pages)

#### **キーワード**
- CSR
- SSR
- getServerSideProps

--------


### `2.コンポーネント`
- `/src/components`
- `/src/containers`

部分のソースリーディングをしよう！

#### **参考になるかもリンク**
- [styled-componentの簡単な使い方](https://www.fundely.co.jp/blog/tech/2020/09/16/180026/)

#### **キーワード**
- styled-components

--------

### `3.Redux`
- `/src/store`
- `/src/reducers`
- `/src/actions`

部分のソースリーディングをしよう！(ここの部分はトレーナーから教えてもらったほうが理解が早いかも)~~（かいとも最初の方は全く理解できなかったですw）~~

#### **参考になるかもリンク**
- [redux 入門](https://qiita.com/kitagawamac/items/49a1f03445b19cf407b7)
- [redux 公式](https://redux.js.org/)
- [next.js + redux example](https://github.com/vercel/next.js/tree/master/examples/with-redux-thunk)
- [Reactの流儀](https://ja.reactjs.org/docs/thinking-in-react.html)

#### **キーワード**
- redux
- redux-thunk
- 単方向データフロー

--------

# Main libraries
## Dependencies
| Name              | Purpose                                         |
| ----------------- | ----------------------------------------------- |
| react             | 省略                                            |
| next              | 省略                                            |
| redux             | 単方向データフローなstate containerを提供する   |
| redux-thunk       | reduxにおける非同期処理を担ってくれるmiddleware |
| styled-components | CSS-in-JS                                       |
| isomorphic-fetch  | SSR時にもfetchを行ってくれる                    |

## DevDependencies
| Name       | Purpose                               |
| ---------- | ------------------------------------- |
| typescript | typescriptはいいぞ（？）              |
| webpack    | モジュールバンドラー                  |
| babel      | polyfill / codemods                   |
| eslint     | linter                                |
| prettier   | formatter                             |
| scaffdog   | scaffoldツール                        |
