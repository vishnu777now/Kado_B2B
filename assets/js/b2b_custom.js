$(document).ready(function(){
	$("body").on('click', '.toggle-password', function() {
		$('.toggle-password').toggleClass("fa-eye-slash fa-eye");
		var input = $(".account_field_pass");
		if (input.attr("type") === "password") {
		  input.attr("type", "text");
		} else {
		  input.attr("type", "password");
		}
		
		var inputcvv_payment = $(".cvv_payment");
		if (inputcvv_payment.attr("type") === "password") {
		  inputcvv_payment.attr("type", "number");
		} else {
		  inputcvv_payment.attr("type", "password");
		}
		
		
	  });
	
	$('.create_acc_box input').val("");
	  $('.create_acc_box input').focusout(function() {
		var text_val = $(this).val();
		if (text_val === "") {
		  console.log("empty!");
		  $(this).removeClass('has-value');
		} else {
		  $(this).addClass('has-value');
		}
	});
	$('.contact_form_modal input').val("");
	  $('.contact_form_modal input').focusout(function() {
		var text_val = $(this).val();
		if (text_val === "") {
		  console.log("empty!");
		  $(this).removeClass('has-value');
		} else {
		  $(this).addClass('has-value');
		}
	});


	$(".finder-second-age-input label").click(function () {
		$(".finder-second-age-input label").removeClass('label-bg');
	 	$(this).addClass('label-bg');
	});
	
	$(".finder-second-label").click(function () {
		$(".forward_outer ").show();
		$(".ques_three_boxes").hide();
	});
	
	$(".finder-first-label").click(function () {
		$(".forward_outer ").hide();
		$(".ques_three_boxes").show();
	});
	
	
	$(".que_one_boxes").each(function (){
	  $(this).click(function(){
		clearStylenew();
		$(this).addClass("active");
	  });
	});
	function clearStylenew(){
	  buttonWithActive = $('.que_one_boxes.active');
	  buttonWithActive.removeClass('active');
	}
	
	$(".ques_three_main").each(function (){
	  $(this).click(function(){
		clearStyle();
		$(this).addClass("active");
	  });
	});
	function clearStyle(){
	  buttonWithActive = $('.ques_three_main.active');
	  buttonWithActive.removeClass('active');
	}	
	 
	$('.help_outer h2 a').click(function(){
		$(this).parent().next().slideToggle();
		$(this).parent().toggleClass('help_active');
		
	});
	 
	 
	 
});