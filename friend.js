store.subscribe(() => {
  const state = store.getState()
  const { account, accounts } = state
  const friends = accounts.filter(a => a.id != account.id && account.friends.includes(a.id))
  const strangers = accounts.filter(a => a.id != account.id && !account.friends.includes(a.id))
  $('.friendListTable').html(friends.map(f => ' \
    <tr> \
      <td> \
        <img src="https://students.ucsd.edu/_images/icons-logos/UCSD-tritons300.jpg" \
            class="img-circle" width="60px"> \
      </td> \
      <td> \
        <a href="#">' + f.name + '</a> \
        <p>Free</p> \
      </td> \
      <td> \
        <a href="#"><img src=""></a> \
      </td> \
    </tr> \
  ') + strangers.map(s => ' \
    <tr> \
      <td> \
        <img src="https://students.ucsd.edu/_images/icons-logos/UCSD-tritons300.jpg" \
            class="img-circle" width="60px"> \
      </td> \
      <td> \
        <a href="#">' + s.name + '</a> \
        <p>Free</p> \
      </td> \
      <td> \
        <a href="#"><img class="stranger" src="image/user.png" uid=' + s.id +'></a> \
      </td> \
    </tr> \
  '))

  $('.stranger').click(e => {
    store.dispatch({
      type: 'friend',
      subtype: 'add',
      payload: Number(e.currentTarget.attributes.uid.value)
    })
  })
})

$('.friendListSearch').keyup(e => {
  // Declare variables
  let input, filter, table, tr, td, i;
  filter = e.currentTarget.value.toUpperCase()
  tr = $('.friendListTable')[0].getElementsByTagName("tr");

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
