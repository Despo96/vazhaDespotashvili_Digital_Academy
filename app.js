const cameraItems = [
  {
    cameraUrl:
      'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_ilce_7m3k_b_alpha_a7_iii_mirrorless_1519677934_1394219.jpg',
    title: 'Sony A7 III',
    subTitle:
      'Distinguished by its updated sensor design, the Sony a7 III is a well-rounded camera suitable for both photo and video applications.',
    category: 'Mirrorless',
    price: `1,998.00`,
    quantity: 32,
  },
  {
    cameraUrl:
      'https://static.bhphoto.com/images/multiple_images/images500x500/1656328551_IMG_1782613.jpg',
    title: 'BlackMagic Pocket 6K',
    subTitle:
      'To top their previous achievement with the Pocket Cinema Camera 6K, compact Super35 camera to their cine-style line with the Pocket Cinema .',

    category: 'Cinema',
    price: `2,535.00`,
    quantity: 4,
  },
  {
    cameraUrl:
      'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_eos_5d_mark_iv_1561852319_1274706.jpg',
    title: 'Canon Mark IV',
    subTitle:
      'Continuing on in their legacy of powerful workhorse cameras, Canon has released the 5D Mark IV DSLR with 24-105mm f/4L II Lens.',

    category: 'DSLR',
    price: `2,299.00`,
    quantity: 2,
  },
  {
    cameraUrl:
      'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/panasonic_dc_s5miix_ff_ml_cam_1672826732_1743638.jpg',
    title: 'Panasonic Lumix S5',
    subTitle:
      'Panasonic Lumix S5 meshes capable video and photo capabilities with a portable body design. full-frame 24.2MP CMOS sensor, by its UHD 4K60.',
    category: 'Mirrorless',
    price: `1,497.99`,
    quantity: 32,
  },
  {
    cameraUrl:
      'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/blackmagic_design_ursa_broadcast_g2_camera_1637060757_1674077.jpg',
    title: 'Blackmagic Design URSA',
    subTitle:
      'Update your broadcast studio or internet broadcast camera with a versatile 3-in-1 powerhouse using the Blackmagic Design URSA G2 Broadcast. ',

    category: 'Cinema',
    price: `4,195.00`,
    quantity: 4,
  },
  {
    cameraUrl:
      'https://static.bhphoto.com/images/multiple_images/images500x500/1582041400_IMG_1171893.jpg',
    title: 'Panasonic AG-CX350 4K',
    subTitle:
      'The Panasonic AG-CX350 4K Camcorder is designed for what Panasonic is calling the fusion of communication and broadcasting.',
    category: 'DSLR',
    price: `3,695.00`,
    quantity: 2,
  },
];

const maincontainer = document.querySelector('.cardContainer') //მთავარი კონტეიენერი

function makeCard(surati, title, subTitle, category){
    const card = document.createElement('div') // მთავარი ქარდს შექმნა.
    card.classList.add('card-1')
    const img = document.createElement('img') 
    const cardInfo = document.createElement('div')
    const cardTitle = document.createElement('div')
    const h3 = document.createElement('h3')
    const cardSubtitle = document.createElement('div')
    const para = document.createElement('p')
    const catPara = document.createElement('p')
    img.src = surati
    
    cardInfo.classList.add('cardInfo')
    cardTitle.classList.add('cardTitle')
    h3.innerText = title
    cardSubtitle.classList.add('cardSbutitle')
    cardSubtitle.appendChild(para)
    para.textContent = subTitle
   
    catPara.textContent = category

    
    card.appendChild(img)
    card.appendChild(cardInfo)
    cardInfo.appendChild(cardTitle)
    cardTitle.appendChild(h3)
    cardInfo.appendChild(catPara)
    cardInfo.appendChild(cardSubtitle)
    maincontainer.appendChild(card)
}



cameraItems.forEach(item => {
  makeCard(item.cameraUrl, item.title, item.subTitle, item.category)
})

// ` <div class="card-1">
// <img
//   src="https://static.bhphoto.com/images/images345x345/1561852319_1274706.jpg"
//   alt="Blackmagic"
// />
// <div class="cardInfo">
//   <div class="cardTitle"><h3>Canon Mark IV</h3></div>
//   <div class="cardSubtitle">
//     <p>
//       Continuing on in their legacy of powerful workhorse cameras,
//       Canon has released the 5D Mark IV DSLR.
//     </p>
//   </div>
//   <p class="cardPrice"><h3>$ 3,399.00</h3></p>
//   <p class="quantity">Quantity: 2</p>
//   <button class="addButton"><a href="#" class="addColor"> Add to Cart</a></button>
// </div>
// </div> `