<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasUuids, SoftDeletes;

    protected $fillable = ['product_code', 'product_name', 'stock', 'product_unit'];

    public $incrementing = false;
    protected $keyType = 'string';

    // Buat generate product_code
    protected static function booted(): void
    {
        static::creating(function (Product $product) {
            $today = now()->format('Ymd'); // ambil tanggal hari ini
            $countToday = Product::withTrashed()->whereDate('created_at', now()->toDateString())->count();
            $nextNumber = $countToday + 1;
            $product->product_code = 'PRD-' . $today . '-' . $nextNumber;
        });
    }
}
