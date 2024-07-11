# 🚧 工事中 🚧
<div class="alert px-4" style="border: 2px solid red; padding: 10px; background-color: #ffcccb;">
  未完成状態です。
</div>
<hr/>

# 学習状況管理WebApp

<table>
  <tr>
    <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FZKvsE32aTcrEGuSiAx-jex6S164CtQv7w&s" width="200" height="200"></td>
    <td><img src="https://go.genzouw.com/wp-content/uploads/2023/03/color.png" width="200" height="200"></td>
    <td><img src="https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjplnld3gptkremcqom5q.png" width="200" height="200"></td>
    <td><img src="https://mui.com/static/logo.png" width="200" height="200"></td>
  </tr>
</table>


## 開発環境起動方法
### 1. `.env`ファイルの作成
```bash:backend/.env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=lms_app
```
```bash:frontend/.env
# バックエンドのベースURL
REACT_APP_API_BASE_URL=http://localhost:8080
```

### 起動

```powershell:バックエンド
cd ./backend/
go run main.go
```
```powershell:フロントエンド
cd ./frontend/
npm install
npm run start
```

