;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    374: function (t, s, n) {},
    386: function (t, s, n) {
      'use strict'
      n(374)
    },
    398: function (t, s, n) {
      'use strict'
      n.r(s)
      var a = { props: ['tag'] },
        i = (n(386), n(10)),
        e = Object(i.a)(
          a,
          function () {
            var t = this.$createElement
            return (this._self._c || t)(
              'router-link',
              { staticClass: 'blog-tag', attrs: { to: this.tag.path } },
              [
                this._v(
                  '\n  ' +
                    this._s(this.tag.name) +
                    ' (' +
                    this._s(this.tag.pages.length) +
                    ')\n'
                ),
              ]
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      s.default = e.exports
    },
  },
])
