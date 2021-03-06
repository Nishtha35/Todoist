// Project by--- Nishtha Sehgal


// Mark Complete Todo
$("ul").on("click","span.done", function(event){
	$(this).parent().toggleClass("completed");
	event.stopPropagation();
});

// Delete Todo to List
$("ul").on("click","span.delete", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Adding Todo to Do List
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new todo text from input
		var task_add = $(this).val();
		// clearing the input
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span class='delete'><i class='fa fa-trash'></i></span> " +task_add+ "   <span class='done'><i class='fa fa-check'></i></span></li>");
	}
});

// Toggle input with plus icon
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});