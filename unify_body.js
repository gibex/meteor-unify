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
    });

    jQuery.getScript("/tinymce/tinymce.min.js", function() {
      tinymce.init({
        init_instance_callback : function(editor) {
              console.log("Editor: " + editor.id + " is now initialized.");
          },      //some note
          selector: "textarea",
          skin_url: '/tinymce/skins/lightgray',
          theme_url: '/tinymce/themes/modern/theme.min.js',
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste"
          ],
          external_plugins: {
              "advlist": "/tinymce/plugins/advlist/plugin.min.js",
              "autolink": "/tinymce/plugins/autolink/plugin.min.js",
              "lists": "/tinymce/plugins/lists/plugin.min.js",
              "link": "/tinymce/plugins/link/plugin.min.js",
              "image": "/tinymce/plugins/image/plugin.min.js",
              "charmap": "/tinymce/plugins/charmap/plugin.min.js",
              "print": "/tinymce/plugins/print/plugin.min.js",
              "preview": "/tinymce/plugins/preview/plugin.min.js",
              "anchor": "/tinymce/plugins/anchor/plugin.min.js",
              "searchreplace": "/tinymce/plugins/searchreplace/plugin.min.js",
              "visualblocks": "/tinymce/plugins/visualblocks/plugin.min.js",
              "code": "/tinymce/plugins/code/plugin.min.js",
              "fullscreen": "/tinymce/plugins/fullscreen/plugin.min.js",
              "image": "/tinymce/plugins/image/plugin.min.js",
              "insertdatetime": "/tinymce/plugins/insertdatetime/plugin.min.js",
              "media": "/tinymce/plugins/media/plugin.min.js",
              "table": "/tinymce/plugins/table/plugin.min.js",
              "contextmenu": "/tinymce/plugins/contextmenu/plugin.min.js",              
              "paste": "/tinymce/plugins/paste/plugin.min.js",              
          },          
          toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"       
       });
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