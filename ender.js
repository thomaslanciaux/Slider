!function ($, slider) {
	
	$.ender({
		slider: function (opts) {
			return this.forEach(function (el) {
				return Slider(el, opts)
			})
		}
	}, true)
	
}(ender, require('slider').slider);