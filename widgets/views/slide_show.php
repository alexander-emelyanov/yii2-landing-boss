<?php
/**
 * @var array $items
 */
?>
<!-- SLIDESHOW -->
<section class="slideshow">
    <div class="container-fluid">
        <div class="r1 row">
            <div class="c1 col-md-12">
                <div class="carousel slide" id="slideshow-carousel-1" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <?php foreach($items as $i => $item): ?>
                        <li class="<?= !$i ? "active" : "" ?>" data-target="#slideshow-carousel-1" data-slide-to="<?= $i ?>"></li>
                        <?php endforeach; ?>
                    </ol><!-- End Indicators -->

                    <!-- Wrapper for Slides -->
                    <div class="carousel-inner">
                        <?php foreach($items as $i => $item): ?>
                        <!-- Slide <?= ($i + 1) ?> -->
                        <div class="item item-<?= ($i + 1) ?> <?= !$i ? "active" : "" ?> parallax" data-speed="2">
                            <div class="carousel-caption">
                                <?= isset($item['html']) ? $item['html'] : '' ?>
                            </div>
                        </div><!-- End Slide 1 -->
                        <?php endforeach; ?>
                    </div><!-- End Wrapper for Slides -->
                    <!-- Controls -->
                    <a class="left carousel-control" data-slide="prev" href="#slideshow-carousel-1">
                        <span class="fa fa-angle-left"></span>
                    </a>
                    <a class="right carousel-control" data-slide="next" href="#slideshow-carousel-1">
                        <span class="fa fa-angle-right"></span>
                    </a><!-- End Controls -->
                </div>
            </div>
        </div>
    </div>
</section><!-- END SLIDESHOW -->

<?php /*
<!-- Slide 2 -->
<div class="item item-2 parallax" data-speed="2">
    <div class="carousel-caption">
        <div class="c2 hidden-xs col-sm-5 col-md-5">
            <img class="img-responsive center-block" src="images/slideshow/phone.png" alt="Image">
        </div>
        <div class="c3 col-xs-12 col-sm-7 col-md-7">
            <h2 class="title">On the web there are several solutions...but only one is right for your company.<br><small class="subtitle">MOS<span>7</span></small></h2>
            <a class="btn btn-lg btn-danger" href="#" target="_blank"><i class="fa fa-apple"></i>App Store</a>
            <a class="btn btn-lg btn-danger" href="#" target="_blank"><i class="fa fa-android"></i>Google Play</a>
        </div>
    </div>
</div><!-- End Slide 2 -->
<!-- Slide 3 -->
<div class="item item-3 parallax" data-speed="2">
    <div class="carousel-caption">
        <div class="c4 hidden-xs col-sm-12 col-md-7 col-md-push-5 text-center">
            <!-- 4:3 aspect ratio -->
            <div class="embed-responsive embed-responsive-4by3">
                <iframe class="embed-responsive-item" src="//www.youtube-nocookie.com/embed/impZ7krcPzI?controls=0&amp;rel=0&amp;showinfo=0&amp;autohide=1&amp;iv_load_policy=3" allowfullscreen></iframe>
            </div>
        </div>
        <div class="c5 col-xs-12 col-sm-12 col-md-5">
            <h2 class="title">On the web there are several solutions...but only one is right for your company.<br><small class="subtitle">MOS<span>7</span></small></h2>
            <a class="btn btn-lg btn-danger" href="#" target="_blank"><i class="fa fa-apple"></i>App Store</a>
            <a class="btn btn-lg btn-danger" href="#" target="_blank"><i class="fa fa-android"></i>Google Play</a>
        </div>
    </div>
</div><!-- End Slide 3 -->
 */ ?>