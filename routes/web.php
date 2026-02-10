<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductTransactionController;

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

Route::name('reports.')->prefix('reports')->group(function(){
    Route::name('incoming-goods.')->prefix('/incoming-goods')->group(function(){
        Route::get('/', [ProductTransactionController::class, 'incomingGoodList'])->name('index');
        Route::post('/', [ProductTransactionController::class, 'incomingGoodStoreData'])->name('store');
        Route::get('/create', [ProductTransactionController::class, 'incomingGoodCreateView'])->name('create');
        Route::get('/{id}/edit', [ProductTransactionController::class, 'incomingGoodEditView'])->name('edit');
        Route::put('/{id}/update', [ProductTransactionController::class, 'incomingGoodUpdateData'])->name('update');
        Route::delete('/{id}/delete', [ProductTransactionController::class, 'incomingGoodDeleteData'])->name('destroy');
    });
    Route::name('outgoing-goods.')->prefix('/outgoing-goods')->group(function(){
        Route::get('/', [ProductTransactionController::class, 'outgoingGoodList'])->name('index');
        Route::post('/', [ProductTransactionController::class, 'outgoingGoodStoreData'])->name('store');
        Route::get('/create', [ProductTransactionController::class, 'outgoingGoodCreateView'])->name('create');
        Route::get('/{id}/edit', [ProductTransactionController::class, 'outgoingGoodEditView'])->name('edit');
        Route::put('/{id}/update', [ProductTransactionController::class, 'outgoingGoodUpdateData'])->name('update');
        Route::delete('/{id}/delete', [ProductTransactionController::class, 'outgoingGoodDeleteData'])->name('destroy');
    });
});
