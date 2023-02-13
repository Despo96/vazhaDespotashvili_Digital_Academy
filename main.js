
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
        'To top their previous achievement with the Pocket Cinema Camera 6K, compact Super35 camera to their cine-style line with the Pocket Cinema.',
  
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
  
const maincontainer = document.querySelector('.cardContainer')


const renderItem = (item)=>{
    return `<div class="card-1">
        <img
        src=${item.cameraUrl}
        alt="${item.title}"
        />
        <div class="cardInfo">
        <div class="cardTitle"><h3>${item.title}</h3></div>
        <div class="category ${item.category}">${item.category}</div>
        <div class="cardSubtitle">
            <p>
            ${item.subTitle}
            </p>
        </div>
        <p class="cardPrice"><h3>$ ${item.price}</h3></p>
        <p class="quantity">Quantity: ${item.quantity}</p>
        <button class="addButton"><a href="#" class="addColor"> Add to Cart</a></button>
        </div>
    </div>`
};


const cardContainer = document.querySelector(".cardContainer");



cardContainer.innerHTML = cameraItems.map((item) => renderItem(item)).join('');



const btn = document.querySelectorAll(".btn");

const btns = [...btn];
// კატეგორიის ღილაკები
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(btn.textContent);
    if (btn.textContent === "All") {
      cardContainer.innerHTML = cameraItems.map((item) => renderItem(item)).join('');
      return;
    }

    let filtered = cameraItems.filter((cameraItemsFilter) => cameraItemsFilter.category === btn.textContent);

    cardContainer.innerHTML = filtered.map((item) => renderItem(item)).join('');
  });
});

// საძიებო ველი
const searchInput = document.querySelector('.searchInput')
searchInput.addEventListener("input",  () => {
  const Value = searchInput.value.toLowerCase();
  const catCamera = cameraItems.filter(function (camera) {
    return (
      camera.title.toLowerCase().includes(Value) ||
      camera.subTitle.toLowerCase().includes(Value) ||
      camera.category.toLowerCase().includes(Value)
    );
  });

  // console.log(catCamera);
  cardContainer.innerHTML = catCamera.map((item) => renderItem(item)).join('');
});