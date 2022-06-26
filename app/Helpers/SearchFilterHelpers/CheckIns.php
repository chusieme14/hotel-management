<?php

namespace App\Helpers\SearchFilterHelpers;

use Carbon\Carbon;
use App\Models\CheckIn;

class CheckIns {

    public function __construct()
    {
        $this->model = CheckIn::query();
    }

    public function searchable()
    {
        // $this->sortBy();
        // $this->model->with('room_type');
        $this->model->with('room');
        $this->byRoom();
        $this->searchColumns();
        $per_page = Request()->per_page;
        if ($per_page=='-1' || !isset(Request()->per_page)) return $this->model->paginate($this->model->count());
        return $this->model->paginate($per_page);
    }

    public function searchColumns()
    {
        $searchable = ['client_name'];
        if(Request()->keyword && Request()->keyword!="null"){
            $keyword = Request()->keyword;
            foreach ($searchable as $column) {
                $this->model->where($column, 'like', "%".$keyword."%");
            }
        }
    }

    public function byRoom()
    {
        if(Request()->room){
            $this->model->where('room_id', Request()->room)->whereDate('start_date', '>', Carbon::now());
        }
    }

    public function sortBy()
    {
        if(Request()->sortBy){
            $sortByFilters = explode(',', Request()->sortBy);
            foreach ($sortByFilters as $key => $filter) {
                if (empty($filter)) continue;

                $exactSortKey = explode('/', $filter)[0];
                $exactSortType = explode('/', $filter)[1];
                if($exactSortKey == 'dates'){
                    $this->model->orderBy('date_from', $exactSortType);  
                }
                else{
                    $this->model->orderBy($exactSortKey, $exactSortType);  
                }       
            }
        }
        else{
            $this->model->orderBy('id', 'desc');
        }
    }
}