function calcCheckSum(num) {
  var ret = 0;
  var i;

  if (typeof num != 'number' || isNaN(num)) {
    throw new Error('Number expected. { ' +
      typeof num + ' } ' +
      num + ' found.');
  }

  num = num.toString();

  for (i = num.length; i > 0; i--) {
    ret += parseInt(num.slice(i - 1, i));
  }

  return ret;
}
