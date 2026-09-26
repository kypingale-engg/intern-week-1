<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    protected $fillable = [
        'department_id',
        'name',
        'description',
        'condition',
        'is_available',
    ];

    protected $casts = [
        'is_available' => 'boolean',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function inspections()
    {
        return $this->hasMany(Inspection::class);
    }

    public function complaints()
    {
        return $this->hasMany(Complaint::class);
    }
}