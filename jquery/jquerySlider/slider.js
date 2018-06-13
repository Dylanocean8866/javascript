$('document').ready(function () {
    $.fn.extend({
        mySlider: function (dObj, domObj) {
            var { imgAurl, itemWidth } = dObj;
            var htmlStr = '';
            var htmlNew = '';
            var controStr = '';
            var controNewStr = '';
            var htmlFristLi = '';
            imgAurl.forEach(function (ele, index) {
                if (index % 2 == 0) {
                    if (index == 0) {
                        controStr += '<ul class=order><li class=active></li>';
                        htmlStr += '<ul class=img-box><li><a href=' + ele + '><img src=';
                        htmlFristLi += '<li><a href=' + ele + '><img src=';
                    } else {
                        controStr += '<li></li>';
                        htmlStr += '<li><a href=' + ele + '><img src=';
                    }
                } else {
                    htmlStr += ele + '></a></li>'
                    if (index == 1) {
                        htmlFristLi += ele + '></a></li>';
                    }
                    htmlNew += htmlStr;
                    htmlStr = '';
                    controNewStr += controStr;
                    controStr = '';
                }
            })
            var cStr = controNewStr + '</ul>';
            var mainUl = htmlNew + htmlFristLi + '</ul>';
            var btnControl = `
            <div class="btn-box">
                <a class="prev" href="javascript:void(0)"></a>
                <a class="next" href="javascript:void(0)"></a>
            </div>`;
            $(domObj).html(btnControl + mainUl + cStr);
            loadSlider.init(itemWidth);
        }
    });
    var loadSlider = {
        init: function (itemW) {
            this.lock = true;  //锁
            this.timer = null; //定时器
            this.nowIndex = 0; //当前的index 
            this.len = $('.img-box').find('li').length;  //图片的张数
            this.itemWidth = itemW;  //每张图片的宽度
            this.bindEvent();  //事件fn
            this.autoMove();   //图片自动滚动，默认走move的next方向， 可以修改为prev 
            this.mouseMove();
        },
        mouseMove:function(){
            var self = this;   //init中的this
            $('.btn-box a').add('.img-box').add('.order li').on('mouseenter', function () {
                clearTimeout(self.timer);
            }).on('mouseleave', function () {
                self.autoMove();
            })
        },
        bindEvent: function () {
            var self = this;
            $('.order li').add('.prev').add('.next').on('click', function () {
                if (self.lock) {
                    self.move($(this).attr('class'), this);
                }
            })
        },
        move: function (dir, obj) {
            var self = this;
            if (self.lock) {
                self.lock =  false;
                var self = this;
                if (dir == 'next') {
                    if (self.nowIndex == self.len - 1) {
                        self.nowIndex = 0;
                        $('.img-box').css('left', '0px');
                    }
                    self.nowIndex++;
                } else if (dir == 'prev') {
                    if (self.nowIndex == 0) {
                        self.nowIndex = self.len - 1;
                        $('.img-box').css('left', -((self.nowIndex) * self.itemWidth) + 'px');
                    }
                    self.nowIndex--;
                } else {
                    self.nowIndex = $(obj).index();
                }
                self.changeIndex(self.nowIndex);
                $('.img-box').animate({ 'left': -self.itemWidth * self.nowIndex + 'px' }, function () {
                    self.lock = true;
                    self.autoMove();
                })
            }
        },
        autoMove: function () {
            var self = this;
            clearTimeout(this.timer);
            this.timer = setTimeout(function () {
                self.move('next');
            }, 2000);
        },
        changeIndex: function (index) {
            if (index > this.len - 2) {
                index = 0;
            }
            $('.order li').removeClass('active');
            $('.order li').eq(index).addClass('active');
        }
    }
});