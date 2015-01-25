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
    public $sourcePath = '@vendor/alexander-emelyanov/yii2-landing-boss/assets';

    /**
     * @inherit
     */
    public $css = [
        'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
        'css/bootstrap.min.css',
        'css/font-awesome.min.css',
        'css/vendor/jquery.circliful.min.css',
        'css/vendor/slick.min.css',
        'css/vendor/blueimp-gallery.min.css',
        'css/main.min.css',
        'css/all_components.min.css',
    ];

    /**
     * @inherit
     */
    public $js = [
        // jQuery
        'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',
        // Bootstrap
        'js/bootstrap.min.js',
        // Retina Graphics
        'js/vendor/retina.min.js',
        // Nicescroll Scrollbars
        'js/vendor/jquery.nicescroll.min.js',
        // Circliful Circle Statistics
        'js/vendor/circles.min.js',
        // Slick Carousel
        'js/vendor/slick.min.js',
        // BlueImp Gallery Lightbox
        'js/vendor/jquery.blueimp-gallery.min.js',
        // Google map
        'https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false',
        'js/google_map.min.js',
        'js/vendor/simple.min.js',
        // Default General Settings
        'js/main.min.js',
    ];
} 