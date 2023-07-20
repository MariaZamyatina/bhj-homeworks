function upload() {

  const form = document.forms.form;
  let value = 0;
  
  form.addEventListener('submit', (event) => {

    event.preventDefault();

    let xhr = new XMLHttpRequest();

    // отслеживаем процесс отправки
    xhr.upload.onprogress = function(event) {

      value = (event.loaded / event.total);
      document.getElementById( 'progress' ).value = value;

      const percent = Math.round(value * 100)

      console.log( `Отправлено ${percent} %` );
    };

    // смотрим статус отправки
    xhr.onload = xhr.onerror = function() {
      if (this.status == 200 || this.status == 201 ) {
        alert("Файл успешно загружен");
      };
      if (this.status == 0)
        alert(`Ошибка загрузки. Проверьте подключение к интернету`);
      if (this.status >= 400 && this.status < 500) {                                                                                    
        alert(`Ошибка загрузки. Проверьте корректность пути к ресурсу и разрешение доступа к нему`);
      };
      if (this.status >= 500 && this.status < 500) {
        alert(`Файл не загружен. Ошибка на стороне сервера`);
      };
    };
  
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    let formData = new FormData(form);
    console.log(formData);
    xhr.send(formData);
  })
}

upload();
