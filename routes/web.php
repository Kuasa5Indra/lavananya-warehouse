<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/login', function () {
    return Inertia::render('auth/LoginPage');
});

Route::get('/register', function () {
    return Inertia::render('auth/RegisterPage');
});

Route::get('/template', function () {
    return Inertia::render('template');
});
