!function(){"use strict";var e={61215:function(e,n,r){var i=r(68963),t=r(63609),a=(r(13218),r(19559)),c=r(39714),s=r(34187),o=r(43442),l=r(73324),d=r(96363),u=r(78437),g=r(26798),h=r(62996),v=r(73020),x=r(34223),p=r(11858),j=r(90493),f=r(7987),m=r(29090),I=r(95119),y=r(51201),C=r(75859),b=["#800000","#FF0000","#FFA500","#5BA352"],M=function(e){var n=e.summary,r=[{name:"Critical: ".concat(n.critical),symbol:{type:"square",fill:b[0]}},{name:"High: ".concat(n.high),symbol:{type:"square",fill:b[1]}},{name:"Medium: ".concat(n.medium),symbol:{type:"square",fill:b[2]}},{name:"Low: ".concat(n.low),symbol:{type:"square",fill:b[3]}}];return(0,C.jsxs)("div",{children:[(0,C.jsx)(g.O,{style:{paddingBlock:"5px"},children:(0,C.jsx)(h.l,{children:"".concat(n.total," vulnerabilities in ").concat(n.dependencies," dependencies")})}),(0,C.jsx)(d.i,{}),(0,C.jsx)(x.e,{style:{paddingBottom:"inherit"},children:(0,C.jsx)(I.b,{children:(0,C.jsx)("div",{style:{height:"230px",width:"350px"},children:(0,C.jsx)(y.HS,{constrainToVisibleArea:!0,data:[{x:"Critical",y:n.critical},{x:"High",y:n.high},{x:"Medium",y:n.medium},{x:"Low",y:n.low}],labels:function(e){var n=e.datum;return"".concat(n.x,": ").concat(n.y)},legendData:r,legendOrientation:"vertical",legendPosition:"right",padding:{bottom:20,left:20,right:140,top:20},subTitle:"Vulnerabilities",title:"".concat(n.total),width:350,colorScale:b})})})})]})};function T(e){var n=[];return Object.keys(e.providers).forEach((function(r){var i=e.providers[r].sources;void 0!==i&&Object.keys(i).forEach((function(e){n.push({provider:r,source:e,report:i[e]})}))})),n}function A(e){return void 0===e?"unknown":e.provider!==e.source?"$item.provider/$item.source":e.provider}function w(e){var n;return!(!e.remediation||!(e.remediation.fixedIn||null!==(n=e.remediation)&&void 0!==n&&n.trustedContent))}function D(e){var n=[];return e.map((function(e){return{dependencyRef:e.ref,vulnerabilities:e.issues||[]}})).forEach((function(e){var r;null===(r=e.vulnerabilities)||void 0===r||r.forEach((function(r){r.cves&&r.cves.length>0?r.cves.forEach((function(i){n.push({id:i,dependencyRef:e.dependencyRef,vulnerability:r})})):n.push({id:r.id,dependencyRef:e.dependencyRef,vulnerability:r})}))})),n.sort((function(e,n){return n.vulnerability.cvssScore-e.vulnerability.cvssScore}))}var S=function(){var e=qe();return(0,C.jsxs)(c.r,{hasGutter:!0,children:[(0,C.jsxs)(o.D,{headingLevel:"h3",size:o.H["2xl"],style:{paddingLeft:"15px"},children:[(0,C.jsx)(l.J,{isInline:!0,status:"info",children:(0,C.jsx)(m.ZP,{style:{fill:"#f0ab00"}})}),"\xa0Red Hat Overview of security Issues"]}),(0,C.jsx)(d.i,{}),(0,C.jsx)(s.P,{children:(0,C.jsxs)(u.Z,{isFlat:!0,isFullHeight:!0,children:[(0,C.jsx)(g.O,{children:(0,C.jsx)(h.l,{children:(0,C.jsx)(v.M,{style:{fontSize:"large"},children:"Vendor Issues"})})}),(0,C.jsxs)(x.e,{children:[(0,C.jsx)(p.g,{children:(0,C.jsx)(j.b,{children:(0,C.jsx)(v.M,{children:"Below is a list of dependencies affected with CVE."})})}),(0,C.jsx)(f.o,{isAutoFit:!0,style:{paddingTop:"10px"},children:T(e.report).map((function(e,n){return(0,C.jsxs)(p.g,{children:[(0,C.jsx)(v.M,{style:{fontSize:"large"},children:A(e)}),(0,C.jsx)(j.b,{children:(0,C.jsx)(M,{summary:e.report.summary})})]},n)}))})]}),(0,C.jsx)(d.i,{})]})})]})},N=r(50178),P=r(15671),k=r(43144),O="maven",Z="https://pkg.go.dev/",L="https://www.npmjs.com/package/",z="https://pypi.org/project/",B="__ISSUE_ID__",E="pkg:",R=function(e,n){var r,i=W.fromString(e);return i.namespace&&(r=i.type===O?"".concat(i.namespace,":"):"".concat(i.namespace,"/")),r+="".concat(i.name),n?r+"@".concat(i.version):r},F=function(e){var n=W.fromString(e);switch(n.type){case O:return"".concat("https://central.sonatype.com/artifact/").concat(n.namespace,"/").concat(n.name,"/").concat(n.version);case"golang":var r=n.version;return null!==r&&void 0!==r&&r.match(/v\d\.\d.\d-\d{14}-\w{12}/)?"".concat(Z).concat(n.namespace,"/").concat(n.name):"".concat(Z).concat(n.namespace,"/").concat(n.name,"@").concat(n.version);case"npm":return n.namespace?"".concat(L,"/").concat(n.namespace,"/").concat(n.name,"/v/").concat(n.version):"".concat(L,"/").concat(n.name,"/v/").concat(n.version);case"pypi":return n.namespace?"".concat(z,"/").concat(n.namespace,"/").concat(n.name,"/").concat(n.version):"".concat(z,"/").concat(n.name,"/").concat(n.version);default:return n.toString()}},G=function(e){var n=W.fromString(e).version;return n||""},U=function(e,n,r){switch(e){case"snyk":return r.snykIssueTemplate.replace(B,n);case"oss-index":return r.ossIssueTemplate.replace(B,n)}},H=function(e){return e.toLowerCase().replace(/./,(function(e){return e.toUpperCase()}))},W=function(){function e(n,r,i,t){(0,P.Z)(this,e),this.type=void 0,this.namespace=void 0,this.name=void 0,this.version=void 0,this.type=n,this.namespace=r,this.name=i,this.version=t}return(0,k.Z)(e,[{key:"toString",value:function(){var e=this.name;return this.version&&(e+="@".concat(this.version)),this.namespace?"".concat(E).concat(this.type,"/").concat(this.namespace,"/").concat(e):"".concat(E).concat(this.type,"/").concat(e)}}],[{key:"fromString",value:function(n){var r=n.replace(E,""),i=r.indexOf("?");-1!==i&&(r=r.substring(0,i));var t,a,c=r.substring(0,r.indexOf("/")),s=r.split("/");s.length>2&&(t=s.slice(1,s.length-1).join("/")),-1!==r.indexOf("@")&&(a=r.substring(r.indexOf("@")+1));var o=s[s.length-1];return a&&(o=o.substring(0,o.indexOf("@"))),new e(c,t,o,a)}}]),e}(),Y=function(){var e=qe(),n=Object.keys(e.report.providers).map((function(n){return e.report.providers[n].status})).filter((function(e){return!e.ok}));return(0,C.jsx)(C.Fragment,{children:n.map((function(e,n){return(0,C.jsx)(N.b,{variant:e.code>=500?N.U.danger:e.code>=400?N.U.warning:void 0,title:"".concat(H(e.name),": ").concat(e.message)},n)}))})},V=r(70885),_=r(66081),J=r(74817),Q=r(86467),K=r(1413),X=r(76989),q=r(52401),$=r(96496),ee=r(45644),ne=r(540),re=r(19809),ie=r(80382),te=r(47554),ae=r(82e3),ce=r(2017),se=r(30833),oe=r(29626),le=r(30205),de=r(73610),ue=r(27990),ge=r(20808),he=r(46056),ve=r(31915),xe=r(71178),pe=r(7102),je=r(42982),fe=r(41917),me=function(e){return e[e.SET_PAGE=0]="SET_PAGE",e[e.SET_SORT_BY=1]="SET_SORT_BY",e}(me||{}),Ie={changed:!1,currentPage:{page:1,perPage:10},sortBy:void 0},ye=function(e,n){switch(n.type){case me.SET_PAGE:var r=n.payload;return(0,K.Z)((0,K.Z)({},e),{},{changed:!0,currentPage:{page:r.page,perPage:r.perPage}});case me.SET_SORT_BY:var i=n.payload;return(0,K.Z)((0,K.Z)({},e),{},{changed:!0,sortBy:{index:i.index,direction:i.direction}});default:return e}},Ce=r(99960),be=r(50500),Me=function(e){var n,r=e.count,i=e.params,t=e.isTop,a=(e.isCompact,e.perPageOptions),c=e.onChange,s=function(){return i.perPage||10};return(0,C.jsx)(Ce.t,{itemCount:r,page:i.page||1,perPage:s(),onPageInput:function(e,n){c({page:n,perPage:s()})},onSetPage:function(e,n){c({page:n,perPage:s()})},onPerPageSelect:function(e,n){c({page:1,perPage:n})},widgetId:"pagination-options-menu",variant:t?Ce.a.top:Ce.a.bottom,perPageOptions:(n=a||[10,20,50,100],n.map((function(e){return{title:String(e),value:e}}))),toggleTemplate:function(e){return(0,C.jsx)(be.v,(0,K.Z)({},e))}})},Te=function(e){var n=e.name,r=e.showVersion,i=void 0!==r&&r;return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)("a",{href:F(n),target:"_blank",rel:"noreferrer",children:R(n,i)})})},Ae=r(54794),we=r(35020),De=r(98649),Se=r(37514),Ne=function(e){var n=e.numRenderedColumns,r=e.isLoading,i=void 0!==r&&r,t=e.isError,a=void 0!==t&&t,c=e.isNoData,s=void 0!==c&&c,l=e.errorEmptyState,d=void 0===l?null:l,u=e.noDataEmptyState,g=void 0===u?null:u,h=e.children,v=(0,C.jsxs)(re.u,{variant:re.I.sm,children:[(0,C.jsx)(te.k,{icon:De.ZP,color:Se.a.value}),(0,C.jsx)(o.D,{headingLevel:"h2",size:"lg",children:"Unable to connect"}),(0,C.jsx)(ae.B,{children:"There was an error retrieving data. Check your connection and try again."})]}),x=(0,C.jsxs)(re.u,{variant:re.I.sm,children:[(0,C.jsx)(te.k,{icon:we.ZP}),(0,C.jsx)(o.D,{headingLevel:"h2",size:"lg",children:"No data available"}),(0,C.jsx)(ae.B,{children:"No data available to be shown here."})]});return(0,C.jsx)(C.Fragment,{children:i?(0,C.jsx)(he.p,{children:(0,C.jsx)(ue.Tr,{children:(0,C.jsx)(ve.Td,{colSpan:n,children:(0,C.jsx)(I.b,{children:(0,C.jsx)(Ae.$,{size:"xl"})})})})}):a?(0,C.jsx)(he.p,{"aria-label":"Table error",children:(0,C.jsx)(ue.Tr,{children:(0,C.jsx)(ve.Td,{colSpan:n,children:(0,C.jsx)(I.b,{children:d||v})})})}):s?(0,C.jsx)(he.p,{"aria-label":"Table no data",children:(0,C.jsx)(ue.Tr,{children:(0,C.jsx)(ve.Td,{colSpan:n,children:(0,C.jsx)(I.b,{children:g||x})})})}):h})},Pe=r(38485),ke=r(81772),Oe=function(e){var n=e.packageName,r=e.cves,t=(0,i.useReducer)((function(e){return!e}),!1),a=(0,V.Z)(t,2),c=a[0],s=a[1];return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(Pe.zx,{variant:Pe.Wu.link,onClick:s,style:{paddingLeft:"initial"},children:[(0,C.jsx)(l.J,{isInline:!0,status:"success",children:(0,C.jsx)("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxM3B4IiB2aWV3Qm94PSIwIDAgMTIgMTMiIGlkPSJTZWN1cml0eUNoZWNrSWNvbiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZyBpZD0iTXVsdGktdmVuZG9yIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iT3ZlcnZpZXctQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMDcsIC05OTMpIiBmaWxsPSIjM0U4NjM1Ij4KICAgICAgICAgICAgPGcgaWQ9IkRldGFpbHMtb2YtZGVwZW5kZW5jeS1jb20uZ2l0aHViIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjcsIDgxOSkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IkRlcGVuZGVuY3ktMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMTQ0KSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4MC4xNzI4LCAyNCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMy4yKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iSWNvbnMvMi4tU2l6ZS1zbS9BY3Rpb25zL2NoZWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAyLjgpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAuNTU2NTc4OSwwIEMxMC43OTA2MjQ5LDAgMTAuOTc5MzMyMiwwLjE4MTU0Mjk2OSAxMC45NzkzMzIyLDAuNDA2MjUgTDEwLjk3OTMzMjIsNS43NDA4MjAzMSBDMTAuOTc5MzMyMiw5Ljc1IDYuMjQwODE5MDcsMTMgNS40OTU3OTI5NiwxMyBDNC43NTA3NjY4NCwxMyAwLDkuNzUgMCw1LjczOTU1MDc4IEwwLDAuNDA2MjUgQzAsMC4xODE1NDI5NjkgMC4xODg3MDcyNzIsMCAwLjQyMjc1MzMwNCwwIFogTTguNTQyNzc4ODMsMy4xMTc4MjY2NyBMNC43OTEyOTYxLDYuODkwODczNTMgTDMuMDM5ODEzMzgsNS4xMjkzMjQ0IEMyLjg4MzYwOSw0Ljk3MjIwNjgzIDIuNjMwMzI4MTIsNC45NzIyMDY4MyAyLjQ3NDEyMzc1LDUuMTI5MzI0NCBMMS45MDg0NDkzOCw1LjY5ODI2NTU2IEMxLjc1MjI0NTAxLDUuODU1MzgzMTIgMS43NTIyNDUwMSw2LjExMDEwNDQ5IDEuOTA4NDQ5MzgsNi4yNjcyMDY3MSBMNC41MDg0NTc5Nyw4Ljg4MjE1OTkxIEM0LjY2NDY0NzA4LDkuMDM5Mjc3NDcgNC45MTc5MTI3LDkuMDM5Mjc3NDcgNS4wNzQxMzIzMyw4Ljg4MjE3NTI1IEw5LjY3NDE0MjgyLDQuMjU1NzA4OTggQzkuODMwMzQ3Miw0LjA5ODU5MTQxIDkuODMwMzQ3MiwzLjg0Mzg3MDA0IDkuNjc0MTQyODIsMy42ODY3Njc4MiBMOS4xMDg0Njg0NiwzLjExNzgyNjY3IEM4Ljk1MjI2NDA4LDIuOTYwNzI0NDQgOC42OTg5ODMyLDIuOTYwNzI0NDQgOC41NDI3Nzg4MywzLjExNzgyNjY3IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",alt:"Security Check Icon"})}),"\xa0",G(n)]}),(0,C.jsx)(ke.u,{variant:ke.v.small,title:G(n),isOpen:c,onClose:s,actions:[].concat((0,je.Z)(r.map((function(e){return(0,C.jsx)(Pe.zx,{component:"a",target:"_blank",rel:"noreferrer",variant:Pe.Wu.secondary,children:"VEX"},"confirm")}))),[(0,C.jsx)(Pe.zx,{component:"a",target:"_blank",rel:"noreferrer",variant:Pe.Wu.secondary,children:"SBOM"},"cancel")]),children:"Click either VEX or SBOM to download the corresponding file type. You can also click the package name to view more information in Red Hat's Maven repository."})]})},Ze=function(){var e=qe().providerPrivateData;return{hideIssue:function(n,r){return!(!e||-1===e.indexOf(n))&&r}}},Le=function(e){var n,r,i,t=e.sourceName,a=e.vulnerability,c=Ze(),s=qe();return(0,C.jsx)(C.Fragment,{children:c.hideIssue(t,a.unique)?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("a",{href:s.snykSignup,target:"_blank",rel:"noreferrer",children:"Sign up for a Snyk account"})," ","to learn about the vulnerabilities found"]}):"snyk"!==t||null!==(null===(n=a.remediation)||void 0===n?void 0:n.fixedIn)&&0!==(null===(r=a.remediation)||void 0===r||null===(i=r.fixedIn)||void 0===i?void 0:i.length)?(0,C.jsx)("a",{href:U(t,a.id,s),target:"_blank",rel:"noreferrer",children:a.id}):(0,C.jsx)("p",{})})},ze=r(30736),Be=r(75351),Ee=r(30975),Re=r(6647),Fe=function(e){var n,r=e.vulnerability;switch(r.severity){case"CRITICAL":case"HIGH":n=ze.n9.danger;break;default:n=ze.n9.warning}return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(Be.P,{hasGutter:!0,children:(0,C.jsx)(Ee.J,{isFilled:!0,children:(0,C.jsx)(Re.E,{title:"".concat(r.cvssScore,"/10"),"aria-label":"cvss-score",value:r.cvssScore,min:0,max:10,size:Re.L.sm,variant:n,measureLocation:ze.nK.none})})})})},Ge=r(30313),Ue=function(e){var n,r=e.vulnerability;switch(r.severity){case"CRITICAL":n="#800000";break;case"HIGH":n="#FF0000";break;case"MEDIUM":n="#FFA500";break;case"LOW":n="#5BA352";break;default:n="grey"}return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.J,{isInline:!0,children:(0,C.jsx)(Ge.ZP,{style:{fill:n,height:"13px"}})}),"\xa0",H(r.severity)]})},He=function(e){var n,r,i,t=e.item,a=e.providerName,c=e.rowIndex;i=t.vulnerability.cves&&t.vulnerability.cves.length>0?t.vulnerability.cves:[t.vulnerability.id];var s=Ze().hideIssue(a,t.vulnerability.unique),o=qe();return(0,C.jsxs)(ue.Tr,{children:[s?(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(ve.Td,{colSpan:3,children:(0,C.jsx)("a",{href:o.snykSignup,target:"_blank",rel:"noreferrer",children:"Sign up for a Snyk account to learn about the vulnerabilities found"})})}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(ve.Td,{children:i.map((function(e,n){return(0,C.jsx)("p",{children:e},n)}))}),(0,C.jsx)(ve.Td,{children:t.vulnerability.title}),(0,C.jsx)(ve.Td,{noPadding:!0,children:(0,C.jsx)(Ue,{vulnerability:t.vulnerability})})]}),(0,C.jsx)(ve.Td,{children:(0,C.jsx)(Fe,{vulnerability:t.vulnerability})}),(0,C.jsx)(ve.Td,{children:(0,C.jsx)(Te,{name:t.dependencyRef,showVersion:!0})}),(0,C.jsxs)(ve.Td,{children:[(null===(n=t.vulnerability.remediation)||void 0===n?void 0:n.trustedContent)&&(0,C.jsx)(Oe,{cves:t.vulnerability.cves||[],packageName:t.dependencyRef},c),(null===(r=t.vulnerability.remediation)||void 0===r?void 0:r.fixedIn)&&(0,C.jsx)(Le,{sourceName:a,vulnerability:t.vulnerability}),!w(t.vulnerability)&&"N/A"]})]},c)},We=function(e){var n=e.providerName,r=e.transitiveDependencies;return(0,C.jsx)(u.Z,{style:{backgroundColor:"var(--pf-v5-global--BackgroundColor--100)"},children:(0,C.jsxs)(oe.i,{variant:le.B.compact,children:[(0,C.jsx)(de.h,{children:(0,C.jsxs)(ue.Tr,{children:[(0,C.jsx)(ge.Th,{width:10,children:"Vulnerability ID"}),(0,C.jsx)(ge.Th,{width:25,children:"Description"}),(0,C.jsx)(ge.Th,{width:10,children:"Severity"}),(0,C.jsx)(ge.Th,{width:20,children:"CVSS Score"}),(0,C.jsx)(ge.Th,{width:20,children:"Transitive Dependency"}),(0,C.jsx)(ge.Th,{children:"Remediation"})]})}),(0,C.jsx)(Ne,{isNoData:0===r.length,numRenderedColumns:7,children:D(r).map((function(e,r){return(0,C.jsx)(he.p,{children:(0,C.jsx)(He,{item:e,providerName:n,rowIndex:r})},r)}))})]})})},Ye=function(e){var n=e.providerName,r=e.dependency,i=e.vulnerabilities;return(0,C.jsx)(u.Z,{style:{backgroundColor:"var(--pf-v5-global--BackgroundColor--100)"},children:(0,C.jsxs)(oe.i,{variant:le.B.compact,children:[(0,C.jsx)(de.h,{children:(0,C.jsxs)(ue.Tr,{children:[(0,C.jsx)(ge.Th,{width:20,children:"Vulnerability ID"}),(0,C.jsx)(ge.Th,{width:20,children:"Description"}),(0,C.jsx)(ge.Th,{children:"Severity"}),(0,C.jsx)(ge.Th,{width:20,children:"CVSS Score"}),(0,C.jsx)(ge.Th,{width:20,children:"Transitive Dependency"}),(0,C.jsx)(ge.Th,{children:"Remediation"})]})}),(0,C.jsx)(Ne,{isNoData:0===i.length,numRenderedColumns:6,children:null===i||void 0===i?void 0:i.map((function(e,i){var t=[];return e.cves&&e.cves.length>0?e.cves.forEach((function(e){return t.push(e)})):e.unique&&t.push(e.id),(0,C.jsx)(he.p,{children:t.map((function(t,a){return(0,C.jsx)(He,{item:{id:e.id,dependencyRef:r.ref,vulnerability:e},providerName:n,rowIndex:i},"".concat(i,"-").concat(a))}))},i)}))})]})})},Ve=function(e){var n=e.vulnerabilities,r=void 0===n?[]:n,i=e.transitiveDependencies,t=void 0===i?[]:i,a={CRITICAL:0,HIGH:0,MEDIUM:0,LOW:0};return r.length>0?r.forEach((function(e){var n=e.severity;a.hasOwnProperty(n)&&a[n]++})):null===t||void 0===t||t.forEach((function(e){var n;null===(n=e.issues)||void 0===n||n.forEach((function(e){var n=e.severity;a.hasOwnProperty(n)&&a[n]++}))})),(0,C.jsxs)(se.B,{children:[a.CRITICAL>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.J,{isInline:!0,children:(0,C.jsx)(Ge.ZP,{style:{fill:"#A30000",height:"13px"}})}),"\xa0",a.CRITICAL,"\xa0"]}),a.HIGH>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.J,{isInline:!0,children:(0,C.jsx)(Ge.ZP,{style:{fill:"#C9190B",height:"13px"}})}),"\xa0",a.HIGH,"\xa0"]}),a.MEDIUM>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.J,{isInline:!0,children:(0,C.jsx)(Ge.ZP,{style:{fill:"#ef9234",height:"13px"}})}),"\xa0",a.MEDIUM,"\xa0"]}),a.LOW>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.J,{isInline:!0,children:(0,C.jsx)(Ge.ZP,{style:{fill:"#f6d173",height:"13px"}})}),"\xa0",a.LOW]})]})},_e=r(56934),Je=function(e){var n=e.name,r=e.dependencies,t=(0,i.useState)(""),a=(0,V.Z)(t,2),c=a[0],s=a[1],o=function(e){var n=(0,i.useReducer)(ye,(0,K.Z)((0,K.Z)({},Ie),{},{currentPage:e&&e.page?(0,K.Z)({},e.page):(0,K.Z)({},Ie.currentPage),sortBy:e&&e.sortBy?(0,K.Z)({},e.sortBy):Ie.sortBy})),r=(0,V.Z)(n,2),t=r[0],a=r[1],c=(0,i.useCallback)((function(e){var n;a({type:me.SET_PAGE,payload:{page:e.page>=1?e.page:1,perPage:null!==(n=e.perPage)&&void 0!==n?n:Ie.currentPage.perPage}})}),[]),s=(0,i.useCallback)((function(e,n,r,i){a({type:me.SET_SORT_BY,payload:{index:n,direction:r}})}),[]);return{page:t.currentPage,sortBy:t.sortBy,changePage:c,changeSortBy:s}}(),l=o.page,g=o.sortBy,h=o.changePage,v=o.changeSortBy,p=function(e){var n=e.items,r=e.currentSortBy,t=e.currentPage,a=e.filterItem,c=e.compareToByColumn;return(0,i.useMemo)((function(){var e,i=(0,je.Z)(n||[]).filter(a),s=!1;return e=(0,je.Z)(i).sort((function(e,n){var i=c(e,n,null===r||void 0===r?void 0:r.index);return 0!==i&&(s=!0),i})),s&&(null===r||void 0===r?void 0:r.direction)===fe.B.desc&&(e=e.reverse()),{pageItems:e.slice((t.page-1)*t.perPage,t.page*t.perPage),filteredItems:i}}),[n,t,r,c,a])}({items:r,currentPage:l,currentSortBy:g,compareToByColumn:function(e,n,r){return 1===r?e.ref.localeCompare(n.ref):0},filterItem:function(e){var n=!0;return c&&c.trim().length>0&&(n=-1!==e.ref.toLowerCase().indexOf(c.toLowerCase())),n}}),j=p.pageItems,f=p.filteredItems,m={name:"Dependency Name",version:"Current Version",direct:"Direct Vulnerabilities",transitive:"Transitive Vulnerabilities",rhRemediation:"Red Hat Remediation available"},I=i.useState({"siemur/test-space":"name"}),y=(0,V.Z)(I,2),b=y[0],M=y[1],T=function(e,n,r,i){return{isExpanded:b[e.ref]===n,onToggle:function(){return function(e,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=(0,K.Z)({},b);r?i[e.ref]=n:delete i[e.ref],M(i)}(e,n,b[e.ref]!==n)},expandId:"compound-expandable-example",rowIndex:r,columnIndex:i}};return(0,C.jsx)(u.Z,{children:(0,C.jsx)(x.e,{children:(0,C.jsxs)("div",{style:{backgroundColor:"var(--pf-v5-global--BackgroundColor--100)"},children:[(0,C.jsx)(X.o,{children:(0,C.jsxs)(q.c,{children:[(0,C.jsx)($.R,{toggleIcon:(0,C.jsx)(pe.ZP,{}),breakpoint:"xl",children:(0,C.jsx)(ee.E,{variant:"search-filter",children:(0,C.jsx)(ne.M,{style:{width:"250px"},placeholder:"Filter by Dependency name",value:c,onChange:function(e,n){return s(n)},onClear:function(){return s("")}})})}),(0,C.jsx)(ee.E,{variant:ee.A.pagination,align:{default:"alignRight"},children:(0,C.jsx)(Me,{isTop:!0,count:f.length,params:l,onChange:h})})]})}),(0,C.jsxs)(oe.i,{"aria-label":"Compound expandable table",variant:le.B.compact,children:[(0,C.jsx)(de.h,{children:(0,C.jsxs)(ue.Tr,{children:[(0,C.jsx)(ge.Th,{width:25,sort:{columnIndex:1,sortBy:(0,K.Z)({},g),onSort:v},children:m.name}),(0,C.jsx)(ge.Th,{children:m.version}),(0,C.jsx)(ge.Th,{children:m.direct}),(0,C.jsx)(ge.Th,{children:m.transitive})]})}),(0,C.jsx)(Ne,{isNoData:0===f.length,numRenderedColumns:8,noDataEmptyState:(0,C.jsxs)(re.u,{variant:re.I.sm,children:[(0,C.jsx)(ie.t,{icon:(0,C.jsx)(te.k,{icon:_e.ZP}),titleText:"No results found",headingLevel:"h2"}),(0,C.jsx)(ae.B,{children:"Clear all filters and try again."})]}),children:null===j||void 0===j?void 0:j.map((function(e,r){var i,t,a=b[e.ref],c=!!a;return(0,C.jsxs)(he.p,{isExpanded:c,children:[(0,C.jsxs)(ue.Tr,{children:[(0,C.jsx)(ve.Td,{width:30,dataLabel:m.name,component:"th",children:(0,C.jsx)(Te,{name:e.ref})}),(0,C.jsx)(ve.Td,{width:15,dataLabel:m.version,children:G(e.ref)}),(0,C.jsx)(ve.Td,{width:15,dataLabel:m.direct,compoundExpand:T(e,"direct",r,2),children:null!==(i=e.issues)&&void 0!==i&&i.length?(0,C.jsxs)(ce.k,{children:[(0,C.jsx)(se.B,{children:null===(t=e.issues)||void 0===t?void 0:t.length}),(0,C.jsx)(d.i,{orientation:{default:"vertical"}}),(0,C.jsx)(Ve,{vulnerabilities:e.issues})]}):0}),(0,C.jsx)(ve.Td,{width:15,dataLabel:m.transitive,compoundExpand:T(e,"transitive",r,3),children:e.transitive.length?(0,C.jsxs)(ce.k,{children:[(0,C.jsx)(se.B,{children:e.transitive.map((function(e){var n;return null===(n=e.issues)||void 0===n?void 0:n.length})).reduce((function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)}))}),(0,C.jsx)(d.i,{orientation:{default:"vertical"}}),(0,C.jsx)(Ve,{transitiveDependencies:e.transitive})]}):0})]}),c?(0,C.jsx)(ue.Tr,{isExpanded:c,children:(0,C.jsx)(ve.Td,{dataLabel:m[a],noPadding:!0,colSpan:6,children:(0,C.jsx)(xe.G,{children:(0,C.jsx)("div",{className:"pf-v5-u-m-md",children:"direct"===a&&e.issues&&e.issues.length>0?(0,C.jsx)(Ye,{providerName:n,dependency:e,vulnerabilities:e.issues}):"transitive"===a&&e.transitive&&e.transitive.length>0?(0,C.jsx)(We,{providerName:n,transitiveDependencies:e.transitive}):null})})})}):null]},e.ref)}))})]}),(0,C.jsx)(Me,{isTop:!1,count:f.length,params:l,onChange:h})]})})})},Qe=function(){var e=T(qe().report),n=i.useState(A(e[0])),r=(0,V.Z)(n,2),t=r[0],c=r[1],s=i.useState(!0),o=(0,V.Z)(s,1)[0],l=e.map((function(e){var n=A(e);return(0,C.jsx)(_.O,{eventKey:n,title:(0,C.jsx)(J.T,{children:n}),"aria-label":"".concat(n," source"),children:(0,C.jsx)(a.NP,{variant:a.Dk.default,children:(0,C.jsx)(Je,{name:n,dependencies:e.report.dependencies})})})}));return(0,C.jsx)("div",{children:(0,C.jsx)(Q.m,{activeKey:t,onSelect:function(e,n){c(n)},"aria-label":"Providers",role:"region",variant:o?"light300":"default",isBox:!0,children:l})})},Ke=window.appData,Xe=(0,i.createContext)(Ke),qe=function(){return(0,i.useContext)(Xe)};var $e=function(){return(0,C.jsxs)(Xe.Provider,{value:Ke,children:[(0,C.jsx)(Y,{}),(0,C.jsx)(a.NP,{variant:a.Dk.light,children:(0,C.jsx)(c.r,{hasGutter:!0,children:(0,C.jsx)(s.P,{children:(0,C.jsx)(S,{})})})}),(0,C.jsx)(a.NP,{variant:a.Dk.default,children:(0,C.jsx)(Qe,{})})]})},en=function(e){e&&e instanceof Function&&r.e(736).then(r.bind(r,40599)).then((function(n){var r=n.getCLS,i=n.getFID,t=n.getFCP,a=n.getLCP,c=n.getTTFB;r(e),i(e),t(e),a(e),c(e)}))};t.createRoot(document.getElementById("root")).render((0,C.jsx)(i.StrictMode,{children:(0,C.jsx)($e,{})})),en()}},n={};function r(i){var t=n[i];if(void 0!==t)return t.exports;var a=n[i]={id:i,loaded:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,function(){var e=[];r.O=function(n,i,t,a){if(!i){var c=1/0;for(d=0;d<e.length;d++){i=e[d][0],t=e[d][1],a=e[d][2];for(var s=!0,o=0;o<i.length;o++)(!1&a||c>=a)&&Object.keys(r.O).every((function(e){return r.O[e](i[o])}))?i.splice(o--,1):(s=!1,a<c&&(c=a));if(s){e.splice(d--,1);var l=t();void 0!==l&&(n=l)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[i,t,a]}}(),r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var i in n)r.o(n,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},r.e=function(){return Promise.resolve()},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={179:0};r.O.j=function(n){return 0===e[n]};var n=function(n,i){var t,a,c=i[0],s=i[1],o=i[2],l=0;if(c.some((function(n){return 0!==e[n]}))){for(t in s)r.o(s,t)&&(r.m[t]=s[t]);if(o)var d=o(r)}for(n&&n(i);l<c.length;l++)a=c[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},i=self.webpackChunkui=self.webpackChunkui||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=r.O(void 0,[736],(function(){return r(61215)}));i=r.O(i)}();