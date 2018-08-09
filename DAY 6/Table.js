function table()
{
  var x=prompt("Enter a number:",2);
  var alertBody = '';
  for (var i=1; i<10; i++) {
    alertBody += x + "*" + i +"="+x*i + '\n';
  }
  alert(alertBody);
}
