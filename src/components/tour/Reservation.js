import React from 'react'
import RightModal from '../modals/RightModal'
import TourForm from '../forms/ContactForm'

export default ({ open, onClose }) => (
  <RightModal open={open} onClose={onClose} title='Formularz Rezerwacji'>
    <TourForm />
  </RightModal>
)