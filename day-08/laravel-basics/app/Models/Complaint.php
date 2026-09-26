<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Complaint extends Model
{
    protected $fillable = [
        'facility_id',
        'complainant_name',
        'email',
        'description',
        'status',
    ];

    public function facility()
    {
        return $this->belongsTo(Facility::class);
    }
}