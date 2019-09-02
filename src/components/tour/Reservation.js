import React from 'react'
import RightModal from '../modals/RightModal'
import TourForm from '../forms/TourForm'

export default ({ open, onClose }) => (
  <RightModal open={open} onClose={onClose} title='Rezerwujesz'>
    <TourForm />
  </RightModal>
)