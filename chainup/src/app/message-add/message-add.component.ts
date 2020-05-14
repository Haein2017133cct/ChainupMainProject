import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-message-add',
  templateUrl: './message-add.component.html',
  styleUrls: ['./message-add.component.css'],
  encapsulation: ViewEncapsulation.None

})

export class MessageAddComponent implements OnInit {
  messages: any;
  message: any = {};// added router for delete fuction

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

 
  ngOnInit() {
    this.router.onSameUrlNavigation = "reload"; 
    this.http.get('/message').subscribe(data => {
      this.messages = data;
    });
  }
 


 
  saveMessage() {
  
  this.http.post('/message', this.message)
    .subscribe(res => {
        let id = res['_id'];
       this.ngOnInit();

      }, (err) => {
        console.log(err);
      }
    );
}

}









// (function() {
//   'use strict';
//   window.addEventListener('click', function() {
//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.getElementsByClassName('needs-validation');
//   // Loop over them and prevent submission
//   var validation = Array.prototype.filter.call(forms, function(form) {
//   form.addEventListener('click', function(event) {
//   if (form.checkValidity() === false) {
//   event.preventDefault();
//   event.stopPropagation();
//   }
//   form.classList.add('was-validated');
  
//   }, false);
//   });
//   }, false);
//   })();






// <script>
//   $(document).ready(function () {
//     $.getJSON("timestamp.json", function (data) {
//       console.log(data);
//       var timestamp_data = '';
//       $.each(data, function (key, value) {
//         timestamp_data += ' <li >';
//         timestamp_data += '<div class="block">';
//         timestamp_data += '<h6 class="mb-2 content" id="test">' + value.name + '</h6>';
//         timestamp_data += '<div class = bubble>';
//         timestamp_data += '<div>' + value.text + '</div>';
//         timestamp_data += '<div class="mt-1">';
//         timestamp_data += '<small class="opacity-65">' + value.time + '</small>';
//         timestamp_data += '</div>';
//         timestamp_data += '</div>';
//         timestamp_data += '</div>';
//         timestamp_data += ' </li>';

//       });
//       $('#contents_text').append(timestamp_data);
//     });
//   });

//   function replaceText() {

//     var searchword = $("#searchtxt").val();

//     var custfilter = new RegExp(searchword, "gi");
//     var repstr = "<span class='highlight'>" + searchword + "</span>";

//     if (searchword != "") {
//       $('.content').find(".highlight").removeClass("highlight");

//       $('.content').each(function () {
      
//         console.log(custfilter);

//         $(this).html($(this).html().replace(custfilter, repstr)); // find the solution for this from here

//       })
//     }
//   };

// </script>
// <script>
//   $(document).ready(function () {
//     $.ajaxSetup({ cache: false });
//     $('#searchtxt').keyup(function () {
//       $('#result').html('');
//       $('#state').val('');
//       var searchField = $('#search').val();
//       var expression = new RegExp(searchField, "i");
//       $.getJSON('timestamp.json', function (data) {
//         $.each(data, function (key, value) {
//           if (value.name.search(expression) != -1 || value.location.search(expression) != -1) {
//             $('#result').append('<li class="list-group-item link-class"> ' + value.name + '</li>');
//           }
//         });
//       });
//     });

//     $('#result').on('click', 'li', function () {
//       var click_text = $(this).text();
//       $('#search').val($.trim(click_text[0]));
//       $("#result").html('');
//     });
//   });
// </script>
