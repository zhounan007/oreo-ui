var pageManager = {
    $container: '#container',

    _pageStack: [],
    _pages: {},
    _config: [],
    _defaultPage: '',
    _pageIndex: '',
    setDefault: function (page) {

    },
    bindEvent: function () {
        var that = this;

        window.addEventListener('popstate', function () {
            // that.loadPage(that.hash());
            location.hash.indexOf('#')[1] === 0 ? that.loadPage(that.hash()) : that.loadPage('home');

            $('.home').addClass('anima-slide-out');
            $('.home').on('animationend webkitAnimationEnd', function () {
                $(this).removeClass('anima-slide-out');
            });
        })
        $('.container').on('click', '.home .oreo-list-item-link', function (e) {
            var pageName = this.dataset.page;
            that.loadPage(pageName);
        })
    },
    hash: function () {
        return location.hash.indexOf('#') === 0 ? location.hash.substring(1) : '';
    },
    go: function () {

    },
    back: function () {

    },
    _find: function (name) {
        var page;
        for (var i in this._pages) {
            if (name == i) {
                page = this._pages[i];
                break;
            }
        }
        return page;
    },
    loadPage: function (pageName) {
        var page = this._find(pageName || 'home');
        if (!page) return;
        var tpl = $(page.template).html();

        $page = $(tpl).addClass('anima-slide-in').addClass(pageName);
        $page.on('animationend webkitAnimationEnd', function () {
            $(this).removeClass('anima-slide-in')
        })
        $('.container').html($page);

        this._pageIndex++;
        // this._pageStack.push(page);
        history.pushState({
            _pageIndex: this._pageIndex
        }, pageName, location.href.split("#")[0] + "#" + pageName);
    },
    initPage: function () {
        var pages = {},
            tpls = $('script[type="text/html"]');

        for (var i = 0; i < tpls.length; i++) {
            var tpl = tpls[i],
                name = tpl.id.replace(/tpl_/, '');

            pages[name] = {
                name: name,
                url: '#' + name,
                template: '#' + tpl.id
            }
        }
        this._pages = pages;
    },
    init: function () {
        this.bindEvent();
        this.initPage();

        this.loadPage(this.hash());
    }

}

pageManager.init();



// window.addEventListener('popstate', function () {
//     var url = location.hash.indexOf('#') === 0 ? location.hash : '#';

//     history.replaceState({
//         title: title
//     }, title, location.href.split("#")[0] + "#" + hash)
// })