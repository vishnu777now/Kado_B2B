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
	$('.view_all_toggle').on('click', function () {
        $(".contact_gift_content").toggleClass('open');
    });
	$('.sort_by_sel').on('click', function () {
        $(".default_sort_drop_main").toggleClass('open');
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
	 
function add_camp_recipt() {
  var new_camp_recipt_box_no = parseInt($('#camp_recipt_box_no').attr('vk_value')) + 1;
  var new_camp_recipt_box = '<div camp_recipt_box="'+new_camp_recipt_box_no+'" class="col-md-12 camp_recipt_box camp_recipt_box'+new_camp_recipt_box_no+'"><div class="col-md-6"><h3><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2631 10.8118C11.7231 10.0235 9.72477 9.38184 7.4056 9.38184C5.08643 9.38184 3.0881 10.0235 1.5481 10.8118C0.631432 11.2793 0.0722656 12.2235 0.0722656 13.2502V15.7985H14.7389V13.2502C14.7389 12.2235 14.1798 11.2793 13.2631 10.8118ZM12.9056 13.9652H1.9056V13.2502C1.9056 12.9018 2.08893 12.5902 2.38227 12.4435C3.4731 11.8843 5.2331 11.2152 7.4056 11.2152C9.5781 11.2152 11.3381 11.8843 12.4289 12.4435C12.7223 12.5902 12.9056 12.9018 12.9056 13.2502V13.9652Z" fill="#FF385C"/><path d="M7.40544 8.46484C9.43127 8.46484 11.0721 6.82401 11.0721 4.79818C11.0721 3.54234 11.0721 1.58984 11.0721 1.58984C11.0721 0.82901 10.4579 0.214844 9.6971 0.214844C9.22044 0.214844 8.79877 0.462344 8.55127 0.82901C8.30377 0.462344 7.8821 0.214844 7.40544 0.214844C6.92877 0.214844 6.5071 0.462344 6.2596 0.82901C6.0121 0.462344 5.59044 0.214844 5.11377 0.214844C4.35294 0.214844 3.73877 0.82901 3.73877 1.58984C3.73877 1.58984 3.73877 3.53318 3.73877 4.79818C3.73877 6.82401 5.3796 8.46484 7.40544 8.46484ZM5.5721 2.50651H9.23877V4.79818C9.23877 5.80651 8.41377 6.63151 7.40544 6.63151C6.3971 6.63151 5.5721 5.80651 5.5721 4.79818V2.50651Z" fill="#FF385C"/></svg>Recipient Name</h3><input type="text" name="" placeholder="Recipient Name"></div><div class="col-md-6"><h3><svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.43 1.96517C18.43 0.956836 17.605 0.131836 16.5967 0.131836H1.93001C0.92168 0.131836 0.0966797 0.956836 0.0966797 1.96517V12.9652C0.0966797 13.9735 0.92168 14.7985 1.93001 14.7985H16.5967C17.605 14.7985 18.43 13.9735 18.43 12.9652V1.96517ZM16.5967 1.96517L9.26335 6.5485L1.93001 1.96517H16.5967ZM16.5967 12.9652H1.93001V3.7985L9.26335 8.38184L16.5967 3.7985V12.9652Z" fill="#FF385C"/></svg>	Email</h3><input type="email" name="" placeholder="matthew.vatican@gmail.com"></div></div>';

  $('.new_camp_recipt_box').append(new_camp_recipt_box);
  
  $('#camp_recipt_box_no').attr('vk_value',new_camp_recipt_box_no);
  console.log('add_camp_recipts'); 
}

$('.add_new_camp_recipt').on('click', function(e){ 
e.preventDefault(); 
console.log('add_camp_recipt'); 
add_camp_recipt();
 });

});