function _inherits(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&_setPrototypeOf(t,n)}function _setPrototypeOf(t,n){return(_setPrototypeOf=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _createSuper(t){var n=_isNativeReflectConstruct();return function(){var e,i=_getPrototypeOf(t);if(n){var o=_getPrototypeOf(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(t):n}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{LYUz:function(t,n,e){"use strict";e.r(n),e.d(n,"MountsModule",(function(){return S}));var i,o=e("ofXK"),c=e("FTbq"),u=e("aceb"),r=e("3Pt+"),s=e("tyNb"),a=e("wd/R"),l=e("LRne"),f=e("lJxs"),h=e("fXoL"),p=e("XNiG"),d=e("itXk"),m=e("JYL7"),g=e("L7Zs"),b=((i=function(){function t(n){var e=this;_classCallCheck(this,t),this.connectService=n,this.listTrigger=new p.a,this.addTrigger=new p.a,this.unmountTrigger=new p.a,this.unmountAllTrigger=new p.a;var i=this;this.list$=new(function(t){_inherits(e,t);var n=_createSuper(e);function e(){var t;return _classCallCheck(this,e),(t=n.apply(this,arguments)).prerequest$=Object(d.a)([i.listTrigger,i.connectService.listCmd$.verify(t.cmd)],(function(t,n){return n})),t}return e}(m.k)),this.list$.deploy(),this.add$=new(function(t){_inherits(e,t);var n=_createSuper(e);function e(){var t;return _classCallCheck(this,e),(t=n.apply(this,arguments)).prerequest$=Object(d.a)([i.addTrigger,i.connectService.listCmd$.verify(t.cmd)],(function(t,n){return[Object.assign(Object.assign({},n[0]),t),n[1]]})),t}return e}(m.m)),this.add$.deploy(),this.add$.getOutput().subscribe((function(t){0===t[1].length&&e.refreshList()})),this.unmount$=new(function(t){_inherits(e,t);var n=_createSuper(e);function e(){var t;return _classCallCheck(this,e),(t=n.apply(this,arguments)).prerequest$=Object(d.a)([i.unmountTrigger,i.connectService.listCmd$.verify(t.cmd)],(function(t,n){return[Object.assign(Object.assign({},n[0]),t),n[1]]})),t}return e}(m.o)),this.unmount$.deploy(),this.unmount$.getOutput().subscribe((function(t){0===t[1].length&&e.refreshList()})),this.unmountAll$=new(function(t){_inherits(e,t);var n=_createSuper(e);function e(){var t;return _classCallCheck(this,e),(t=n.apply(this,arguments)).prerequest$=Object(d.a)([i.unmountAllTrigger,i.connectService.listCmd$.verify(t.cmd)],(function(t,n){return n})),t}return e}(m.n)),this.unmountAll$.deploy(),this.unmountAll$.getOutput().subscribe((function(t){0===t[1].length&&e.refreshList()}))}return _createClass(t,[{key:"refreshList",value:function(){this.list$.clearCache(),this.listTrigger.next(1)}},{key:"mount",value:function(t){this.addTrigger.next(t)}},{key:"unmount",value:function(t){this.unmountTrigger.next(t)}},{key:"unmountAll",value:function(){this.unmountAllTrigger.next(1)}}]),t}()).\u0275fac=function(t){return new(t||i)(h.ic(g.a))},i.\u0275prov=h.Ub({token:i,factory:i.\u0275fac,providedIn:"root"}),i),y=e("x0Mr"),v=["mountTypeInp"];function w(t,n){if(1&t){var e=h.fc();h.ec(0,"td"),h.Uc(1),h.dc(),h.ec(2,"td"),h.Uc(3),h.dc(),h.ec(4,"td"),h.Uc(5),h.dc(),h.ec(6,"td"),h.ec(7,"button",5),h.mc("click",(function(){h.Kc(e);var t=n.$implicit;return h.oc().unmount(t)})),h.Zb(8,"nb-icon",6),h.dc(),h.dc()}if(2&t){var i=n.$implicit;h.Mb(1),h.Vc(i.Fs),h.Mb(2),h.Vc(i.MountPoint),h.Mb(2),h.Vc(i.MountedTimeHumanReadable)}}function O(t,n){if(1&t&&(h.ec(0,"nb-option",16),h.Uc(1),h.dc()),2&t){var e=n.$implicit;h.wc("value",e),h.Mb(1),h.Wc(" ",e," ")}}function C(t,n){if(1&t){var e=h.fc();h.ec(0,"th"),h.ec(1,"input",7),h.mc("ngModelChange",(function(t){return h.Kc(e),h.oc().newMount.fs=t})),h.dc(),h.dc(),h.ec(2,"th"),h.ec(3,"input",8),h.mc("ngModelChange",(function(t){return h.Kc(e),h.oc().newMount.mountPoint=t})),h.dc(),h.dc(),h.ec(4,"th"),h.ec(5,"input",9,10),h.mc("input",(function(){return h.Kc(e),h.oc().onMountTypeInpChange()})),h.dc(),h.ec(7,"nb-autocomplete",11,12),h.mc("selectedChange",(function(t){return h.Kc(e),h.oc().onMountTypeInpSecChange(t)})),h.Sc(9,O,2,2,"nb-option",13),h.pc(10,"async"),h.dc(),h.dc(),h.ec(11,"th"),h.ec(12,"button",14),h.mc("click",(function(){return h.Kc(e),h.oc().mount()})),h.Zb(13,"nb-icon",15),h.dc(),h.dc()}if(2&t){var i=h.Gc(8),o=h.oc();h.Mb(1),h.wc("ngModel",o.newMount.fs),h.Mb(2),h.wc("ngModel",o.newMount.mountPoint),h.Mb(2),h.wc("nbAutocomplete",i),h.Mb(4),h.wc("ngForOf",h.qc(10,4,o.filteredOptions$))}}var k,M,_,T=function(t){return{"infinte-rotate":t}},P=[{path:"",component:(k=function(){function t(n,e,i){_classCallCheck(this,t),this.mountService=n,this.toastr=e,this.modal=i,this.scrb=[],this.columns=[{key:"Fs",title:"Filesystem",width:"37.5%"},{key:"MountPoint",title:"Mounted point",width:"37.5%"},{key:"MountedTimeHumanReadable",title:"Mounted time",width:"20%"},{key:"",title:"Action",width:"5%"}],this.data=[],this.newMount={fs:"",mountPoint:"",mountType:""}}return _createClass(t,[{key:"filter",value:function(t){var n=t.toLowerCase();return this.options.filter((function(t){return t.toLowerCase().includes(n)}))}},{key:"getFilteredOptions",value:function(t){var n=this;return Object(l.a)(t).pipe(Object(f.a)((function(t){return n.filter(t)})))}},{key:"onMountTypeInpChange",value:function(){this.newMount.mountType=this.mountTypeInp.nativeElement.value,this.filteredOptions$=this.getFilteredOptions(this.mountTypeInp.nativeElement.value)}},{key:"onMountTypeInpSecChange",value:function(t){this.filteredOptions$=this.getFilteredOptions(t)}},{key:"refresh",value:function(){this.mountService.refreshList()}},{key:"mount",value:function(){this.mountService.mount(this.newMount)}},{key:"unmount",value:function(t){this.unmountItem=t,this.mountService.unmount({mountPoint:t.MountPoint})}},{key:"unmountAll",value:function(){var t=this;this.modal.confirm().className("flat-attack").message("Unmount all activated mounts?").isBlocking(!1).open().result.then((function(n){n&&t.mountService.unmountAll()}),(function(){}))}},{key:"ngOnInit",value:function(){var t=this;this.configuration=Object.assign({},c.c),this.configuration.searchEnabled=!1,this.configuration.isLoading=!0,this.options=["mount","cmount","mount2"],this.filteredOptions$=Object(l.a)(this.options),this.scrb.push(this.mountService.list$.getOutput().subscribe((function(n){t.configuration.isLoading=!1,0===n[1].length?t.data=n[0].mountPoints.map((function(t){return Object.assign(Object.assign({},t),{MountedTimeHumanReadable:a(t.MountedOn).fromNow()})})):t.toastr.danger(n[1].join(" \n"),"fetch mounts list failure",{icon:"list-tree",iconPack:"css.gg",destroyByClick:!0,duration:0})}))),this.scrb.push(this.mountService.add$.getOutput().subscribe((function(n){0===n[1].length||t.toastr.danger(n[1].join(" \n"),"Create mount point failure",{icon:"alert-triangle-outline"})}))),this.scrb.push(this.mountService.unmount$.getOutput().subscribe((function(n){0===n[1].length?(t.newMount.fs=t.unmountItem.Fs,t.newMount.mountPoint=t.unmountItem.MountPoint,t.newMount.mountType="",t.toastr.success(t.unmountItem.MountPoint,"Unmount actived mount successfully",{icon:"checkmark-circle-outline"})):t.toastr.danger(n[1].join(" \n"),"Unmount actived mount failure",{icon:"alert-triangle-outline"})}))),this.scrb.push(this.mountService.unmountAll$.getOutput().subscribe((function(n){0===n[1].length?t.toastr.success("","Unmount all mounts successfully",{icon:"checkmark-circle-outline"}):t.toastr.danger(n[1].join(" \n"),"Unmount all mounts failure",{icon:"alert-triangle-outline"})}))),this.refresh()}},{key:"ngOnDestroy",value:function(){this.scrb.forEach((function(t){return t.unsubscribe()})),this.scrb=[]}}]),t}(),k.\u0275fac=function(t){return new(t||k)(h.Yb(b),h.Yb(u.ib),h.Yb(y.a))},k.\u0275cmp=h.Sb({type:k,selectors:[["app-mounts"]],viewQuery:function(t,n){var e;1&t&&h.Zc(v,!0),2&t&&h.Fc(e=h.nc())&&(n.mountTypeInp=e.first)},decls:11,vars:7,consts:[[1,"push-to-right"],["icon","trash-2-outline",3,"click"],["icon","sync",3,"ngClass","click"],[3,"configuration","data","columns","filtersTemplate"],["filtersTemplate",""],["nbButton","","status","danger","size","small",3,"click"],["icon","close-outline"],["type","text","nbInput","","fullWidth","","fieldSize","small","placeholder","remote path to be mounted ([remote]:[path])",3,"ngModel","ngModelChange"],["type","text","nbInput","","fullWidth","","fieldSize","small","placeholder","path on server machine",3,"ngModel","ngModelChange"],["nbInput","","type","text","fullWidth","","fieldSize","small","placeholder","mount type",3,"nbAutocomplete","input"],["mountTypeInp",""],[3,"selectedChange"],["auto",""],[3,"value",4,"ngFor","ngForOf"],["nbButton","","status","info","size","small",3,"click"],["icon","plus-outline"],[3,"value"]],template:function(t,n){if(1&t&&(h.ec(0,"nb-card"),h.ec(1,"nb-card-header"),h.Uc(2," Mount Point Manager "),h.ec(3,"nb-actions",0),h.ec(4,"nb-action",1),h.mc("click",(function(){return n.unmountAll()})),h.dc(),h.ec(5,"nb-action",2),h.mc("click",(function(){return n.refresh()})),h.dc(),h.dc(),h.dc(),h.ec(6,"nb-card-body"),h.ec(7,"ngx-table",3),h.Sc(8,w,9,3,"ng-template"),h.dc(),h.dc(),h.dc(),h.Sc(9,C,14,6,"ng-template",null,4,h.Tc)),2&t){var e=h.Gc(10);h.Mb(5),h.wc("ngClass",h.Ac(5,T,n.configuration.isLoading)),h.Mb(2),h.wc("configuration",n.configuration)("data",n.data)("columns",n.columns)("filtersTemplate",e)}},directives:[u.r,u.u,u.g,u.f,o.l,u.q,c.b,u.n,u.C,u.F,r.a,r.e,r.h,u.j,u.i,o.n,u.R],pipes:[o.b],styles:["nb-card-header[_ngcontent-%COMP%] {\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t\t.push-to-right[_ngcontent-%COMP%] {\n\t\t\t\tmargin-left: auto;\n\t\t\t}"]}),k)}],$=((_=function t(){_classCallCheck(this,t)}).\u0275mod=h.Wb({type:_}),_.\u0275inj=h.Vb({factory:function(t){return new(t||_)},imports:[[s.g.forChild(P)],s.g]}),_),S=((M=function t(){_classCallCheck(this,t)}).\u0275mod=h.Wb({type:M}),M.\u0275inj=h.Vb({factory:function(t){return new(t||M)},imports:[[o.c,$,c.d,u.v,u.E,u.G,u.k,u.o,r.b,u.h]]}),M)}}]);