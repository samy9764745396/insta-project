const cloudinary= require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({ 
    cloud_name: 'dmabtjlyd-mine name',  
    api_key: '723424335922965', 
    api_secret: 'njEYlCbspwcB8_bdfWlQOBlVKYY' 
  });


  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: ' instaClone'
    }

})

module.exports = { cloudinary, storage }

// our image files will enter here