(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{363:function(e,a,t){"use strict";t.r(a);var r=t(42),o=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[e._v("#")]),e._v(" variables")]),e._v(" "),t("h2",{attrs:{id:"collection-key-value-pair"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#collection-key-value-pair"}},[e._v("#")]),e._v(" Collection ( Key value pair )")]),e._v(" "),t("p",[e._v("List of key value pair wrapped with "),t("code",[e._v("Collection()")]),e._v(". Text/key followed by values separated by commas.")]),e._v(" "),t("p",[e._v("For example, the query  "),t("code",[e._v("Collection(Prod,pd,Non Prod,np,Development,dev,SIT,sit)")]),e._v(" produce 4 variables as follows")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/95761696-993cca80-0ca4-11eb-867a-60d8caa03d39.png",alt:"image"}})]),e._v(" "),t("p",[e._v("Under the hood following 4 keys have corresponding values")]),e._v(" "),t("h2",{attrs:{id:"collectionlookup-key-value-pair-and-lookup-variable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#collectionlookup-key-value-pair-and-lookup-variable"}},[e._v("#")]),e._v(" CollectionLookup ( Key value pair and Lookup Variable )")]),e._v(" "),t("p",[t("code",[e._v("CollectionLookup(pd,prod-server,np,nonprod-server,dev,dev-server,$Nested)")]),e._v(" . Last value should be the key to lookup.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/95761926-ec168200-0ca4-11eb-8758-ff5885564180.png",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/95762001-081a2380-0ca5-11eb-957a-34bfca767769.png",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/95762082-241dc500-0ca5-11eb-9d9f-b3f6d1440b76.png",alt:"image"}})]),e._v(" "),t("h2",{attrs:{id:"join-concat-variables-into-a-new-variable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#join-concat-variables-into-a-new-variable"}},[e._v("#")]),e._v(" Join ( Concat variables into a new variable )")]),e._v(" "),t("p",[e._v("Example : "),t("code",[e._v("Join($Environment,-hello-,$ServerName)")]),e._v(" will produce a new string variable from three separate strings.")]),e._v(" "),t("h2",{attrs:{id:"random-random-element-from-csv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#random-random-element-from-csv"}},[e._v("#")]),e._v(" Random ( Random element from CSV)")]),e._v(" "),t("p",[e._v("Example : "),t("code",[e._v("Random(A,B,C)")]),e._v(' will produce one of A/B/C. When creating a variable of this type, set it to refresh "on time range change", so it will produce random element when dashboard refreshes.')]),e._v(" "),t("p",[e._v("More details available in "),t("a",{attrs:{href:"https://github.com/yesoreyeram/grafana-infinity-datasource/issues/4",target:"_blank",rel:"noopener noreferrer"}},[e._v("this github issue"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);a.default=o.exports}}]);