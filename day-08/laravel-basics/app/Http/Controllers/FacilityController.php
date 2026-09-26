<?php

namespace App\Http\Controllers;

use App\Models\Facility;
use Illuminate\Http\Request;

class FacilityController extends Controller
{
    public function index()
    {
        return response()->json(Facility::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'department_id' => 'required|exists:departments,id',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'condition' => 'nullable|string|max:50',
            'is_available' => 'boolean',
        ]);

        $facility = Facility::create($validated);

        return response()->json($facility, 201);
    }

    public function show(Facility $facility)
    {
        return response()->json($facility);
    }

    public function update(Request $request, Facility $facility)
    {
        $validated = $request->validate([
            'department_id' => 'sometimes|required|exists:departments,id',
            'name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'condition' => 'nullable|string|max:50',
            'is_available' => 'boolean',
        ]);

        $facility->update($validated);

        return response()->json($facility);
    }

    public function destroy(Facility $facility)
    {
        $facility->delete();

        return response()->json([
            'message' => 'Facility deleted successfully'
        ]);
    }
}