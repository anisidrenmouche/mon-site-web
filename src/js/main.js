$(document).ready(function(){
  // notre fonction elle ouvre open modal
  $('#open_modal').click(function() { 
      $('#modal_to_open').css(     // on cible le css 

       {  
  		'display':'block'
  	   }
   );
  	
  });

  // send mail avec ajax
   $ ( ' #send_email ' ). click ( fonction ( e ) {
		e . preventDefault (); // pour eviter que la page se recharge
		var data = {
			email: $('#email').val(),
			nom:  $ ( ' #name ' ). val (),
			objet:  $ ( ' #firstname ' ). val (),
			message:  $ ( ' #message ' ). val ()
		};
		$ . ajax ({
			url :  " mail.php " , // url
			type :  ' POST ' ,  // methode post
			data : data,
			succès :  fonction ( données ) {
				$ ( ' #js_alert_success ' ). css ({ ' display '  :  ' block ' });
				setTimeout ( function () {
					$ ( ' #js_alert_success ' ). css ({ ' display '  :  ' none ' });
					$ ( ' #email ' ). val ( " " );
					$ ( ' #name ' ). val ( " " );
					$ ( ' #object ' ). val ( " " );
					$ ( ' #message ' ). val ( " " )
				}, 3000 );
			},
			erreur :  fonction ( données ) {
				$ ( ' #js_alert_danger ' ). css ({ ' display '  :  ' block ' });
				setTimeout ( function () {
					$ ( ' #js_alert_danger ' ). css ({ ' display '  :  ' none ' });
					$ ( ' #email ' ). val ( " " );
					$ ( ' #name ' ). val ( " " );
					$ ( ' #object ' ). val ( " " );
					$ ( ' #message ' ). val ( " " )
				}, 3000 );
			}
		});
	});
});


