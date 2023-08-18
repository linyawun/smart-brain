# Smart Brain
![image](https://i.imgur.com/gLQjCMn.jpg)
> 此專案為臉部辨識網頁，使用者可註冊與登入，並上傳含有人臉的照片，網頁會呼叫 clarifai API 來辨識並圈出人臉。

- [線上觀看連結](https://linyawun.github.io/smart-brain/)

## 功能 
- [x] 註冊
- [x] 登入
- [x] 登出
- [x] 辨識人臉照片 

## 畫面
- 註冊頁
![image](https://i.imgur.com/GdBp1Sq.jpg)
- 人臉辨識
![image](https://i.imgur.com/RiS6LPI.jpg)

## 安裝
以下將會引導你如何安裝此專案到你的電腦上。
> 請先安裝 [Node.js](https://nodejs.org/zh-tw/download)，Node.js 版本建議為：`18.12.0` 以上
### 取得專案
```bash
git clone https://github.com/linyawun/smart-brain.git
```
### 移動到專案內
```bash
cd smart-brain
```
### 安裝套件
```bash
npm install
```
### 運行專案
```bash
npm start
```
### 開啟專案
在瀏覽器網址列輸入以下即可看到畫面
```
http://localhost:8000/
```

## 資料夾說明
- public - 靜態檔案放置處
- src
  - assets - 圖片放置處
  - components - React 元件放置處，依元件拆分資料夾
    - FacRecognition
    - Form
    - ImageLinkForm
    - Logo
    - Navigation
    - Rank
    - Register
    - Signin

## 專案技術
- Node.js v18.12.0
- React v18.2.0
- tachyons v4.12.0
- particles-bg v2.5.5
- react-parallax-tilt v1.7.150

## 聯絡作者
你可以透過以下方式與我聯絡
- email: linyawun031@gmail.com
