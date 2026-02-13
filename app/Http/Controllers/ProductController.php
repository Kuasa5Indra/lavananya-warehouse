<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\ProductRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all(['id','product_code', 'product_name', 'product_unit']);
        return Inertia::render('products/ProductsPage', [
            'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('products/CreateProductPage');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        $product = Product::create($request->validated());
        Inertia::flash(['status' => 'success', 'title' => 'Success', 'message' => 'Successfully create product']);
        return to_route('products.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = Product::find($id);
        return Inertia::render('products/EditProductPage', [
            'product' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $request, string $id)
    {
        $product = Product::find($id);
        $product->update($request->validated());
        Inertia::flash(['status' => 'success', 'title' => 'Success', 'message' => 'Successfully update product']);
        return to_route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);
        $product->delete();
        Inertia::flash(['status' => 'success', 'title' => 'Deleted', 'message' => 'Product has been deleted']);
        return to_route('products.index');
    }
}
