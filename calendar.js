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

  for (let temp of calendar) {
    for (let time = temp[0]; time <= temp[1]; time = timeadd30(time)) {
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
})

$('#calendarAddPopupInput1').bootstrapMaterialDatePicker({ format : 'ddd, DD MMM YYYY - HH:mm', minDate: new Date(2018, 10, 22), maxDate: new Date(2018, 10, 29) }).on('change', (e, date) => {
  $('#calendarAddPopupInput2').bootstrapMaterialDatePicker('setMinDate', date)
})

$('#calendarAddPopupInput2').bootstrapMaterialDatePicker({ format : 'ddd, DD MMM YYYY - HH:mm', minDate: new Date(2018, 10, 22), maxDate: new Date(2018, 10, 29) }).on('change', (e, date) => {
  $('#calendarAddPopupInput1').bootstrapMaterialDatePicker('setMaxDate', date)
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