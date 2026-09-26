<?php

namespace App\Http\Controllers;

use App\Models\Inspection;
use Illuminate\Http\Request;

class InspectionController extends Controller
{
    public function index()
    {
        return response()->json(
            Inspection::with(['facility', 'employee'])->get()
        );
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'facility_id' => 'required|exists:facilities,id',
            'employee_id' => 'required|exists:employees,id',
            'inspection_date' => 'required|date',
            'status' => 'nullable|string|max:50',
            'remarks' => 'nullable|string',
        ]);

        $inspection = Inspection::create($validated);

        return response()->json($inspection, 201);
    }

    public function show(Inspection $inspection)
    {
        return response()->json(
            $inspection->load(['facility', 'employee'])
        );
    }

    public function update(Request $request, Inspection $inspection)
    {
        $validated = $request->validate([
            'facility_id' => 'sometimes|required|exists:facilities,id',
            'employee_id' => 'sometimes|required|exists:employees,id',
            'inspection_date' => 'sometimes|required|date',
            'status' => 'nullable|string|max:50',
            'remarks' => 'nullable|string',
        ]);

        $inspection->update($validated);

        return response()->json($inspection);
    }

    public function destroy(Inspection $inspection)
    {
        $inspection->delete();

        return response()->json([
            'message' => 'Inspection deleted successfully'
        ]);
    }
}