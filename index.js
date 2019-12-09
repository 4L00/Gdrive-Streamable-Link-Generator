

var url_beg = "https://www.googleapis.com/drive/v3/files/";
var url_end = "/?key=AIzaSyB62UE9-n_KYeC0bvcpTdJQ0cEfhVVMuKg&alt=media";

$("button").click(function() {

  var lnk = $("input").val();
  var pro = lnk.split("/");
  var gt = pro[pro.length - 2];

  $("input:text").val(url_beg + gt + url_end);
});
