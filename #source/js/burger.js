// .icon-menu - класс иконки бургера, .menu - класс меню
$('.icon-menu').click(function() {
	$(this).toggleClass('active');
	$('.bottom-header__body').toggleClass('active');
	$('body').toggleClass('lock');
});

$('.menu__link').click(function() {
	$('.icon-menu').removeClass('active');
	$('.bottom-header__body').removeClass('active');
	$('body').removeClass('lock');
});