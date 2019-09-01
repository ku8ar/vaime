import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import HomePreview from './templates/HomePreview'
import TourPreview from './templates/TourPreview'
import PagePreview from './templates/PagePreview'
import GlobalPreview from './templates/GlobalPreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', HomePreview)
CMS.registerPreviewTemplate('global', GlobalPreview)
CMS.registerPreviewTemplate('tour', TourPreview)
CMS.registerPreviewTemplate('pages', PagePreview)