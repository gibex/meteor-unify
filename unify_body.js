if (Meteor.isClient) {
  Template.unifyBody.rendered = function() {
    var tmpl = this;
    _.each([
      // "/assets/plugins/jquery-1.10.2.min.js",
      "/assets/plugins/jquery-migrate-1.2.1.min.js",
      "/assets/plugins/bootstrap/js/bootstrap.min.js",
      "/assets/plugins/back-to-top.js",
      "/assets/plugins/flexslider/jquery.flexslider-min.js",

      "/assets/plugins/parallax-slider/js/modernizr.js",
      "/assets/plugins/parallax-slider/js/jquery.cslider.js",

      "/assets/plugins/flot/jquery.flot.resize.js",
      "/assets/plugins/jquery-easy-pie-chart/jquery.easy-pie-chart.js",
      "/assets/plugins/jquery.sparkline.min.js",
      "/assets/plugins/jquery.pulsate.min.js"
     ], function(script, ready) { jQuery.getScript(script); });

    jQuery.getScript("/assets/js/app.js", function() {
      App.init();
      // App.initSliders();
    });

    jQuery.getScript("/assets/plugins/fancybox/source/jquery.fancybox.pack.js", function(){
        tmpl.$(".fancybox-button").fancybox({
        groupAttr: 'data-rel',
        prevEffect: 'none',
        nextEffect: 'none',
        closeBtn: true,
        helpers: {
            title: {
                type: 'inside'
                }
            }
        });
    });

    jQuery.getScript("/assets/js/pages/index.js", function() {
      Index.initParallaxSlider(); 
    }););
    });    


// <!-- JS Global Compulsory -->     
// <script type="text/javascript" src="assets/plugins/jquery-1.10.2.min.js"></script>
// <script type="text/javascript" src="assets/plugins/jquery-migrate-1.2.1.min.js"></script>
// <script type="text/javascript" src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
// <!-- JS Implementing Plugins -->
// <script type="text/javascript" src="assets/plugins/back-to-top.js"></script>
// <script type="text/javascript" src="assets/plugins/flexslider/jquery.flexslider-min.js"></script>
// <script type="text/javascript" src="assets/plugins/parallax-slider/js/modernizr.js"></script>
// <script type="text/javascript" src="assets/plugins/parallax-slider/js/jquery.cslider.js"></script>
// <!-- JS Page Level -->           
// <script type="text/javascript" src="assets/js/app.js"></script>
// <script type="text/javascript" src="assets/js/pages/index.js"></script>
// <script type="text/javascript">
//     jQuery(document).ready(function() {
//         App.init();
//         App.initSliders();
//         Index.initParallaxSlider();        
//     });
// </script>
// <!--[if lt IE 9]>
//     <script src="assets/plugins/respond.js"></script>
//     <script src="assets/plugins/html5shiv.js"></script>    
// <![endif]-->

  };
}