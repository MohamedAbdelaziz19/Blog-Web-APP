// lib/multer.ts

import multer from 'multer';
import path from 'path';

// Define storage location and filename
const storage = multer.diskStorage({
  destination: function (_req, file, cb) {
    cb(null, 'public/uploads'); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export default upload;
