$('.popupPage').click(e => {
  if (e.target.className != 'popupPage') {
    return
  }
  $(e.currentTarget).hide()
  $('.popupBox').hide()
  $('.calendarAddPopup').show()
})