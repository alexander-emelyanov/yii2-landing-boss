<?php
/**
 * @author Alexander Emelyanov <alexander.emelyanov@outlook.com>
 */

namespace AlexanderEmelyanov\yii\landing\boss;

/**
 * Class AssetBundle
 * @package AlexanderEmelyanov\yii\landing\boss
 */

class AssetBundle extends \yii\web\AssetBundle{

    /**
     * @inherit
     */
    public $sourcePath = '@vendor/alexander-emelyanov/yii2-landing-boss';

    /**
     * @inherit
     */
    public $css = [
        'css/boss.css',
    ];
} 