<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

class Todo extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'status_id',
        'firstname',
        'deadline_date'
    ];

    protected function deadlineDate(): Attribute
    {
        return new Attribute(
            get: fn($value) => $value,
            set: fn($value) => new Carbon($value),
        );
    }

    public function getStatusNameById($id): string
    {
        return TodoStatus::find($id)->name;
    }

    public function statuses(): BelongsTo
    {
        return $this->belongsTo(TodoStatus::class, 'status_id', 'id');
    }

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

}
