window.App = (function($, Snap) {
	function ready() {
		var s = Snap("#treat");
		Snap.load("public/treat.svg", function(f) {
			var g = f.select("g");
			s.append(g);
			rotate(g, 45, 0.75);
		});
	}
	function rotate(el, deg, scale){
		el.stop().animate({ transform: 'r'+deg+',143,143 s'+scale}, 10000, function(){ 
				//el.attr({ transform: 'rotate(0 143 143)'}); // Reset the position of the rays.
				deg = deg+45;
				if(!deg) {
					el.attr({ transform: 'rotate(0 143 143)'}); // Reset the position of the rays.
				}
				scale = (scale === 1) ? 0.75 : 1;
				rotate(el, deg, scale); // Repeat this animation so it appears infinite.
			});
	}
	return {init: ready};
})(jQuery, Snap);

$(App.init);