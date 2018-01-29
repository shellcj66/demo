function showModal(url){
	var modalDiv = $("#ajax_modal");
	modalDiv.html('').load(url,function(){
		modalDiv.modal("show");
	});
	modalDiv.on("shown.bs.modal",function(){
		$(".ui-draggable").draggable({ cursor: "move",handle:'.modal-header'});
	})
}

// $.fn.rightMenu = function(options){
// 	var defaultVal = { 
// 		actionEl:null
// 	}; 
// 	var obj = $.extend(defaultVal, options); 
// 	return this.each(function () { 
		
// 	});
// }

function getMousePos(event) {
	var e = event || window.event;
	var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
	var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
	var x = e.pageX || e.clientX + scrollX;
	var y = e.pageY || e.clientY + scrollY;
    return { 'x': x, 'y': y };
}
