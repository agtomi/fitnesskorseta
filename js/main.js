$(window).load(function() {
    $('.labels a#label1').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
        $('.labels a#label2').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
            $('.labels a#label3').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
                $('.labels a#label4').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
                    $('.labels a#label5').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
                        $('.labels a#label6').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
                            $('.labels a#label11').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
                                $('.labels a#label8').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
                                    $('.labels a#label12').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
                                        $('.labels a#label10').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
                                            $('.labels a#label9').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
                                                $('.labels a#label13').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
							$('.labels a#label7').fadeIn(100).effect('bounce', { times:3 }, 300);
                    }); }); }); }); }); }); }); }); }); }); }); 
	});
    // dialog close
    $('.dialog .close').click(function() {
        $(this).parent().fadeOut(500);
        return false;
    });

    // display dialog on click by labels
    $('.labels a').click(function() {
        $('.dialog p').html( $(this).find('p').html() ).parent().fadeIn(500);
        return false;
    });

    // close dialog on click outside
    $('.container').click(function() {
        $('.dialog').fadeOut(500);
    });
});
