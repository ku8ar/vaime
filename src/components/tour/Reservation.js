import React from 'react'
import RightModal from '../modals/RightModal'
import TourForm from '../forms/TourForm'

export default ({ open, onClose, ...props }) => (
  <RightModal open={open} onClose={onClose}>
    <TourForm {...props} />
  </RightModal>
)
