/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  'use strict';

  // Preloader
  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

  
  // Instagram Feed
  if (($('#instafeed').length) !== 0) {
    var accessToken = $('#instafeed').attr('data-accessToken');
    var userFeed = new Instafeed({
      get: 'user',
      resolution: 'low_resolution',
      accessToken: accessToken,
      template: '<a href="{{link}}"><img src="{{image}}" alt="instagram-image"></a>'
    });
    userFeed.run();
  }

  setTimeout(function () {
    $('.instagram-slider').slick({
      dots: false,
      speed: 300,
      // autoplay: true,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  }, 1500);


  // e-commerce touchspin
  $('input[name=\'product-quantity\']').TouchSpin();


  // Video Lightbox
  $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });


  // Count Down JS
  $('#simple-timer').syotimer({
    year: 2022,
    month: 5,
    day: 9,
    hour: 20,
    minute: 30
  });

  //Table Toggle
  document.addEventListener('DOMContentLoaded', function () {
    var toggleTableButton = document.getElementById('toggleTableButton');
    if (toggleTableButton) {
        toggleTableButton.addEventListener('click', function () {
            var tableCard = document.getElementById('coffeeTableCard');
            var isExpanded = this.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                tableCard.style.display = 'none';
                this.textContent = 'Show Table';
                this.setAttribute('aria-expanded', 'false');
                this.focus(); // Ensure focus returns to the button after the action
            } else {
                tableCard.style.display = 'block';
                this.textContent = 'Hide Table';
                this.setAttribute('aria-expanded', 'true');
                tableCard.querySelector('table').focus(); // Move focus to the table for screen reader users
            }
        });
    }
});
// });

//Form Validation
document.getElementById('place-order-btn').addEventListener('click', function(event) {
  event.preventDefault();
  let isValid = true;

  // Clear previous errors
  document.querySelectorAll('.text-danger').forEach(function(el) {
     el.textContent = '';
  });

  // Validate Full Name
  const fullName = document.getElementById('full_name');
  if (fullName.value.trim() === '') {
     isValid = false;
     document.getElementById('name-error').textContent = 'Please enter your full name.';
  }

  // Validate Address
  const address = document.getElementById('user_address');
  if (address.value.trim() === '') {
     isValid = false;
     document.getElementById('address-error').textContent = 'Please enter your address.';
  }

  // Validate Zip Code (5 digits only)
  const zipCode = document.getElementById('user_post_code');
  const zipCodeRegex = /^\d{5}$/;
  if (!zipCodeRegex.test(zipCode.value.trim())) {
     isValid = false;
     document.getElementById('zip-error').textContent = 'Please enter a valid 5-digit zip code.';
  }

  // Validate City
  const city = document.getElementById('user_city');
  if (city.value.trim() === '') {
     isValid = false;
     document.getElementById('city-error').textContent = 'Please enter your city.';
  }

  // Validate Country
  const country = document.getElementById('user_country');
  if (country.value.trim() === '') {
     isValid = false;
     document.getElementById('country-error').textContent = 'Please enter your country.';
  }

  // Validate Card Number
  const cardNumber = document.getElementById('card-number');
  if (cardNumber.value.trim() === '') {
     isValid = false;
     document.getElementById('card-number-error').textContent = 'Please enter your card number.';
  }

  // Validate Card Expiry (MM/YY format)
  const cardExpiry = document.getElementById('card-expiry');
  const cardExpiryRegex = /^\d{2}\/\d{2}$/;
  if (!cardExpiryRegex.test(cardExpiry.value.trim())) {
     isValid = false;
     document.getElementById('card-expiry-error').textContent = 'Please enter a valid expiry date (MM/YY).';
  }

  // Validate CVC
  const cardCvc = document.getElementById('card-cvc');
  if (cardCvc.value.trim() === '') {
     isValid = false;
     document.getElementById('card-cvc-error').textContent = 'Please enter the card CVC code.';
  }

  if (isValid) {
     // Submit the form if valid
     document.getElementById('billing-form').submit();
     document.getElementById('payment-form').submit();
  } else {
     document.getElementById('form-error').textContent = 'Please fix the errors above before submitting.';
  }
});
  //Hero Slider
  $('.hero-slider').slick({
    // autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'heroSliderArrow prevArrow tf-ion-chevron-left\'></button>',
    nextArrow: '<button type=\'button\' class=\'heroSliderArrow nextArrow tf-ion-chevron-right\'></button>',
    dots: true,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  $('.hero-slider').slickAnimation();


})(jQuery);

