import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // $(document).ready(function() {
  //   $('.nav-btn').on('click', function(event) {
  //     event.preventDefault();
  //     /* Act on the event */
  //     $('.sidebar').slideToggle('fast');
  
  //     window.onresize = function(){
  //       if ($(window).width() >= 768) {
  //         $('.sidebar').show();
  //       } else {
  //         $('.sidebar').hide();
  //       }
  //     };
  //   });
  // });

}
