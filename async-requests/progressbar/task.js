function loadFile() {

  const form = document.forms.form;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
      
      const progress = document.getElementById( 'progress' );
      let timerId = setInterval(() => {
        if (xhr.readyState === xhr.DONE) {
            progress.value = 1.0; 
            clearInterval(timerId);
        } 
        else progress.value += 0.05;    
       }, 100);
    })

    xhr.open('POST','https://students.netoservices.ru/nestjs-backend/upload');

    let formData = new FormData(form);
    xhr.send(formData);

   });
  };

loadFile();