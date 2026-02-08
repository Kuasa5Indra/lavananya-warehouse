<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ProductController;

Route::get('/', function () {
    return to_route('login');
});

Route::get('/login', function () {
    return Inertia::render('auth/LoginPage');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('auth/RegisterPage');
})->name('register');

// Route::get('/template', function () {
//     return Inertia::render('template');
// });

Route::resource('products', ProductController::class)->except('show');
