var logUser = JSON.parse(localStorage.getItem('loginUsername'));
var data=JSON.parse(localStorage.getItem('data'));

function displayData(){
	var output="";
	Object.keys(data).forEach(function(key,index) {
	if(data[key].p_id == logUser){
		console.log(data[key]);
		output+="<div class='well'>"
		+"<img src='images/"+data[key].p_id+".jpg' class='img-circle' height='65' width='65' alt='User'/></div>"
		+"<button type='button' class='btn btn-default friend-item' data-id='"+data[key].p_id+"' data-target='friend"+data[key].p_id+"'>Friends</button>"
		+"<button type='button' class='btn btn-default note-item' data-id='"+data[key].p_id+"' data-target='note"+data[key].p_id+"'>Notification</button>"
			
	}
	$('#profile').html(output);
});
}
$('#profile').on("click",".friend-item",function(event){
		var id= $(this).attr("data-id");
		var output="";	
		Object.keys(data).forEach(function(key,index) {
		if(data[key].p_id == id){
			for(var i in data[key].friendList){
			output+="<li>"+data[key].friendList[i]+"</li>";
			}
		  }
		});
		$('#myModal').modal('show');
		$('#modal-edit').html("<ol>"+output+"</ol>");
		});
		
		
$('#profile').on("click",".note-item",function(event){
		var id= $(this).attr("data-id");
		var output="";	
		Object.keys(data).forEach(function(key,index) {
		if(data[key].p_id == id){
			for(var i in data[key].notifications){
			output+="<li>"+data[key].notifications[i]+"</li>";
			}
		  }
		});
	$('#myModal').modal('show');
	$('#modal-edit').html("<ol>"+output+"</ol>");
	});



function submitData(){
	var temp=document.getElementById('myTextArea').value;
	var output="",output1="";
		Object.keys(data).forEach(function(key,index) {	
		if(data[key].p_id == logUser){
			for(var i in data[key]){
			data[key].timelineList.push(temp);
			data[key].notifications.push(temp+ "... timeline data added");
			break;
			}
		  }
	});	
	for(var i in data){
		if(data[i].p_id == logUser){
			console.log(data[i].timelineList);
			for(var j in data[i].timelineList){
			output+="<div class='well'><p>"+data[i].timelineList[j]+"</p></div>";
			output1+="<div class='well'><p>"+data[i].notifications[j]+"</p></div>";
			}
		}
	}
	$('#UpdateList').html("<div class='col-sm-12'>"+output+"</div>");
}
