function loadFile() {

  const form = document.forms.form;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    let loaded = 0;
   
    let percent = 0;

    xhr.upload.onprogress = function(event) {

      const timerId = setInterval(() => {
        // console.log(`Отправлено ${event.loaded} из ${event.total} байт`);
        
        loaded = loaded + event.loaded;

        // процент
        percent = Math.round((event.loaded / event.total) * 100) ;

        console.log(`Отправлено ${event.loaded} % из ${event.total} байт`);

        

        if (xhr.status === 201) {
          
            console.log('status',xhr.status);
            clearInterval(timerId);
          };
          //         progress.value = 1.0; 
          //         clearInterval(timerId); 
      },3000)
     
    };

    // xhr.addEventListener('readystatechange', () => {
      
    //   const progress = document.getElementById( 'progress' );
    //   let timerId = setInterval(() => {
    //     if (xhr.readyState === xhr.DONE) {
    //         progress.value = 1.0; 
    //         clearInterval(timerId);
    //     } 
    //     else progress.value += 0.05;    
    //    }, 100);
    // })

    xhr.open('POST','https://students.netoservices.ru/nestjs-backend/upload');

    let formData = new FormData(form);
    xhr.send(formData);

   });
  };

loadFile();