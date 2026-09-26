<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inspection extends Model
{
    protected $fillable = [
        'facility_id',
        'employee_id',
        'inspection_date',
        'status',
        'remarks',
    ];

    protected $casts = [
        'inspection_date' => 'date',
    ];

    public function facility()
    {
        return $this->belongsTo(Facility::class);
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}