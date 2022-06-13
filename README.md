## == 一定要先切到dev再建立自己的分支!!!!==


### 開啟專案
1. git clone    
2. npm install   
3. npm start   
4. 開啟 http://localhost:3000

### 建立分支

main 主分支
dev 測試分支 (到時大家做完會先在這裡統整沒問題才會merge到main)

```

git branch feature/{fav}   --> 建自己的分支 ex: { 自己取名 }  fav收藏頁
git switch feature/fav     --> 移動到此分支
git fetch origin main      --> 抓main分支的資料(共用的css等等)
git merge origin/main      --> merge進你的分支

git push --set-upstream origin {自己分支的名稱}   --> 將本機新建好的分支，第一次要push上github時，要打的指令
git clone -b {分支名稱} {分支網址}   --> 從遠端github拉特定分支，到本機裡。

```

### 建立檔案

src/ pages/ {Fav.js }    --> 檔名必大寫

在 src/styles 裡面建立屬於自己的css or scss 
ex: _fav.css  --> 要加底線喔! 表示被import的檔
然後 import './_global.css' (共同的)
即可直接使用共同的css樣式


在Index.js import './styles/_fav.css' --> 自己的css檔

## 關於Styles
index.scss 只用來連結檔案  
其餘的scss統一前綴加_ 表示是被import的檔案  
/styles/_variables  
放變數  
1.可延用或依照個人習慣自行新增  
2.已經有引入boostrap scss 可自行更改變數(記得放在boostrap scss上面)  
/styles/_global  
1.放全域樣式  
2.可延用或依照個人習慣自行新增  
3.已經寫好的mixin可以直接include 就不用自己寫字體樣式  


## 命名方式

1. 變數名稱

- 小駝峰(小＋大)
    ex: windSpeed
    
- 變數命名方式：
```javascript=
const [變數名稱 , 設定變數名稱的方法] = useState(預設值);
const [windSpeed , setWindSpeed] = useState(0);
```
2. 函式名稱:

    因為React Component 函式組件 
    —> 首字母都要大寫
    所以首字母大寫＋大寫
- 大駝峰(大＋大)
    ex: WindSpeed 
    
    
3. 資料庫欄位名稱：
    尚未建置的資料表：
    (主要資料表) -> 部落格、展覽、課程
    
    資料庫設計-正規化與反正規化：
    https://jamie-life-coding.site/2021/09/database-normalization-pros-cons/
    
    一律小寫然後用兩個詞以上就用**底線**隔開
    
     &nbsp; &nbsp;![](https://i.imgur.com/mwuhjcY.jpg)
     
4. 檔案名稱：
- 大駝峰(大＋大)

    首字母大寫＋大寫
    ex: WindSpeed

    &nbsp; &nbsp;![](https://i.imgur.com/WSyFq7n.jpg)
    
5. 資料夾名稱：
- 大駝峰(大＋大)
    首字母大寫
    命名隨意（但要有意義,別人看得懂）

    &nbsp; &nbsp;![](https://i.imgur.com/uvXxk6g.jpg)
    
6. Git flow; Git Branch名稱：

    Git flow參考文章：
    https://gitbook.tw/chapters/gitflow/why-need-git-flow
    如何使用：
    https://gitbook.tw/chapters/gitflow/using-git-flow
    
    ![](https://i.imgur.com/LO07k7Z.jpg)

    Git Branch是固定的
    
    develop
    feature/ Member 大寫 

    切版分支這樣開: 
    feature/Layout/自訂的Component or Page名稱
    切版完成後merge回 feature/Layouts 

7. html內class名稱、id名稱
    全部小寫，底線隔開2個詞
    ```
    <li id=wind_speed" class="wind_speed"> <li>
    ```