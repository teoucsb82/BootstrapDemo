// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .

$(function() {
  $(".mySelector").tooltip();
  $("body").scrollspy({ target: '#side-nav'});
  // $('#modal-window').modal('show');
  $('#myAffix').affix({
    offset: {
      top: 730
    }
  })

  $('#contact-button').on('click', function(event) {
    event.preventDefault();


    var $fields = $(event.currentTarget).parent().children().children();
    $fields.removeClass("alert alert-danger alert-success");

    if ($('#contact-name').val() === "") {
      $('#contact-name').addClass("alert alert-danger");
    } else {
      $('#contact-name').addClass("alert alert-success");
    }

    if ($('#contact-email').val() === "") {
      $('#contact-email').addClass("alert alert-danger");
    } else {
      $('#contact-email').addClass("alert alert-success");
    }

    if ($('#contact-subject').val() === "") {
      $('#contact-subject').addClass("alert alert-danger");
    } else {
      $('#contact-subject').addClass("alert alert-success");
    }

    if ($('#contact-message').val() === "") {
      $('#contact-message').addClass("alert alert-danger");
    } else {
      $('#contact-message').addClass("alert alert-success");
    }

    if (!$fields.hasClass("alert-danger")) {
      $('#contact-errors').removeClass("hidden")
      $('#contact-errors').removeClass("alert-danger")
      $('#contact-errors').addClass("alert-success")
      $('#contact-error-strong').text("Success!")
      $('#contact-error-text').text("Your message was sent")
    } else {
      $('#contact-errors').removeClass("hidden")
      $('#contact-errors').removeClass("alert-success")
      $('#contact-errors').addClass("alert-danger")
      $('#contact-error-strong').text("Failure!")
      $('#contact-error-text').text("Your message was not sent")
    }
  })
});