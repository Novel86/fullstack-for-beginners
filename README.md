# fullstack-for-beginners

Вот структура **"Backend на Node.js + Express (REST API + MongoDB)"**:

---

# 🛠️ Backend на Node.js + Express + MongoDB

Учебный проект для начинающих: создание RESTful API с поддержкой CRUD-операций, подключением базы данных MongoDB и загрузкой файлов.

## 📚 Содержание

-  [Описание](#описание)
-  [Технологии](#технологии)
-  [Установка](#установка)
-  [Структура проекта](#структура-проекта)
-  [Скрипты](#скрипты)
-  [API Эндпоинты](#api-эндпоинты)
-  [Примеры запросов](#примеры-запросов)
-  [Обработка файлов](#обработка-файлов)
-  [Статические файлы](#статические-файлы)
-  [Ошибки и валидация](#ошибки-и-валидация)
-  [Дополнительно](#дополнительно)

---

## 📄 Описание

Проект демонстрирует:

-  Основы клиент-серверного взаимодействия
-  Работа с HTTP (GET, POST, PUT, DELETE)
-  Реализация RESTful API
-  CRUD-операции с постами
-  Подключение и работа с MongoDB (через Mongoose)
-  Загрузка и сохранение изображений
-  Разделение логики по слоям (контроллеры, сервисы, маршруты)

---

## 🚀 Технологии

-  Node.js
-  Express
-  MongoDB + Mongoose
-  Postman (для тестирования)
-  express-fileupload
-  uuid
-  nodemon

---

## ⚙️ Установка

```bash
git clone https://github.com/Novel86/fullstack-for-beginners.git
cd fullstack-for-beginners
npm install
```

````

Создайте `.env` файл и добавьте в него:

```env
PORT=5000
MONGODB_URL=mongodb+srv://<your-user>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
```

---

## 📁 Структура проекта

```
.
├── controllers/
│   └── post.controller.js
├── services/
│   ├── post.service.js
│   └── file.service.js
├── models/
│   └── post.js
├── routes/
│   └── post.router.js
├── uploads/               # Папка для загруженных файлов
├── .env
├── index.js
```

---

## 📜 Скрипты

```bash
npm start        # Запуск сервера
npm run dev      # Запуск с nodemon
```

---

## 📡 API Эндпоинты

| Метод  | Путь            | Описание            |
| ------ | --------------- | ------------------- |
| GET    | /api/posts      | Получить все посты  |
| GET    | /api/posts/\:id | Получить пост по ID |
| POST   | /api/posts      | Создать пост        |
| PUT    | /api/posts/\:id | Обновить пост по ID |
| DELETE | /api/posts/\:id | Удалить пост по ID  |

---

## 🔍 Примеры запросов

**Создание поста:**

```json
POST /api/posts
Content-Type: application/json

{
  "author": "John",
  "title": "Hello World",
  "content": "First post"
}
```

**Ответ:**

```json
{
	"_id": "...",
	"author": "John",
	"title": "Hello World",
	"content": "First post"
}
```

---

## 🖼️ Обработка файлов

-  Поддержка загрузки файлов (`multipart/form-data`)
-  Используется `express-fileupload`
-  Загруженные изображения сохраняются в папке `/uploads`

---

## 🌐 Статические файлы

Сервер раздаёт изображения по URL:

```
http://localhost:5000/uploads/<имя_файла>
```

---

## ⚠️ Ошибки и валидация

-  Возврат ошибок в формате JSON с кодами:

   -  400 — Неверный запрос
   -  404 — Не найдено
   -  500 — Внутренняя ошибка сервера

---

## 📦 Дополнительно

-  Можно расширить проект с помощью:

   -  JWT-аутентификации
   -  Сортировки и пагинации
   -  Ролевой модели доступа
````
