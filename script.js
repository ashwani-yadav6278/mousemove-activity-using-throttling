
// var root=document.querySelector("#root").addEventListener("mousemove",(det)=>{
//     let div =document.createElement("div");
//     document.body.appendChild(div);
    

// })

document.querySelector("#root");
const throttleFunction=(func,delay)=>{
    let prev=0;
    return(...args)=>{
        let now=new Date().getTime();
        if(now-prev>delay){
            prev=now;
            return func(...args);
        }
    }
}
document.querySelector("#root").addEventListener("mousemove",throttleFunction((det)=>{
  var div=document.createElement("div");
  div.classList.add("image-div");
  div.style.left=det.clientX+"px";
  div.style.top=det.clientY+"px";
  document.body.appendChild(div);
  console.log(div);

  let img=document.createElement("img");
  img.setAttribute("src","https://images.unsplash.com/photo-1755009012652-4fd36529e63a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D");
  img.classList.add("image");
  div.appendChild(img);
  gsap.to(img,{
    y:"0",
    duration:.6,
    ease:Power1,

  
  
  })
  gsap.to(img,{
    y:"100%",
    delay:.6,

    ease:Power2,
  })
  setTimeout(()=>{
    div.remove();
  },800)

  
},400))