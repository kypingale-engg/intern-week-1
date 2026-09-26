<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use Illuminate\Http\Request;

class ComplaintController extends Controller
{
    public function index()
    {
        return response()->json(
            Complaint::with('facility')->get()
        );
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'facility_id' => 'required|exists:facilities,id',
            'complainant_name' => 'required|string|max:255',
            'email' => 'nullable|email|max:255',
            'description' => 'required|string',
            'status' => 'nullable|string|max:50',
        ]);

        $complaint = Complaint::create($validated);

        return response()->json($complaint, 201);
    }

    public function show(Complaint $complaint)
    {
        return response()->json(
            $complaint->load('facility')
        );
    }

    public function update(Request $request, Complaint $complaint)
    {
        $validated = $request->validate([
            'facility_id' => 'sometimes|required|exists:facilities,id',
            'complainant_name' => 'sometimes|required|string|max:255',
            'email' => 'nullable|email|max:255',
            'description' => 'sometimes|required|string',
            'status' => 'nullable|string|max:50',
        ]);

        $complaint->update($validated);

        return response()->json($complaint);
    }

    public function destroy(Complaint $complaint)
    {
        $complaint->delete();

        return response()->json([
            'message' => 'Complaint deleted successfully'
        ]);
    }
}