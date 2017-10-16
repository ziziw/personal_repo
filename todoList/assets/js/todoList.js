$("ul").on("click", "li", function(){
	$(this).toggleClass("complete");
});

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(450, function(){
		$(this).remove();
	})
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var wrote = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"  + wrote + "</li>");
		$(this).val("");
	}
});

$(function(){
	$("#sortable").sortable();
	$("#sortable").disableSelection();
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});