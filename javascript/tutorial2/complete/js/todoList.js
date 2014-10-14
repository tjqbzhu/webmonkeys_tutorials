$(document).ready(function() {


	$("#todoList-input").on("focusin", function(e) {

		var input,
			inputField,
			list,
			item;

		inputField = $(e.target);
		list = $("#todoList #list");

		inputField.on("keypress", function(e) {
				
				e.stopPropagation();

				if(e.keyCode == 13) {

					input = $(e.target).val();
					item = $("#todoList-item-template").html();
					item = $(item);

					$(item).find(".content").text(input);
					list.append(item);

					$(item).first(".close").on("click", function(e) {

						e.stopPropagation();

						$(e.target).parent().remove();

					});

				}
				

		});
				

	});


});

	

