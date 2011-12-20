!function ($) {
	
	$.ender({
		slider: function (opts) {
			return this.forEach(function (el) {
				return new Slider(el, opts)
			})
		}
	}, true)
	
}(ender);