import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import HomePreview from './templates/HomePreview'
import TourPreview from './templates/TourPreview'
import PagePreview from './templates/PagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', HomePreview)
CMS.registerPreviewTemplate('tour', TourPreview)
CMS.registerPreviewTemplate('page', PagePreview)
