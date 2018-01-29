+function ($) {

  $(function(){
  		var fold_i = 0;
      $(document).on('click', '[ui-toggle]', function (e) {
      	e.preventDefault();
        var $this = $(e.target);
        $this.attr('ui-toggle') || ($this = $this.closest('[ui-toggle]'));
        var $target = $($this.attr('target')) || $this;
        $target.toggleClass($this.attr('ui-toggle'));
        if($this.attr('ui-toggle')=="app-aside-folded"){
        	$this.find('i').eq(fold_i).addClass('text-active').removeClass('text');
        	$this.find('i').eq(fold_i).siblings().addClass('text').removeClass('text-active');
        	fold_i = Math.abs(fold_i - 1);
        }
      });

  });
}(jQuery);