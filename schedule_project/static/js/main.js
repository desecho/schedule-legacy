// Generated by CoffeeScript 1.6.1
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

// function csrfSafeMethod(method) {
//     // these HTTP methods do not require CSRF protection
//     return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
// }
// $.ajaxSetup({
//     crossDomain: false, // obviates need for sameOrigin test
//     beforeSend: function(xhr, settings) {
//         if (!csrfSafeMethod(settings.type)) {
//             xhr.setRequestHeader("X-CSRFToken", csrftoken);
//         }
//     }
// });;

Messenger.options = {
    extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
    theme: 'future'
};

function displayMessage(status, message) {
    var type;
    if (status) {
        type = 'success';
    } else {
        type = 'error';
    }
    Messenger().post({
      message: message,
      type: type,
      showCloseButton: true,
      hideAfter: 3
    });
}

var headers = {
          'X-CSRFToken': csrftoken,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Requested-With': 'XMLHttpRequest',
        };

angular.module('hourDetails', ['ngResource']).
  factory('HourDetails', function($resource) {
    return $resource('/get-hour-details/', {}, {
      get: {method: 'GET'}
    });
  });

angular.module('teachersAndStudents', ['ngResource']).
  factory('TeachersAndStudents', function($resource) {
    return $resource('/teachers-and-students/', {}, {
      get: {method: 'GET'}
    });
  });

angular.module('scheduleDelete', ['ngResource']).
  factory('ScheduleDelete', function($resource) {
    return $resource('/delete-schedule/', {}, {
      post: {method: 'POST', headers: headers}
    });
  });

angular.module('scheduleSave', ['ngResource']).
  factory('ScheduleSave', function($resource) {
    return $resource('/save-schedule/', {}, {
      post: {method: 'POST', headers: headers}
    });
  });


  angular.module('saveSettings', ['ngResource']).
  factory('Settings', function($resource) {
    return $resource('/apply-settings/', {}, {
      post: {method: 'POST', headers: headers}
    });
  });