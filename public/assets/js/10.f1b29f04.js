;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    373: function (t, s, n) {},
    385: function (t, s, n) {
      'use strict'
      n(373)
    },
    397: function (t, s, n) {
      'use strict'
      n.r(s)
      var i = { props: ['tags'] },
        e = (n(385), n(10)),
        a = Object(e.a)(
          i,
          function () {
            var t = this.$createElement,
              s = this._self._c || t
            return s('div', { staticClass: 'row justify-content-center' }, [
              s(
                'div',
                { staticClass: 'blog-tags col-md-10 text-center mt-5' },
                [
                  s(
                    'h1',
                    { staticClass: 'font-secondary mb-5 font-weight-bold' },
                    [this._v(' ' + this._s(this.$site.description))]
                  ),
                  this._v(' '),
                  this._l(this.tags, function (t) {
                    return s('BlogTag', { key: t.name, attrs: { tag: t } })
                  }),
                ],
                2
              ),
            ])
          },
          [],
          !1,
          null,
          '1cafaf51',
          null
        )
      s.default = a.exports
    },
  },
])
