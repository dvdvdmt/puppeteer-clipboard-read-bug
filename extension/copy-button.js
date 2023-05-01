const copyButton = document.getElementById('copy-button');

copyButton.addEventListener('click', () => {
  const text = 'Hello world!';
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch((error) => {
      console.error('Could not copy text: ', error);
    });
});
