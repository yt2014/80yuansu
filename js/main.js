

$(document).ready(function(){
	
	//alert("ready height is "+$(document).innerHeight()*0.05);
	$("#div_top").height($(document).innerHeight()*0.08);
	$("#div_body").height($(document).innerHeight()*0.84);
	$("#div_buttom").height($(document).innerHeight()*0.08);
        /*in aboutus page, link clicked events in the left*/
        $("#Company_Background").click(
		function(e)
		{
		    e.preventDefault();
                    $("#text_area").empty(); 
		    $.ajax({
                              url: 'Company.txt',
                              dataType: 'text',
			      //scriptCharset: 'GB2312',
			      contentType: "utf-8", 
                              success: function(data) {
                              //alert(data);
                              
			     
			      var data_display = data.replace(/\n/g,"<br/>");
			    //
			  //  String data_display = URLDecoder.decode(data,"GB2312");

			  //  alert(data_display);
			    // var txtval=escape(data); 

			      var head_text = $("<h1>公司简介</h1>");
			      var hr_text = $("<hr style=\"border-bottom:1px dashed #000;\">");
			    
			      head_text.css("text-align","center");
			      head_text.css("margin-top","20px");
                              head_text.css("margin-bottom","20px");
			      //var text_body = $("<xmp></xmp>");
                              //text_body.append(data);
			      $("#text_area").css("text-wrap","normal");
			      $("#text_area").css("width","90%");
                              $("#text_area").css("text-align","left");

			      $("#text_area").append(head_text,hr_text,data_display);
                                                     }
                         });/*end of ajax*/

		}
		
		);/*end of Company_Background click*/

       $("#Company_Concept").click(
	       function (e)
               {

		    e.preventDefault();
	            $("#text_area").empty();
		    $("#text_area").css("width","100%");
		    $("#text_area").css("height","100%");

		    var text_left = $("<div class = \"div_subtext\"> </div>");
		    var text_middle = $("<div class = \"div_subtext\"> </div>");
		    var text_right = $("<div class = \"div_subtext\"> </div>");
                    

		    var concept1_div = $("<div> </div>");
		    concept1_div.css("width","100%");

                     $("#text_area").append(concept1_div);

                    var concept1 = $("<p>以人为本,活力空间</p>");
                    text_left.append(concept1);

		    var concept1_content = $("<p></p>");
		    text_right.append(concept1_content);

                    text_left.css("width","20%");
		    //text_left.css("height","100%");
		    text_left.css("background-color","red");
                    concept1_div.append(text_left);
		  //  text_middle.insertAfter(text_left);
		  //  text_right.insertAfter(text_middle);
                    concept1_div.append(text_middle);
                    concept1_div.append(text_right);

                    $(".div_subtext").css("float","left");


		    text_middle.css({"width":"3%","background-color":"yellow"});
		    //text_middle.css("height","100%");
		    //text_middle.css("background-color","yellow");

		    text_right.css("width","67%");
		    //text_right.css("height","100%");
		    text_right.css("background-color","black");

                   // alert("aaaaaa");
                    var fso = new ActiveXObject("Scripting.FileSystemObject"); 
                    alert(fso);
                    var f = fso.OpenTextFile("..//concepts.txt",1); 

		    alert(f);

                   // var s = "";

                 //   while (!f.AtEndOfStream)

                    var s = f.ReadLine();
		    alert(s);
                    concept1.text(s);
                    s=f.ReadLine();
		    concept1_content.text(s);

                    f.Close();

                  //  return s; 
		    

	       }
	       
	       
	       );

        /*navgators click events, set the left links*/
	/*历史作品*/
	$("#history_work").click(function(e){
		//alert(e);
		e.preventDefault();
                $("#list_aboutus").remove();
                var ul_lh = $("<ul id=\"list_history\"></ul>");

                //alert(ul_lh);
                $("#div_body_left").append(ul_lh);

                var li_his = $("<li>历年作品</li>");
                ul_lh.append(li_his);
                                           });/*end of history work click*/
                                              
       
});
