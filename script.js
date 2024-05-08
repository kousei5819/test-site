$(function () {
	$.ajax({
		type: 'GET',
		url: 'https://graph.facebook.com/v6.0/17841406222344154?fields=name%2Cmedia.limit(6)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Ctimestamp%2Cthumbnail_url%2Cmedia_type%2Cusername%7D&access_token=EAARZBkrQ5absBOyZCrJ2xZA9ZBzneKfuSQr03PDJyBrxgWXo3ZAGsWAYDCfgjwvC8dGAXHChuZAfF2Q4Db89hOC8UVIZC3WrUfZC14pwLlaXwlWWsupDnobdZBOpyTFTcdq128VZBwWQYBb2w2442mkaKJVhDS2Yk7Yn8ZC07FZB3iS9ZA9aBMw2gJ9zwhM8C',
		dataType: 'json',
		success: function (json) {

			var html = '';
			var insta = json.media.data;
			for (var i = 0; i < insta.length; i++) {
				var media_type = insta[i].media_type;
				if (insta[i].media_type == "IMAGE" || insta[i].media_type == "CAROUSEL_ALBUM") {
					html += '<li><a href="' + insta[i].permalink + '" target="_blank" rel="noopener noreferrer"><span class="square-content"><img src="' + insta[i].media_url + '"></span></a></li>';
				} else if (media_type == "VIDEO") {
					html += '<li><a href="' + insta[i].permalink + '" target="_blank" rel="noopener noreferrer"><span class="square-content"><img src="' + insta[i].thumbnail_url + '"></span></a></li>';
					var media_type = '';
				}
			}
			$(".insta_list").append(html);
		},
		error: function () {

			//エラー時の処理
		}
	});
});

