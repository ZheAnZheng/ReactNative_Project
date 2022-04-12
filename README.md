# ReactNative_Project
React-Native CLI建置，主要使用ios Simulator，以Line為模型的畫面。

## Task
1. (完成)用Reactnative建立基礎 APP完成以下功能 (ReactNative-Cli)
2. (完成)下方APP tab切換頁面
3. (完成)app選單點擊打開、收起
4. (完成)串接一組列表資料api，並可瀏覽
https://mocki.io/fake-json-api
5. (完成)程式架構盡可能做到你最滿意的方式並於readme說明
6. (完成)於readme寫下各項目進行的時間
7. (完成)說明IOS、Android的上架流程與注意事項，並以md檔案描述
8. (完成)上傳於 Github 提供

## 架構說明
透過資料夾來使用js，所以資料夾內都一概取名為index.js，依賴的style則是使用index.style.js，而在叫外層的index.js則是將巢狀的資料夾內的js匯集到同一個檔案，方便調用。

navigation的結構為TabNavigation為Root，在第一個位置放入ProfileStack
```
Navigation結構
- TabNavigation
  - ProfileStack
    - Home
    - Profile
  - Chat
  - Voom
  - Today
  - Wallet
```
Home 為顯示所有使用者資料，透過點擊Home內的使用者列表，進入ProfileStack的Profile screen

Home內包含`選單toggle`與`fetch API`功能，兩者都是使用自定義Hook實現。
  - 選單toggle 使用useHeaderRight Hook(useLayoutEffect加入選單Icon至header右方) 回傳 visible，給使用的component顯示需要的menu
  - fetch API 使用useFetch Hook 回傳 data，參數是url，複用性高。
  
## 花費時間
( 5hr ) 閱讀react-native官方文件,react-navigation官方文件,react-native ,folder structure教學影片 

( 2hr ) 環境建置

( 4hr ) 建立tabNavigation 建立所需基礎tabScreen 

( 3hr ) 建立StackNavigation 建立所需基礎ProfileScreen

( 1hr ) 建立Home headerRight 選單功能 

( 3hr ) 建立Home介面 FlatList ,Profile介面 ,串接Mock API

( 2hr ) 整理code
 
## folder structure
```
src
  - components 
  - styles
  - screens
  - constant
  - navigation
  - hooks
  
```
`components folder`:存放單位較小的元件

`styles folder`: 定義共用樣式

`screens folder`: 存放單位為一個頁面的元件

`constant folder`: 存常數變量

`navigation folder`:存放導覽的邏輯

`hooks folder`:存放自定義hooks

## Android and Ios 上架流程
android
- 需要擁有google console帳號
- 準備App Icon
- 建立KeyStore，透過key來更新Play Store上的應用程式
- Bundle前要確認版本號碼，Build完得到APK
- google console建立應用程式，填寫資料及設定，完成後發布

ios
- 需要付費帳號(才能上架App)
- 登入App Store Connect建立App
- 設定App資料(基本資訊,Id , 語言,副標 ,價格,分類,上架國家 ,版本,分級)
- 設定上架個人帳號(Apple Id , 密碼)
- Bundle App前檢查版本號碼一致
- Xcode Product>Archive包裝App，建立憑證，上傳
- 將App送審
