<?php

namespace App\Helpers\SearchFilterHelpers;

use App\Models\User;
use App\Models\UserLog;

class UserLogs {

    public function __construct()
    {
        $this->model = UserLog::query();
    }

    public function searchable()
    {
        // $this->searchColumns();
        $this->sortBy();
        $this->byUser();
        $per_page = Request()->per_page;
        if ($per_page=='-1' || !isset(Request()->per_page)) return $this->model->paginate($this->model->count());
        return $this->model->paginate($per_page);
    }

    public function byUser(){
        if(Request()->user_id){
            $this->model->where('user_id', Request()->user_id);
        }
    }

    // public function searchColumns()
    // {
    //     $searchable = ['name','email'];
    //     if(Request()->keyword && Request()->keyword!="null"){
    //         $keyword = Request()->keyword;
    //         foreach ($searchable as $column) {
    //             if($column=='name'){
    //                 $this->model->orWhereRaw("CONCAT(TRIM(`last_name`),' ', TRIM(`first_name`)) LIKE "."'%" .$keyword. "%'");
    //             }else{
    //                 $this->model->orWhere($column, 'like', "%".$keyword."%");
    //             }
    //         }
    //     }
    // }

    public function sortBy()
    {
        if(Request()->sortBy){
            $sortByFilters = explode(',', Request()->sortBy);
            foreach ($sortByFilters as $key => $filter) {
                if (empty($filter)) continue;

                $exactSortKey = explode('/', $filter)[0];
                $exactSortType = explode('/', $filter)[1];
                if($exactSortKey == 'level'){
                    $this->model->join('levels', 'levels.id', '=', 'courses.level_id')
                        ->select('levels.difficulty', 'courses.*')
                        ->orderBy('levels.difficulty', $exactSortType);
                }
                elseif($exactSortKey == 'fullname'){
                    $this->model->orderBy('last_name', $exactSortType);  
                }
                elseif($exactSortKey == 'dates'){
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