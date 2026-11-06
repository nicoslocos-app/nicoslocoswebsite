const dialog=document.querySelector('#image-dialog');
if(dialog&&typeof dialog.showModal==='function'){
 const fullImage=dialog.querySelector('img');
 document.querySelectorAll('[data-full]').forEach(button=>button.addEventListener('click',()=>{
  fullImage.src=button.dataset.full;
  fullImage.alt=button.querySelector('img').alt;
  dialog.showModal();
 }));
 dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
}
