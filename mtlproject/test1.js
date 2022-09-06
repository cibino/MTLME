console.log('test1')
document.getElementById('txt1')
console.log('test.1.5')
document.getElementById('txt1').onkeyup = function () {
  document.getElementById('txt2').value = this.value
  console.log('test2')
}

const ang = 'Angel'
console.log(ang.replace('Angel', 'Angor'))

document.createElement('button')
const btn = document.createElement('button')
btn.innerHTML = 'Magic!'
document.body.appendChild(btn)
btn.type = 'submit'
btn.onclick = function myFunction () {
  const txtr = document.getElementById('txt1').value
  const replace = txtr.replaceAll('Angel', 'Angor')
  document.getElementById('txt1').value = replace

  const txtrs = document.getElementById('txt1').value
  const replaces = txtrs.replaceAll('Sander', 'Sunder')
  document.getElementById('txt1').value = replaces

  const txtrk = document.getElementById('txt1').value
  const replacek = txtrk.replaceAll('Kante', 'Kanter')
  document.getElementById('txt1').value = replacek
}
// btn.addEventListener('click', () => {
// alert('Button Clicked')
// })
