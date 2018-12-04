const pad2 = num => {
  let str = String(num)
  if (str.length === 1) {
    str = '0' + str
  }
  return str
}

const timeadd30 = time => {
  time = new Date(time.slice(0, 4), time.slice(4, 6), time.slice(6, 8), time.slice(8, 10), time.slice(10, 12))
  time.setTime(time.getTime() + 1800000)
  return time.getFullYear() + pad2(time.getMonth()) + pad2(time.getDate()) + pad2(time.getHours()) + pad2(time.getMinutes())
}

const color2num = color => {
  if (color === '') {
    return 3
  }
  return Number(color.slice(4, color.indexOf(','))) / 85
}

const num2color = num => {
  let str = (Math.floor(85 * num) * 256 * 256 + Math.floor(35 * num) * 256 + 38655).toString(16)
  while (str.length < 6) {
    str = '0' + str
  }
  return '#' + str
}

store.subscribe(() => {
  const state = store.getState()
  const page = state.calendar
  const calendar = state.account.calendar
  $('.description').addClass('untoggled')
  $('.description.' + page.button).removeClass('untoggled')
  $('.circle').hide()
  $('.circle.untoggled').show()
  $('.circle.' + page.button).show()
  $('.circle.untoggled.' + page.button).hide()

  $('.timeblock').css({ backgroundColor: 'white', borderBottomColor: '#eeeeee', borderBottomStyle: 'dotted' })

  for (let temp of calendar) {
    for (let time = temp[0]; time < temp[1]; time = timeadd30(time)) {
      $('#' + time).css({ backgroundColor: num2color(temp[2]), borderBottomColor: num2color(temp[2]), borderBottomStyle: 'solid' })
    }
  }

  if (page.popup) {
    $('.calendarAddPopup').show()
  } else {
    $('.calendarAddPopup').hide()
  }
})

store.dispatch({
  type: 'init'
})

var color = '#0096ff'

$('.availitem').click(e => {
  let target = e.currentTarget

  const button = target.classList[target.classList.length - 1]

  store.dispatch({
    type: 'calendar',
    subtype: 'button',
    payload: button
  })

  switch (button) {
    case 'free':
      color = '#0096ff'
      break
    case 'likely':
      color = '#55b9ff'
      break
    case 'unlikely':
      color = '#aadcaa'
      break
    case 'unavailable':
      color = '#ffffff'
      break
  }
})

$('.calendaradd').click(e => {
  $('.popupPage').show()
  $('.calendarAddPopup').show()
})

$('#calendarAddPopupInput1').bootstrapMaterialDatePicker({ format : 'ddd, DD MMM, YYYY', minDate: new Date(2018, 10, 22), maxDate: new Date(2018, 10, 28), currentDate: new Date(2018, 10, 22), time: false }).on('change', (e, date) => {
  $('#calendarAddPopupInput3').bootstrapMaterialDatePicker('setMinDate', date)
})

$('#calendarAddPopupInput2').bootstrapMaterialDatePicker({ format : 'HH:mm', currentDate: new Date(2018, 10, 22), date: false })

$('#calendarAddPopupInput3').bootstrapMaterialDatePicker({ format : 'ddd, DD MMM, YYYY', minDate: new Date(2018, 10, 22), maxDate: new Date(2018, 10, 28), currentDate: new Date(2018, 10, 22), time: false }).on('change', (e, date) => {
  $('#calendarAddPopupInput1').bootstrapMaterialDatePicker('setMinDate', date)
})

$('#calendarAddPopupInput4').bootstrapMaterialDatePicker({ format : 'HH:mm', currentDate: new Date(2018, 10, 22, 1), date: false })

