<?php

namespace App\Helpers\SearchFilterHelpers;

use App\Models\Reservation;
use Carbon\Carbon;

class Reservations {

    public function __construct()
    {
        $this->model = Reservation::query();
    }

    public function searchable()
    {
        $this->model->with('room_type');
        $this->searchColumns();
        $this->sortBy();
        $this->byStatus();
        $this->byStartDate();
        $this->byRoomType();
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
                $this->model->orWhere($column, 'like', "%".$keyword."%");
            }
        }
    }

    public function byStatus()
    {
        if(Request()->status){
            $this->model->where('status',Request()->status);
        }
    }

    public function byStartDate()
    {
        if(Request()->start_date){
            $this->model->whereDate('start_date',Carbon::parse(Request()->start_date));
        }
    }

    public function byRoomType()
    {
        if(Request()->room_type_id){
            $this->model->where('room_type_id',Request()->room_type_id);
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
            $this->model->orderBy('start_date');
        }
    }
}