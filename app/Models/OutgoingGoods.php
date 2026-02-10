<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OutgoingGoods extends Model
{
    use HasUlids;

    protected $fillable = ['product_id', 'amount', 'date_export', 'annotation'];

    public $incrementing = false;
    protected $keyType = 'string';

    public function product(): BelongsTo {
        return $this->belongsTo(Product::class);
    }
}
