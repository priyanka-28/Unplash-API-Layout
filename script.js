function Trending(){
	let clientId= "vqU37OI8CTJI1d9JeSB70jyUhoKLWZdsoEVYeCbYUR8";
	let url="https://api.unsplash.com/collections/1580860/photos?client_id="+clientId;
	$("#result").empty();
	document.getElementById("trending").classList.add("active");
	document.getElementById("new").classList.remove("active");
	fetch(url)
		.then(function(data){
			return data.json();
		})
		.then(function (data){
			console.log(data);

			data.forEach(photo => {
				let result = `
					<img src="${photo.urls.small}">
				`;
				var currentscrollHeight = 0;
				var count = 0;

				$(window).on("scroll", function () {

				  const scrollHeight = $(document).height();
				  const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
				  const isBottom = scrollHeight - 100 < scrollPos;

				  if (isBottom && currentscrollHeight < scrollHeight) {

				    for(var i = 0; i < 1; i++) {
				      $("#result").append(result);
				      count++;
				    }
				    currentscrollHeight = scrollHeight;
  					}
				});

			})
		})

}
				
function New(){
	let clientId= "vqU37OI8CTJI1d9JeSB70jyUhoKLWZdsoEVYeCbYUR8";
	let url="https://api.unsplash.com/collections/139386/photos?client_id="+clientId;
	$("#result").empty();
	document.getElementById("new").classList.add("active");
	document.getElementById("trending").classList.remove("active");
	fetch(url)
		.then(function(data){
			return data.json();
		})
		.then(function (data){
			console.log(data);

			data.forEach(photo => {
				let result = `
					<img src="${photo.urls.small}">
				`;

				
				var currentscrollHeight = 0;
				var count = 0;

				$(window).on("scroll", function () {

				  const scrollHeight = $(document).height();
				  const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
				  const isBottom = scrollHeight - 100 < scrollPos;

				  if (isBottom && currentscrollHeight < scrollHeight) {

				    for(var i = 0; i < 1; i++) {
				      $("#result").append(result);
				      count++;
				    }
				    currentscrollHeight = scrollHeight;
  					}
				});

			})
		})

}
