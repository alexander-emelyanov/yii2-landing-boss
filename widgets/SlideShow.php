<?php

namespace AlexanderEmelyanov\yii\landing\boss\widgets;

use yii\base\Widget;

class SlideShow extends Widget{

    public $items = [];

    public function run(){

        return $this->render('slide_show', [
            'items' => $this->items
        ]);
    }

}