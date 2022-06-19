<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCheckInsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('check_ins', function (Blueprint $table) {
            $table->id();
            $table->foreignId('room_id')->constrained('rooms', 'id')->onDelete('cascade');
            $table->unsignedBigInteger('user_id');
            $table->string('client_name');
            $table->string('contact_number')->nullable();
            $table->integer('extra_persons')->nullable();
            $table->integer('extra_hours')->nullable();
            $table->double('regular_bill');
            $table->double('total_paid');
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->integer('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('check_ins');
    }
}
