jQuery(document).ready(function(){

	jQuery("a.switcher").bind("click", function(e){
		e.preventDefault();

		var theid = jQuery(this).attr("id");
		var theproducts = jQuery("ul#products");
		var classNames = jQuery(this).attr('class').split(' ');

		var gridthumb = "images/products/grid-default-thumb.png";
		var listthumb = "images/products/list-default-thumb.png";

		if(jQuery(this).hasClass("active")) {
			// if currently clicked button has the active class
			// then we do nothing!
			return false;
		} else {
			// otherwise we are clicking on the inactive button
			// and in the process of switching views!

  			if(theid == "gridview") {
				jQuery(this).addClass("active");
				jQuery("#listview").removeClass("active");

				jQuery("#listview").children("img").attr("src","images/list-view.png");

				var theimg = jQuery(this).children("img");
				theimg.attr("src","images/grid-view-active.png");

				// remove the list class and change to grid
				theproducts.removeClass("list");
				theproducts.addClass("grid");

				// update all thumbnails to larger size
				jQuery("img.thumb").attr("src",gridthumb);
			}

			else if(theid == "listview") {
				jQuery(this).addClass("active");
				jQuery("#gridview").removeClass("active");

				jQuery("#gridview").children("img").attr("src","images/grid-view.png");

				var theimg = jQuery(this).children("img");
				theimg.attr("src","images/list-view-active.png");

				// remove the grid view and change to list
				theproducts.removeClass("grid")
				theproducts.addClass("list");
				// update all thumbnails to smaller size
				jQuery("img.thumb").attr("src",listthumb);
			} 
		}

	});
});