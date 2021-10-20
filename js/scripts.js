function proceed () {
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=media');
    form.style.display = 'hidden';
    document.body.appendChild(form)
    form.submit();
}

