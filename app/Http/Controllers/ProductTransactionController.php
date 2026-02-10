<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\IncomingGoods;
use App\Models\OutgoingGoods;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use App\Http\Requests\IncomingGoodsRequest;
use App\Http\Requests\OutgoingGoodsRequest;

class ProductTransactionController extends Controller
{
    public function incomingGoodList(){
        $reports = IncomingGoods::with('product')->get();
        return Inertia::render('incoming-goods/IncomingGoodsPage', [
            'reports' => $reports
        ]);
    }

    public function incomingGoodCreateView(){
        $products = Product::all();
        return Inertia::render('incoming-goods/CreateIncomingGoodsPage', [
            'products' => $products
        ]);
    }

    public function incomingGoodStoreData(IncomingGoodsRequest $request){
        try {
            DB::beginTransaction();
            $product = Product::find($request->validated('product_id'));
            $transaction = IncomingGoods::create($request->validated());
            $product->update([
                'stock' => $product->stock + $request->validated('amount')
            ]);
            DB::commit();
            return to_route('reports.incoming-goods.index');
        } catch (QueryException $ex) {
            DB::rollBack();
            return Inertia::flash(['status' => 'error', 'title' => 'Error', 'messsage' => $ex->getMessage()])->back();
        }
    }

    public function incomingGoodEditView(string $id){
        $products = Product::all();
        $report = IncomingGoods::find($id);
        return Inertia::render('incoming-goods/EditIncomingGoodsPage', [
            'products' => $products,
            'report' => $report
        ]);
    }

    public function incomingGoodUpdateData(IncomingGoodsRequest $request, string $id){
        try {
            DB::beginTransaction();
            $report = IncomingGoods::find($id);
            $product = Product::find($report->product_id);
            $diffValue = $request->validated('amount') - $report->amount;
            $product->update([
                'stock' => $product->stock + $diffValue
            ]);
            $report->update($request->validated());
            DB::commit();
            return to_route('reports.incoming-goods.index');
        } catch (QueryException $ex) {
            DB::rollBack();
            return Inertia::flash(['status' => 'error', 'title' => 'Error', 'messsage' => $ex->getMessage()])->back();
        }
    }

    public function incomingGoodDeleteData(string $id){
        try {
            DB::beginTransaction();
            $report = IncomingGoods::find($id);
            $product = Product::find($report->product_id);
            $product->update([
                'stock' => $product->stock - $report->amount
            ]);
            $report->delete();
            DB::commit();
            return to_route('reports.incoming-goods.index');
        } catch (QueryException $ex) {
            DB::rollBack();
            return Inertia::flash(['status' => 'error', 'title' => 'Error', 'messsage' => $ex->getMessage()])->back();
        }
    }

    public function outgoingGoodList(){
        $reports = OutgoingGoods::with('product')->get();
        return Inertia::render('outgoing-goods/OutgoingGoodsPage', [
            'reports' => $reports
        ]);
    }

    public function outgoingGoodCreateView(){
        $products = Product::all();
        return Inertia::render('outgoing-goods/CreateOutgoingGoodsPage', [
            'products' => $products
        ]);
    }

    public function outgoingGoodStoreData(OutgoingGoodsRequest $request){
        try {
            DB::beginTransaction();
            $product = Product::find($request->validated('product_id'));
            $transaction = OutgoingGoods::create($request->validated());

            // Cek apakah stok dikurangi request barang keluar akan menghasilkan negatif stok atau tidak
            if($product->stock - $request->validated('amount') < 0){
                return Inertia::flash(['status' => 'error', 'title' => 'Error', 'messsage' => 'Sorry, not enough stock for this report'])->back();
            }

            $product->update([
                'stock' => $product->stock - $request->validated('amount')
            ]);
            DB::commit();
            return to_route('reports.outgoing-goods.index');
        } catch (QueryException $ex) {
            DB::rollBack();
            return Inertia::flash(['status' => 'error', 'title' => 'Error', 'messsage' => $ex->getMessage()])->back();
        }
    }

    public function outgoingGoodEditView(string $id){
        $products = Product::all();
        $report = OutgoingGoods::find($id);
        return Inertia::render('outgoing-goods/EditOutgoingGoodsPage', [
            'products' => $products,
            'report' => $report
        ]);
    }

    public function outgoingGoodUpdateData(OutgoingGoodsRequest $request, string $id){
        try {
            DB::beginTransaction();
            $report = OutgoingGoods::find($id);
            $product = Product::find($report->product_id);
            $diffValue = $request->validated('amount') - $report->amount;

            // Cek apakah stok dikurangi request barang keluar akan menghasilkan negatif stok atau tidak
            if($product->stock - $diffValue < 0){
                return Inertia::flash(['status' => 'error', 'title' => 'Error', 'messsage' => 'Sorry, not enough stock for this report'])->back();
            }

            $product->update([
                'stock' => $product->stock - $diffValue
            ]);
            $report->update($request->validated());
            DB::commit();
            return to_route('reports.outgoing-goods.index');
        } catch (QueryException $ex) {
            DB::rollBack();
            return Inertia::flash(['status' => 'error', 'title' => 'Error', 'messsage' => $ex->getMessage()])->back();
        }

    }

    public function outgoingGoodDeleteData(string $id){
        try {
            DB::beginTransaction();
            $report = OutgoingGoods::find($id);
            $product = Product::find($report->product_id);
            $product->update([
                'stock' => $product->stock + $report->amount
            ]);
            $report->delete();
            DB::commit();
            return to_route('reports.outgoing-goods.index');
        } catch (QueryException $ex) {
            DB::rollBack();
            return Inertia::flash(['status' => 'error', 'title' => 'Error', 'messsage' => $ex->getMessage()])->back();
        }
    }

    public function stockReports(){
        $products = Product::with(['latestIncomingGoods', 'latestOutgoingGoods'])->get();
        return Inertia::render('stock-report/StockReportPage', [
            'products' => $products
        ]);
    }

    public function detailStockReport(string $id){
        $product = Product::with(['incomingGoods', 'outgoingGoods'])->find($id);
        return Inertia::render('stock-report/DetailStockReportPage', [
            'product' => $product
        ]);
    }
}
