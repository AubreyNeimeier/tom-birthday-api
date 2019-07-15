<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInVzZXJuYW1lIjoibW9ydGdhZ2UiLCJvcmdJZCI6NSwicm9sZUlkIjo4LCJncmFudF90eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNTYzMjAzMDk0LCJleHAiOjE1NjMyODk0OTR9.GQLHKTZcSI8cOLQFjAVOcNE-UkQB_dlsBUkFjNqJt_k';
}

function findContacts() {
  debugger
  const startDate = $('#startDate').value
  const endDate = $('#endDate').value
  fetch(
    `https://api-sandbox.tomnx.com/api/corereports/birthday?startDate=${startDate}&endDate=${endDate}`,
    {
      method:'POST',
      headers: {
        Authorization: `${getToken()}`
      }
    })
  .then(res => res.json())
  .then(json => createTable(json))
}

function showResults(json) {
  //debugger;
  //use this function to display the results
  $('#results').html(createLink(json));
}

function createTable(json){
  const contacts = json.data.map(con => 
  `<ul>con.userFullName</ul>`)
  debugger
  $('#results').innerHTML = contacts
}




