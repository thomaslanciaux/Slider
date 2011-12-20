!function ($) {
	
	$.ender({
		slider: function (opts) {
			return this.forEach(function (el) {
				Slider(el, opts)
			})
		}
	}, true)
	
}(ender);