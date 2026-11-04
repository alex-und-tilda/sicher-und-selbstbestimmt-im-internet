/* Druckt nur die dargestellten Originalseiten, ohne das Original-PDF zu ändern. */
document.getElementById('seitenDrucken').addEventListener('click',async()=>{
 await Promise.all([...document.images].map(img=>img.decode().catch(()=>{})));
 window.print();
});
