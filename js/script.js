const formInfo = () => {
  const inputs = document.querySelectorAll('input'),
    clearBtn = document.querySelector('.btn__clear'),
    textArea = document.querySelector('textarea'),
    form = document.querySelector('form'),
    select = document.querySelectorAll('select');

  const clearFields = () => {
    inputs.forEach((item) => {
      item.value = '';
    });

    select.forEach((item) => {
      item.value = '';
    });
    textArea.value = '';
  };

  clearBtn.addEventListener('click', (e) => {
    e.preventDefault();

    clearFields();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    let res = [];

    for (const pair of formData.entries()) {
      let curr = JSON.stringify(`${pair[0]}: ${pair[1]}`);
      console.log(curr);
    }

    const value = formData.get('tower');
  });
};
formInfo();
