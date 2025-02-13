<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MembresController;
use App\Http\Controllers\EvenementController;
use App\Http\Controllers\GalerieController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);



Route::get('/evenements', [EvenementController::class, 'index']);
Route::post('/evenements', [EvenementController::class, 'store']);
Route::put('/evenements/{id}', [EvenementController::class, 'update']); 
Route::delete('/evenements/{id}', [EvenementController::class, 'destroy']); 

Route::prefix('members')->group(function () {
    Route::get('/', [MembresController::class, 'index']);
    Route::post('/', [MembresController::class, 'store']);
    Route::put('/{id}', [MembresController::class, 'update']);
    Route::delete('/{id}', [MembresController::class, 'destroy']);
});

Route::get('/evenements-passes',[EvenementController::class,'getEvenementsPasses']);
Route::get('/evenements-venir',[EvenementController::class,'getEvenementsAVenir']);
Route::get('/recent-evenements',[EvenementController::class,'getRecentEvenements']);


Route::get('/galerie', [GalerieController::class, 'index']);
Route::post('/galerie', [GalerieController::class, 'store']);
Route::delete('/galerie/{id}', [GalerieController::class, 'destroy']); 