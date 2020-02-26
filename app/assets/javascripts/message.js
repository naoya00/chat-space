$(function(){

  function buildHTML(message){
    if (message.image) {
      var html = `<div class="chat-main__messages--box">
      <div class="chat-main__messages--box-user">
      <div class="chat-main__messages--box-user-name">
      ${message.user_name}
      </div>
      <div class="chat-main__messages--box-user-date">
      ${message.created_at}
      </div>
      </div>
      <div class="chat-main__messages--box-massege">
      <p class="lower-message__content">
      ${message.content}
      </p>
      <img class="lower-message__image" src="${message.image}">
      </div>
      </div>`
      return html;
    } else {
      var html = `<div class="chat-main__messages--box">
      <div class="chat-main__messages--box-user">
      <div class="chat-main__messages--box-user-name">
      ${message.user_name}
      </div>
      <div class="chat-main__messages--box-user-date">
      ${message.created_at}
      </div>
      </div>
      <div class="chat-main__messages--box-massege">
      <p class="lower-message__content">
      ${message.content}
      </p>
      </div>
      </div>`
    
    return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__messages').append(html);
      $('#new_message')[0].reset();
      $('.chat-main__messages').animate({ scrollTop: $('.chat-main__messages')[0].scrollHeight});
      $(".chat-main__form--right").prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
  });
});