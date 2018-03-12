$(document).ready(function() {
	var textEdit = $('<blockquote>Be Yourself is all that you can do</blockquote>');
	
	
	
	$('button').on('click', function() {
		$(this).remove();
		$(this).closest('.quote1').remove();
		$('#blogpost').prepend(textEdit);
	});









});