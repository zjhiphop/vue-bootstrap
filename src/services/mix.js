/**
 * Created by Jade on 2/25/16.
 */
export default {
    randomString: function randomString(len) {
        len = len || 20;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },
    timeStamp: function(length) {
        return (new Date().getTime() + '').substring(0, length || 10);
    }
};