$('.calendarAddPopupConfirm').click(e => {
  const calendar = store.getState().account.calendar
  const startDate = $('#calendarAddPopupInput1')[0].value
  let startTime = $('#calendarAddPopupInput2')[0].value
  const endDate = $('#calendarAddPopupInput3')[0].value
  let endTime = $('#calendarAddPopupInput4')[0].value

  if (parseInt(startTime.substring(3)) >= 30) {
    startTime = startTime.substring(0, 3) + "30"
  } else {
    startTime = startTime.substring(0, 3) + "00"
  }

  if (parseInt(endTime.substring(3)) >= 30) {
    endTime = endTime.substring(0, 3) + "30"
  } else {
    endTime = endTime.substring(0, 3) + "00"
  }

  const start = '201810' + startDate.substring(5, 7) + startTime.substring(0, 2) + startTime.substring(3)
  const end = '201810' + endDate.substring(5, 7) + endTime.substring(0, 2) + endTime.substring(3)

  for (let i = 0; i < calendar.length; ++i) {
    if (calendar[i][0] < start && calendar[i][1] > start && end >= calendar[i][1]) {
      calendar[i][1] = start
    } else if (start <= calendar[i][0] && calendar[i][0] < end && calendar[i][1] > end) {
      calendar[i][0] = end
    } else if (calendar[i][0] < start && calendar[i][1] > end) {
      calendar.push([end, calendar[i][1], calendar[i][2]])
      calendar[i][1] = start
    } else if (start <= calendar[i][0] && end >= calendar[i][1]) {
      calendar.splice(i, 1)
      --i
    }
  }

  const num = parseInt(color.substring(1, 3), 16) / 85
  if (num != 3) {
    calendar.push([ start, end, num ])
  }

  store.dispatch({
    type: 'calendar',
    subtype: 'update',
    payload: calendar
  })

  $('.calendarAddPopup input').bootstrapMaterialDatePicker('setDate', new Date(2018, 10, 22))
})

$('.calendarAddPopupCancel').click(e => {
  $('.calendarAddPopup input').bootstrapMaterialDatePicker('setDate', new Date(2018, 10, 22))
})

// $('.mainPage .timeblock').on('touchstart', e => {
//   if (!tapped) {
//     tapped = setTimeout(() => {
//       tapped = null
//     }, 300)
//   } else {
//     clearTimeout(tapped)
//     tapped = null
//     e.preventDefault()
//     doubleTapped = true

//     const element = $(e.target)[0]
//     offsetTop = element.offsetTop
//     offsetLeft = element.offsetLeft
//     element.style.backgroundColor = color
//     if (color === '#ffffff') {
//       element.style.borderBottomStyle = 'dotted'
//       element.style.borderBottomColor = '#eeeeee'
//     } else {
//       element.style.borderBottomStyle = 'solid'
//       element.style.borderBottomColor = color
//     }
//   }
// })

// $('.mainPage .timeblock').on('touchend', e => {
//   if (doubleTapped) {
//     doubleTapped = false
//     const calendar = []
//     let date
//     let temp = null
//     let timeblocks = $('.mainPage .timeblock')
//     let c

//     for (let i = 0; i < timeblocks.length - 1; ++i) {
//       c = color2num(timeblocks[i].style.backgroundColor)
//       if (c < 3) {
//         if (temp == null) {
//           temp = [timeblocks[i].id, timeblocks[i].id, c]
//         } else {
//           if (c === temp[2]) {
//             temp[1] = timeblocks[i].id
//           } else {
//             calendar.push(temp)
//             temp = [timeblocks[i].id, timeblocks[i].id, c]
//           }
//         }
//       } else if (temp != null) {
//         calendar.push(temp)
//         temp = null
//       }
//     }

//     store.dispatch({
//       type: 'calendar',
//       subtype: 'update',
//       payload: calendar
//     })

//   }
// })

// $('.mainPage .timeblock').on('touchmove', e => {
//   if (doubleTapped) {
//     const touch = e.originalEvent.touches[0]
//     $('.timeblock').each((index, element) => {
//       if (element.offsetLeft === offsetLeft && touch.clientX > offsetLeft && touch.clientX < offsetLeft + element.offsetWidth &&
//           ((element.offsetTop > offsetTop && touch.clientY + $('.timewrapper')[0].scrollTop > element.offsetTop) ||
//           (touch.clientY + $('.timewrapper')[0].scrollTop < element.offsetTop + element.offsetHeight && element.offsetTop < offsetTop))) {
//         element.style.backgroundColor = color
//         if (color === '#ffffff') {
//           element.style.borderBottomStyle = 'dotted'
//           element.style.borderBottomColor = '#eeeeee'
//         } else {
//           element.style.borderBottomStyle = 'solid'
//           element.style.borderBottomColor = color
//         }
//       }
//     })
//   }
// })

$('.questionMark').click(e => {
  $('.popupPage').show()
  $('.popupBox').show()
  $('.calendarAddPopup').hide()
})