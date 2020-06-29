//got code from https://robkendal.co.uk/blog/2020-04-17-saving-text-to-client-side-file-using-vanilla-js/
const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], {type: contentType});
    
    a.href= URL.createObjectURL(file);
    a.download = filename;
    a.click();
    
    URL.revokeObjectURL(a.href);
  };
  
  document.querySelector('#btnSave1').addEventListener('click', () => {
    const textArea = document.querySelectorAll('textarea').item(0);
    
    downloadToFile(textArea.value, 'run.sh', 'text/plain');

  });

  document.querySelector('#btnSave2').addEventListener('click', () => {
    const textArea = document.querySelectorAll('textarea').item(1);
    
    downloadToFile(textArea.value, 'madness.sh', 'text/plain');

  });

  document.querySelector('#btnSave3').addEventListener('click', () => {
    const textArea = document.querySelectorAll('textarea').item(2);
    
    downloadToFile(textArea.value, 'paper.sh', 'text/plain');

  });

  document.querySelector('#btnSave4').addEventListener('click', () => {
    const textArea = document.querySelectorAll('textarea').item(3);
    
    downloadToFile(textArea.value, 'table.py', 'text/plain');

  });

  document.querySelector('#btnSave5').addEventListener('click', () => {
    const textArea = document.querySelectorAll('textarea').item(4);
    
    downloadToFile(textArea.value, 'correct.txt', 'text/plain');

  });