store.subscribe(() => {
  const state = store.getState()
  let accounts
  if (state.guestbar === 'guestList') {
    accounts = state.event.participants

    $('.guestTable').html(accounts.map(a => ' \
      <tr> \
        <td> \
          <img src="https://students.ucsd.edu/_images/icons-logos/UCSD-tritons300.jpg" \
              class="img-circle" width="60px"> \
        </td> \
        <td> \
          <a href="#">' + a.name + '</a> \
          <p>' + (a.willingness === 0 ? 'Going' : a.willingness === 1 ? 'Maybe' : a.willingness === 2 ? 'No' : 'Pending') + '</p> \
        </td> \
      </tr> \
    '))  
  } else {
    accounts = state.accounts.filter(a => !state.event.participants.some(p => p.id === a.id))
    accounts = accounts.filter(a => state.account.friends.includes(a.id)).concat(accounts.filter(a => !state.account.friends.includes(a.id)))

    $('.guestTable').html(accounts.map(a => ' \
      <tr> \
        <td> \
          <img src="https://students.ucsd.edu/_images/icons-logos/UCSD-tritons300.jpg" \
              class="img-circle" width="60px"> \
        </td> \
        <td> \
          <a href="#">' + a.name + '</a> \
          <p></p> \
        </td> \
        <td> \
          <a href="#"><img class="invite" src="image/guest.svg" uid=' + a.id +'></a> \
        </td> \
      </tr> \
    '))
  }
  $('.invite').click(e => {
    store.dispatch({
      type: 'event',
      subtype: 'invite',
      payload: Number(e.currentTarget.attributes.uid.value)
    })
  })
})

$('.guestSearch').keyup(e => {
  // Declare variables
  let input, filter, table, tr, td, i;
  filter = e.currentTarget.value.toUpperCase()
  tr = $('.guestTable')[0].getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
})

$('.guestList').click(e => {
  $('.invitePeople')[0].style.color = 'lightgray'
  e.currentTarget.style.color = 'black'
  store.dispatch({
    type: 'guestbar',
    payload: 'guestList'
  })
})

$('.invitePeople').click(e => {
  $('.guestList')[0].style.color = 'lightgray'
  e.currentTarget.style.color = 'black'
  store.dispatch({
    type: 'guestbar',
    payload: 'invitePeople'
  })
})