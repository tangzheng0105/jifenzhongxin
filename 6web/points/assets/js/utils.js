function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]); return null;
};

function myRequest(url, data, callback){
    // var host = window.location.origin
    // var host = "http://192.168.1.100:89";
    var host = "http://47.95.220.122:90";
    var setting = {}
    data.session = GetQueryString('session') || $.fn.cookie('session')
    setting.url = host+url;
    setting.type = "POST";
    setting.data = data;
    setting.success = function(res) {
        callback(res)
    }
    $.ajax(setting)
}