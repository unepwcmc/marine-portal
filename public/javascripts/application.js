// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(function(){
	Cufon.replace('h2, h3, h4');
	$('.matrix_title').tipsy({fade: true, gravity: 's'});
	$('.active_matrix').tipsy({fade: true, gravity: 's'});

	$('a[rel*=facebox]').facebox() 
	$('#close_fb').click(function(){
		$(document).trigger('close.facebox');
		false;
	});		
});

 
