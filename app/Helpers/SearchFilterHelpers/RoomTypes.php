<?php

namespace App\Helpers\SearchFilterHelpers;

use App\Models\RoomType;

class RoomTypes {

    public function __construct()
    {
        $this->model = RoomType::query();
    }

    public function searchable()
    {
        $this->model->with('rooms');
        $this->searchColumns();
        $this->sortBy();
        $per_page = Request()->per_page;
        if ($per_page=='-1' || !isset(Request()->per_page)) return $this->model->paginate($this->model->count());
        return $this->model->paginate($per_page);
    }

    public function searchColumns()
    {
        $searchable = ['type'];
        if(Request()->keyword && Request()->keyword!="null"){
            $keyword = Request()->keyword;
            foreach ($searchable as $column) {
                $this->model->orWhere($column, 'like', "%".$keyword."%");
            }
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