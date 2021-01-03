// добавить класс ibg контейнеру, который содержить img внутри, которую надо сделать background-image
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}	
ibg();