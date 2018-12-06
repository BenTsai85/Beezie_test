$('.popupPage').click(e => {
  console.log(e.target)
  if (e.target.className != 'popupPage') {
    return
  }
  $(e.currentTarget).hide()
  $('.popupBox').hide()
  $('.calendarAddPopup').show()
})