# reactnative-expo-news-app

reactnative で「web ブラウザ、android」で起動できるニュースアプリの作成

## プロジェクトの作成

### 初回のみ

- ターミナルを開く
- expo cli インストール(初回のみ)

```
$ npm install expo-cli --global
```

- expo アカウント作成(初回のみ)

- android stadio のインストール

- android stadio でデバイスの追加

### 二度目以降

- ターミナルを開く
- expo にログイン

```
$ expo login
```

- プロジェクトの作成(今回は 学習用に blank を選択)

```
$ expo init reactnative-expo-news-app
$ cd reactnative-expo-news-app
```

- 起動

```
$ npm start
```

- キャッシュをクリアして起動

```
$ expo start -c
```

- ブラウザで対応したデバイスを選択

```
Run on Android device/emulator
Run on iOS simulator
Run in web browser
```

## 補足

### 詰まったところ

SafeAreaView を使えばいい感じに Top がパディングされると思っていたが、
androidOS は非対応みたいだった。(公式でも with iOS version 11 or later とかかれていた)
そのため`paddingTop: Platform.OS === 'android' ? 25 : 0`で判定し、パディングする。

> [公式] https://reactnative.dev/docs/safeareaview

> [stackoberflow] https://stackoverflow.com/questions/51289587/react-native-how-to-use-safeareaview-for-android-notch-devices/55017347

### dummy データ

- picsum モックデータ
  > https://picsum.photos/
- Lorem_ipsum
  > https://ja.wikipedia.org/wiki/Lorem_ipsum

### 使用 API

- newsAPI
  > https://newsapi.org/

### アプリ作成でのいろいろ

react には`function component`と`class component`の 2 種類の記載方法が存在する

- function component
  現在では推奨されていて、公式でもよく使われている
  Hooks の導入から State を扱えるようになった(useState, useEffect)

- class component
  State, ライフサイクル(ComponentDidMount など)を使えると言われていたが、Hooks の導入からその差はなくなっている。
  記述をシンプルにかける、動作が少し早い？を言われている。

#### Expo(ReactNative) の API

- expo
  > https://docs.expo.io/
- react native

  > https://reactnative.dev/docs/getting-started

- FlatList
  スクロール可能のリストを読み込む

- SafeAreaView
  アプリに余白エリアを入れた表示をする

- TouchavleOpacity
  タッチイベント

- webView
  webUrl から サイトを表示

#### React Navigation

> https://reactnavigation.org/

- インストール

```
$ npm install @react-navigation/native
```

- Expo managed project のため以下をインストール

```
$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

- 今後使うため stackNavigator をインストール

```
$ npm install @react-navigation/stack
```

- Hello React Navigation

Navigator からの表示まで

- Moving between screens

画面の遷移の書き方

- Passing parameters to routes
  画面間のパラメータの受け渡し

- createBottomTabNavigator
  下に TAB ナビゲーションを表示

#### Hook の導入(function コンポーネント)

フック (hook) は React 16.8 で追加された新機能です。
state などの React の機能を、クラスを書かずに使えるようになります。
function コンポネントで書くことを推奨されている。
React Native は React Native 0.59 リリース以降でフックをサポートします。

- useState
  function コンポーネントで state などの機能を使うことができる。

- useEffect
  デフォルトではレンダーが終了した後に関数が毎回動作します。
  特定の値が変化した時のみ動作させるようにすることもできます。

#### Expo

- expo-constants
  app.json に記載することで定数が使える
  > https://docs.expo.io/workflow/configuration/

#### コンポーネントについて

適切な粒度の component に分ける

1. 可読性 再利用性  
   => JSX で見た目を定義
2. Props  
   => 性質、不変(例は性別など)  
   => 親コンポーネントから値を渡す
3. State  
   => 状態、可変(例はお腹の空き具合など)  
   => State を更新することで画面が更新される

### Redux

- Store の内容を Storage に保存
  redux でアプリを落とすと、store の内容がクリアされてしまう。
  => これはメモリに保存されているため、アプリが落ちるとデータが消えてしまう。
  => ストレージに保存することでデータを保持したままにすることができる
  以下のライブラリを使うことでストレージ保存が可能となる。
  > https://github.com/rt2zz/redux-persist

### React Native

- Facebook の開発した iOS と Android を一度に開発できるクロスプラットフォームフレームワーク
- Javascript Typescript で記述可能
- React の作法に則っている

React Native => iOS
React Native => Android
上記のように React Native が iOS,Android を吸収してくれる
Expo は React Native をさらに包み込んでくれる

#### React Native で作られたアプリ

- Facebook
- Instagram
- Skype
- Bloomberg
- F8
- Pinterest

#### 開発方法

2 種類の開発方法がある

- Expo 使う
- Expo 使わない

#### Expo

`For managed apps`:Expo で使える
`bare workflow`:Expo で使えない
`pod`や`Xcode`などの編集を促す npm は使えない

> https://docs.expo.io/

- React Native をさらにお手軽にするツール
- OTA アップデータ、クラウドビルドなどのメリット
- 作れるものに制限がある

##### メリット

1. 変更をリアルタイム反映  
   => コードの変更を監視し、変更があればビルドする  
   最新の JS をバンドル反映
2. Apple 審査なしでアップデート
   => 最新の JS バンドルがアップロードされ、アプリ起動時に最新 JS バンドルに自動で差し替え
3. 本番のビルドがコマンド 1 つで完結  
   => `expo build ios`,`expo build android`

##### デメリット

1. native モジュールを使えない  
   => Expo が提供している API のみ使用可能、サードパーティ製 npm モジュールには使えないものもある、natibeSDK を使えない  
   (アプリ内課金、 Bluetooth、　サードパーティ npm 設計)
2. Expo をやめたい場合に eject しないといけない  
   => eject したときに癖のあるプロジェクトとなる、戻すことができない(途中から始めれない)

##### Expo のプロジェクト作成の説明

npm start(expo start)しているとホットリロードされる
`App.js`: アプリケーション起動時に起動される
`app.json`: アプリの設定がまとめられている(アプリ名,sdk バージョン,アイコンなど)

プロジェクトの作成時に選択画面が出るので、どこから始めたいかで選択が変わる
今回は blank(Managed workflow)を選択
`Managed workflow`:expo がサポートしてお手軽に作成
`Bare workflow`:expo のサポートなし
`blank`:真っ白な画面からスタート
`tabs`:画面の下に 3 つのタブがある状態からスタート

```
  ----- Managed workflow -----
> blank                 a minimal app as clean as an empty canvas
  blank (TypeScript)    same as blank but with TypeScript configuration
  tabs (TypeScript)     several example screens and tabs using react-navigation and TypeScript
  ----- Bare workflow -----
  minimal               bare and minimal, just the essentials to get you started
  minimal (TypeScript)  same as minimal but with TypeScript configuration
```

### 他の開発方法と比較

以下 2 点が前提条件

- スマホ向けサービスを作りたい
- ストアに公開したい

iOS/Android エンジニアがいる => Swift,Kotlin
iOS/Android エンジニアがいない => ネイティブの特定の SDK や機能を使いたい => React Native
iOS/Android エンジニアがいない => ネイティブの特定の SDK や機能を使わなくてよい => Expo + React Native
