# Lavananya Warehouse (Inventory Management System)

#### Prerequisites
- PHP 8.2+
- Composer
- Node.js & npm
- MySQL

#### Steps
Clone this repository and install all package using composer and npm. Dont forget copy `.env` from `.env.example` and generate key
```bash
git clone https://github.com/Kuasa5Indra/lavananya-warehouse.git
cd lavananya-warehouse

composer install
npm install

cp .env.example .env
php artisan key:generate
```

If you want to use **MySQL**, make the database called `lavananya_warehouse` then update `.env`
```.env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=lavananya_warehouse
DB_USERNAME=root
DB_PASSWORD=
```

After that run these command to migrate data to database and generate typescript routes

```bash
php artisan migrate
php artisan wayfinder:generate
```

Then run application
```bash
composer run dev 
# Then access this link http://127.0.0.1:8000
```
