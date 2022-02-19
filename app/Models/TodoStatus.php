<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class TodoStatus extends Model
{
    use HasFactory;

    public $timestamps = false;

    const TODO = 1;
    const IN_PROGRESS = 2;
    const DONE = 3;

    public function todos(): HasOne
    {
        return $this->hasOne(Todo::class, 'status_id', 'id');
    }
}
