function api1(){
var dataSet1 = {
			friends:
			[
			'andy@example.com',
			'john@example.com'
			]
}
var call1=$.ajax({
	type : "GET",
	dataType: "json",
    url : "http://localhost:3000/userList",
    data: {"p_email": dataSet1.friends[0]},
    success: function(response) {
			return response;
    }
});

var call2=$.ajax({
	type : "GET",
	dataType: "json",
    url : "http://localhost:3000/userList",
    data: {"p_email": dataSet1.friends[1]},
    success: function(response) {
			return response;
		}
});

$.when(call1, call2).then(function (response1, response2) {	
	array1=[];
	array2=[];
	for( var i in response1[0]){
	array1=response1[0][i].friendList;
	}
	for( var i in response2[0]){
	array2=response2[0][i].friendList;
	}
	array1.push(response2[0][i].p_email);
	array2.push(response1[0][i].p_email);
	return ({'success':true});
   }); 

   $('#one').text("[{'success':true}]");
}

function api2(){

var call1=$.ajax({
		type : "GET",
		dataType: "json",
		url : "http://localhost:3000/userList",
		data: {"p_email": "user1@example.com"},
		success: function(response) {
		return response;
		}
	});
	$.when(call1).then(function (response) {	
			userLogin=[];
			for(var i in response){
			userLogin.push({success:true,friends:response[i].friendList,count: response[i].count});
			console.log(userLogin);
			}
		 $('#second').text(JSON.stringify(userLogin));
	});
}


function api3(){
var dataSet1 = {
		friends:
		[
		'andy@example.com',
		'john@example.com'
		]
	};
var call1 =  $.ajax({
	type : "GET",
	dataType: "json",
    url : "http://localhost:3000/userList",
    data: {"p_email":dataSet1.friends[0]},
    success: function(response) {
        return response;
    },
	error: function( xhr, status ) {
            alert( "Sorry, there was a problem!" );
            },
});
var call2 =  $.ajax({
	type : "GET",
	dataType: "json",
    url : "http://localhost:3000/userList",
    data: {"p_email":dataSet1.friends[1]},
    success: function(response) {
        return response;
    },
	error: function( xhr, status ) {
            alert( "Sorry, there was a problem!" );
            },
});

$.when(call1, call2).then(function (response1, response2) {
		temp1=[],temp2=[],userLogin=[];
		for(var i in response1[0]){
		temp1=response1[0][i].friendList;
		}
		for(var i in response2[0]){
		temp2=response2[0][i].friendList;		
		}
		var array3 =common(temp1, temp2);
		userLogin.push({success:true,friends:array3,count: array3.length});
		 $('#third').text(JSON.stringify(userLogin));
   });

}

function api4(){
var dataSet1 = {
				"requestor": "user1@example.com",
				"target": "user2@example.com"
	};
var call1=$.ajax({
	type : "GET",
	dataType: "json",
    url : "http://localhost:3000/userList",
    data: {"p_email": dataSet1.requestor},
    success: function(response) {
			return response;
    }
});

var call2=$.ajax({
	type : "GET",
	dataType: "json",
    url : "http://localhost:3000/userList",
    data: {"p_email": dataSet1.target},
    success: function(response) {
			return response;
		}
});
  
$.when(call1, call2).then(function (response1, response2) {
	data=[];
	array3=[];
	for( var i in response1[0]){
	obj1=response1[0][i].notifications;
	}
	for( var i in response2[0]){
	obj2=response2[0][i].notifications;
	}
	for(var i in obj1){
	array3.push(obj1[i]);
	}
	for(var i in obj2){
	array3.push(obj2[i]);
	}
	data.push({'success':true});
	$('#fourth').text(JSON.stringify(data));
   });

}

function api5(){
 
var dataSet1 = {
				"requestor": "user1@example.com",
				"target": "user2@example.com"
	};
var call1=$.ajax({
	type : "GET",
	dataType: "json",
    url : "http://localhost:3000/userList",
    data: {"p_email": dataSet1.requestor},
    success: function(response) {
			return response;
    }
});

var call2=$.ajax({
	type : "GET",
	dataType: "json",
    url : "http://localhost:3000/userList",
    data: {"p_email": dataSet1.target},
    success: function(response) {
			return response;
		}
});
  
$.when(call1, call2).then(function (response1, response2) {
	data=[];
	array3=[];
	for( var i in response1[0]){
	obj1=response1[0][i].notifications;
	}
	for( var i in response2[0]){
	obj2=response2[0][i].notifications;
	}
	for(var i in obj1){
	array3.push(obj1[i]);
	}
	for(var i in obj2){
	array3.push(obj2[i]);
	}
	response1[0][i].notifications=array3;
	console.log(response1[0][i].notifications);
	data.push({'success':true});
	$('#five').text(JSON.stringify(data));
   }); 
}

function api6(){
data=[];
var dataSet1 = {
"sender": "john@example.com",
"text": "Hello World! kate@example.com"
};
$.ajax({
	type : "GET",
	dataType: "json",
    url : "http://localhost:3000/userList",
    data: {"p_email": dataSet1.sender},
    success: function(response) {
	var array3=[];
		for(var i in response){
		$.grep(response[i].friendList,function(value){
		 if($.inArray(value,response[i].blockList)<0){
			array3.push(value);
		 }
		});
		data.push({"success":true,"recipients": array3});
		$('#six').text(JSON.stringify(data));
		}
    }
});
}

 function common(arr1, arr2) {
  var newArr = [];
  newArr = arr1.filter(function(v){ return arr2.indexOf(v) >= 0;})
  newArr.concat(arr2.filter(function(v){ return newArr.indexOf(v) >= 0;}));
  return newArr;
}
