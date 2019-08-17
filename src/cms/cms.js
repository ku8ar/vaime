import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import TourPagePreview from './preview-templates/TourPagePreview'
import StandardPagePreview from './preview-templates/StandardPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('tour', TourPagePreview)

CMS.registerPreviewTemplate('tours', StandardPagePreview)
CMS.registerPreviewTemplate('contact', StandardPagePreview)
CMS.registerPreviewTemplate('faq', StandardPagePreview)
CMS.registerPreviewTemplate('georgia', StandardPagePreview)
CMS.registerPreviewTemplate('partnership', StandardPagePreview)