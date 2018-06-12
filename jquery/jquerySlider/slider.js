$('document').ready(function () {
    var loadSlider = {
        init: function () {
            this.auto = 0;  //当鼠标hover的时候， 让锁开着，但定时器不执行 auto=1  mouseleave  auto = 1   定时器执行
            this.lock = true;  //锁
            this.timer = null; //定时器
            this.nowIndex = 0; //当前的index 
            this.len = $('.img-box').find('li').length;  //图片的张数
            this.itemWidth = 600;  //每张图片的宽度
            this.bindEvent();  //事件fn
            this.autoMove();   //图片自动滚动，默认走move的next方向， 可以修改为prev 
            var self = this;   //init中的this
            $('.btn-box a').add('.img-box').add('.order li').on('mouseenter', function () {
                self.auto = 1;
                clearTimeout(self.timer);
                self.lock = true;
            }).on('mouseleave', function () {
                self.auto = 0;
                self.autoMove();
            })
        },
        bindEvent: function () {
            var self = this;
            $('.order li').add('.prev').add('.next').on('click', function () {
                if (self.lock) {
                    self.lock = false;
                    self.move($(this).attr('class'),this);
                }
            })
        },
        move: function (dir,obj) {
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
            $('.img-box').animate({'left': -self.itemWidth * self.nowIndex + 'px' }, function () {
                self.lock = true;
                self.autoMove();
            })

        },
        autoMove: function () {
            var self = this;
            if (self.lock) {
                if (this.auto == 0) {
                    self.lock = false;
                    clearTimeout(this.timer);
                    this.timer = setTimeout(function () {
                        self.move('next');
                    }, 2000);
                }
            }
        },
        changeIndex: function (index) {
            if (index > this.len - 2) {
                index = 0;
            }
            $('.order li').removeClass('active');
            $('.order li').eq(index).addClass('active');
        }
    }
    loadSlider.init();
});