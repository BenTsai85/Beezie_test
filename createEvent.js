store.subscribe(() => {
  const event = store.getState().event
  $('.createEventName')[0].value = event.name ? event.name : ""
  $('.createEventDetail')[0].value = event.detail ? event.detail : ""
  $('.createEventLocation')[0].value = event.location ? event.location : ""
  if (event.image) {
    $('.createEventImage img')[0].src = event.image
  } else {
    $('.createEventImage img')[0].src = 'image/upload.png'
  }

  if (event.period) {
    $('input[name="datetime1"]').data('daterangepicker').setStartDate(event.period[0])
    $('input[name="datetime2"]').data('daterangepicker').setStartDate(event.period[1])
  } else {
    $('input[name="datetime1"]')[0].value = ""
    $('input[name="datetime2"]')[0].value = ""
  }

  if (event.time) {
    $('input[name="datetime3"]').data('daterangepicker').setStartDate(event.time[0])
    $('input[name="datetime4"]').data('daterangepicker').setStartDate(event.time[1])
  } else {
    $('input[name="datetime3"]')[0].value = ""
    $('input[name="datetime4"]')[0].value = ""
  }
})

$('.createEventSubmit').click(() => {
  if (store.getState().subnav === 'editEvent') {
    store.dispatch({
      type: 'event',
      subtype: 'edit'
    })
  } else {
    store.dispatch({
      type: 'event',
      subtype: 'create'
    })
  }
  store.dispatch({
    type: 'subnav',
    payload: 'eventDetail'
  })
})

$('.createEventName').change(e => {
  store.dispatch({
    type: 'event',
    subtype: 'name',
    payload: e.currentTarget.value
  })
})

$('.createEventDetail').change(e => {
  store.dispatch({
    type: 'event',
    subtype: 'detail',
    payload: e.currentTarget.value
  })
})

$('.createEventLocation').change(e => {
  store.dispatch({
    type: 'event',
    subtype: 'location',
    payload: e.currentTarget.value
  })
})

$('.createEventTime').change(e => {
  if ($('input[name="datetime3"]').data('daterangepicker') && $('input[name="datetime4"]').data('daterangepicker') &&
    $('input[name="datetime3"]')[0].value !== "" && $('input[name="datetime4"]')[0].value !== "") {
    store.dispatch({
      type: 'event',
      subtype: 'time',
      payload: [ $('input[name="datetime3"]').data('daterangepicker').startDate._d, $('input[name="datetime4"]').data('daterangepicker').startDate._d ]
    })
  }
})

$('.createEventPeriod').change(e => {
  if ($('input[name="datetime1"]').data('daterangepicker') && $('input[name="datetime2"]').data('daterangepicker') &&
    $('input[name="datetime1"]')[0].value !== "" && $('input[name="datetime2"]')[0].value !== "") {
    store.dispatch({
      type: 'event',
      subtype: 'period',
      payload: [ $('input[name="datetime1"]').data('daterangepicker').startDate._d, $('input[name="datetime2"]').data('daterangepicker').startDate._d ]
    })
  }
})

$('.createEventImage input').change(e => {
  const input = e.currentTarget

  if (input.files[0]) {
    const reader = new FileReader();

    reader.onload = e => {
      $('.createEventImage img')[0].src = e.target.result
      store.dispatch({
        type: 'event',
        subtype: 'image',
        payload: e.target.result
      })
    }

    reader.readAsDataURL(input.files[0])
  }
})


$(function() {
  $('input[name="datetime1"]').daterangepicker({
    singleDatePicker: true,
    opens: "center",
    drops: "up",
  }, start => {
    $('input[name="datetime2"]').data('daterangepicker').minDate = start
    $('input[name="datetime3"]').data('daterangepicker').minDate = start
    $('input[name="datetime4"]').data('daterangepicker').minDate = start
    if ($('input[name="datetime3"]')[0].value === "") {
      $('input[name="datetime3"]').data('daterangepicker').startDate = start
    }
    if ($('input[name="datetime4"]')[0].value === "") {
      $('input[name="datetime4"]').data('daterangepicker').startDate = start
    }
  })
  $('input[name="datetime2"]').daterangepicker({
    singleDatePicker: true,
    opens: "center",
    drops: "up",
  }, start => {
    $('input[name="datetime3"]').data('daterangepicker').maxDate = start
    $('input[name="datetime4"]').data('daterangepicker').maxDate = start
  })
  $('input[name="datetime3"]').daterangepicker({
    singleDatePicker: true,
    opens: "center",
    drops: "up",
    timePicker: true,
    timePicker24Hour: true,
    locale: {
      format: 'MM/DD/YYYY HH:mm'
    }
  }, start => {
    $('input[name="datetime4"]').data('daterangepicker').minDate = start
    if ($('input[name="datetime4"]')[0].value === "") {
      $('input[name="datetime4"]').data('daterangepicker').startDate = start
    }
  })
  $('input[name="datetime4"]').daterangepicker({
    singleDatePicker: true,
    opens: "center",
    drops: "up",
    timePicker: true,
    timePicker24Hour: true,
    locale: {
      format: 'MM/DD/YYYY HH:mm'
    }
  })
})
