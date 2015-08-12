window.App = (function($, Snap) {
	// App initializer.
	function ready() {
		var s = Snap("#treat");
		Snap.load("public/treat.svg", function(f) {
			var g = f.select("g");
			s.append(g);
			rotate(g, 45, 1);
		});
	}

	// Rotates the element by the given degrees, and sets it to the given scale.
	function rotate(el, deg, scale){
		scale = (scale === 1) ? 0.75 : 1;
		if(deg > 360) {
			deg = 45;
			el.attr({ transform: 'rotate(0 143 143)'});
		}
		window.setTimeout(function() {
			el.stop()
				.animate( { transform: 'r'+deg+',143,143 s'+scale }, 10000, rotate.bind(null, el, deg+45, scale) );
		}, 1);
	}

	return {init: ready};
})(jQuery, Snap);

$(App.init);