!function(){"use strict";var e={8584:function(e,n,i){var t=i(4519),r=i(9402),s=(i(758),i(1413)),o=i(4925),a=i(5671),l=i(3144),d=i(9340),c=i(2882),p=i(5692),h=i(9184),u=i(6743),x=i(7538),g=i(4807),j=i(6462),b=i(6043),f=i(7105),v=i(282),y=i(7441),m=i(9631),T=i(2693),O=i(6262),w=i(8151),S=i(6171),D=i(4577),k=i(6613),C=i(2159),H=i(2908),K=i(8716),P=i(9560),E=i(4863),F=i(3673),V=i(8369),I=i(4268),N=i(9703),Z=i(5656),R=i(9986),L=i(4707),M=i(2002),U=i(6756),_=i(2078),z=i(1387),B=i(6936),q=i(4746),A=i(654),G=i(3487),W=i(6772),J=i(8722),Q=i(2556),X=function(e){(0,d.Z)(i,e);var n=(0,c.Z)(i);function i(e){var t;return(0,a.Z)(this,i),(t=n.call(this,e)).state={isDropdownOpen:!1,isKebabDropdownOpen:!1,isFullKebabDropdownOpen:!1,activeItem:0},t.onDropdownToggle=function(){t.setState((function(e){return{isDropdownOpen:!e.isDropdownOpen}}))},t.onDropdownSelect=function(){t.setState({isDropdownOpen:!1})},t.onKebabDropdownToggle=function(){t.setState((function(e){return{isKebabDropdownOpen:!e.isKebabDropdownOpen}}))},t.onKebabDropdownSelect=function(){t.setState({isKebabDropdownOpen:!1})},t.onFullKebabToggle=function(){t.setState((function(e){return{isFullKebabDropdownOpen:!e.isFullKebabDropdownOpen}}))},t.onFullKebabSelect=function(){t.setState({isFullKebabDropdownOpen:!1})},t}return(0,l.Z)(i,[{key:"render",value:function(){var e=this,n=this.state,i=n.isDropdownOpen,t=n.isKebabDropdownOpen,r=n.isFullKebabDropdownOpen,s=this.props.notificationBadge,o=(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(O.h,{children:[(0,Q.jsx)(z.ZP,{})," Settings"]}),(0,Q.jsxs)(O.h,{children:[(0,Q.jsx)(B.ZP,{})," Help"]})]}),a=(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(O.h,{children:"My profile"},"group 2 profile"),(0,Q.jsx)(O.h,{children:"User management"},"group 2 user"),(0,Q.jsx)(O.h,{children:"Logout"},"group 2 logout")]}),l=(0,Q.jsx)(w.o,{id:"toolbar",isFullHeight:!0,isStatic:!0,children:(0,Q.jsxs)(S.c,{children:[(0,Q.jsxs)(D.k,{variant:"icon-button-group",align:{default:"alignRight"},spacer:{default:"spacerNone",md:"spacerMd"},children:[s||(0,Q.jsx)(k.E,{children:(0,Q.jsx)(C.zx,{"aria-label":"Notifications",variant:C.Wu.plain,icon:(0,Q.jsx)(A.ZP,{}),onClick:function(){}})}),(0,Q.jsxs)(D.k,{variant:"icon-button-group",visibility:{default:"hidden",lg:"visible"},children:[(0,Q.jsx)(k.E,{children:(0,Q.jsx)(C.zx,{"aria-label":"Settings",variant:C.Wu.plain,icon:(0,Q.jsx)(z.ZP,{})})}),(0,Q.jsx)(k.E,{children:(0,Q.jsx)(C.zx,{"aria-label":"Help",variant:C.Wu.plain,icon:(0,Q.jsx)(q.ZP,{})})})]}),(0,Q.jsx)(k.E,{visibility:{default:"hidden",md:"visible",lg:"hidden"},children:(0,Q.jsx)(H.L,{isOpen:t,onSelect:this.onKebabDropdownSelect,onOpenChange:function(n){return e.setState({isKebabDropdownOpen:n})},popperProps:{position:"right"},toggle:function(n){return(0,Q.jsx)(K.O,{ref:n,isExpanded:t,onClick:e.onKebabDropdownToggle,variant:"plain","aria-label":"Settings and help",children:(0,Q.jsx)(G.ZP,{"aria-hidden":"true"})})},children:(0,Q.jsx)(P.s,{children:o})})}),(0,Q.jsx)(k.E,{visibility:{md:"hidden"},children:(0,Q.jsxs)(H.L,{isOpen:r,onSelect:this.onFullKebabSelect,onOpenChange:function(n){return e.setState({isFullKebabDropdownOpen:n})},popperProps:{position:"right"},toggle:function(n){return(0,Q.jsx)(K.O,{ref:n,isExpanded:r,onClick:e.onFullKebabToggle,variant:"plain","aria-label":"Toolbar menu",children:(0,Q.jsx)(G.ZP,{"aria-hidden":"true"})})},children:[(0,Q.jsx)(E.p,{"aria-label":"User actions",children:(0,Q.jsx)(P.s,{children:a})},"group 2"),(0,Q.jsx)(F.i,{}),(0,Q.jsx)(P.s,{children:o})]})})]}),(0,Q.jsx)(k.E,{visibility:{default:"hidden",md:"visible"},children:(0,Q.jsx)(H.L,{isOpen:i,onSelect:this.onDropdownSelect,onOpenChange:function(n){return e.setState({isDropdownOpen:n})},popperProps:{position:"right"},toggle:function(n){return(0,Q.jsx)(K.O,{ref:n,isExpanded:i,onClick:e.onDropdownToggle,icon:(0,Q.jsx)(V.q,{src:W,alt:""}),isFullHeight:!0,children:"Ned Username"})},children:(0,Q.jsx)(P.s,{children:a})})})]})});return(0,Q.jsxs)(I.H,{children:[(0,Q.jsx)(N.C,{children:(0,Q.jsx)(Z.H,{variant:"plain","aria-label":"Global navigation",children:(0,Q.jsx)(_.ZP,{})})}),(0,Q.jsx)(R.d,{children:(0,Q.jsx)(L.x,{children:(0,Q.jsx)(M.H,{src:J,alt:"PatternFly",heights:{default:"36px"}})})}),(0,Q.jsx)(U.f,{children:l})]})}}]),i}(t.Component),Y=i(2267),$=function(e){var n=e.children;return(0,Q.jsx)(Y.M5,{hoverTip:"Copy",clickTip:"Copied",isCode:!0,variant:"expansion",children:n})},ee=["children","mainContainerId","breadcrumb","header","sidebar","sidebarNavOpen","onPageResize","hasNoBreadcrumb","notificationDrawer","isNotificationDrawerExpanded","hasPageTemplateTitle"],ne=(0,Q.jsxs)(p.a,{children:[(0,Q.jsx)(h.g,{children:"Section home"}),(0,Q.jsx)(h.g,{to:"#",children:"Section title"}),(0,Q.jsx)(h.g,{to:"#",children:"Section title"}),(0,Q.jsx)(h.g,{to:"#",isActive:!0,children:"Section landing"})]}),ie=(0,Q.jsx)(u.NP,{variant:"light",children:(0,Q.jsxs)(x.D,{children:[(0,Q.jsx)(g.x,{component:"h1",children:"React.js + PatternFly 5"}),(0,Q.jsx)(g.x,{component:"p",children:"This is a demo to showcase that we can build out a regular CRA application with PatternFly 5, and consume it server-side in the freemarker template."}),(0,Q.jsx)(g.x,{component:"h2",children:"Start mvn server"}),(0,Q.jsx)($,{children:"mvn quarkus:dev -Dquarkus.http.port=8080 -Dapi.snyk.token=TOKEN -Dapi.trustedContent.vex.host=http://tc-vex-stub-trusted-content.apps.cn-lab2-eu.lue0.p1.openshiftapps.com -Dapi.trustedContent.gav.host=http://swio-trusted-content.apps.cn-lab2-eu.lue0.p1.openshiftapps.com"}),(0,Q.jsx)(g.x,{component:"h2",children:"Start UI in dev mode"}),(0,Q.jsx)($,{children:"cd ui\n# first time\nyarn install\nyarn start\n"}),(0,Q.jsx)(g.x,{component:"h2",children:"Build UI and copy resources to freemarker dir"}),(0,Q.jsx)($,{children:"yarn build"}),(0,Q.jsx)(g.x,{component:"h2",children:"Get a HTML report"}),(0,Q.jsx)($,{children:"http :8080/api/v3/analysis Content-Type:\"application/vnd.cyclonedx+json\" Accept:\"text/html\" @'target/project-bom.json' ex-snyk-token:TOKEN ex-oss-index-user:user@redhat.com 'ex-oss-index-token:TOKEN' > report.html"}),(0,Q.jsx)(g.x,{component:"h2",children:"Using FTL template syntax (example)"}),(0,Q.jsx)($,{children:"<div>\n        Total Vulnerabilities:\n        [=body.report.getSummary().getVulnerabilities().getTotal()]\n      </div>"}),(0,Q.jsx)(g.x,{component:"h3",children:"Result:"}),(0,Q.jsx)("div",{children:"Total Vulnerabilities: [=body.report.getSummary().getVulnerabilities().getTotal()]"})]})}),te=(t.Component,i(4597)),re=i(3065),se=i(21),oe=i(7686),ae=i(2357),le=i(9715),de=i(1667),ce=i(531),pe=function(){return(0,Q.jsx)("div",{className:"pf-v5-u-p-xl",children:(0,Q.jsxs)(te.i,{variant:"compact",children:[(0,Q.jsx)(re.h,{children:(0,Q.jsxs)(se.Tr,{children:[(0,Q.jsx)(oe.Th,{}),(0,Q.jsx)(oe.Th,{children:"#"}),(0,Q.jsx)(oe.Th,{children:"Dependencies"}),(0,Q.jsx)(oe.Th,{children:"# Direct"}),(0,Q.jsx)(oe.Th,{children:"# Transitive"}),(0,Q.jsx)(oe.Th,{children:"Highest CVSS"}),(0,Q.jsx)(oe.Th,{children:"Highest Severity"}),(0,Q.jsx)(oe.Th,{children:"Red Hat remediation available"})]})}),(0,Q.jsxs)(ae.p,{isExpanded:!0,children:["[#assign numOfPkg = 0] [#list body.report.getDependencies() as dependency]",(0,Q.jsxs)(se.Tr,{"data-target":"#[=htmlRef(dependency.getRef())]",children:[(0,Q.jsx)(le.Td,{expand:{rowIndex:0,isExpanded:!0}}),"[#assign numOfPkg++]",(0,Q.jsx)(le.Td,{children:"#[=numOfPkg]"}),(0,Q.jsx)(le.Td,{children:(0,Q.jsx)("a",{href:"[=packageLink(dependency.getRef())]",target:"_blank",children:"[=dependency.getRef().name()]"})}),(0,Q.jsx)(le.Td,{children:"[=dependency.getIssues()?size]"}),(0,Q.jsx)(le.Td,{children:"[=body.dependencyHelper.transitiveIssuesCount(dependency)]"}),"[#if dependency.getHighestVulnerability()?? ] [#assign barNum = dependency.getHighestVulnerability().getCvssScore() *10] [#assign severity = dependency.getHighestVulnerability().getSeverity()?lower_case]",(0,Q.jsxs)(le.Td,{children:["[#if severity == 'critical' || severity == 'high']",(0,Q.jsx)(ce.E,{variant:"danger",measureLocation:"none",title:"[=dependency.getHighestVulnerability().getCvssScore()]/10",min:0,max:10,value:parseInt("[=dependency.getHighestVulnerability().getCvssScore()]")}),"[#else]",(0,Q.jsx)(ce.E,{variant:"warning",measureLocation:"none",title:"[=dependency.getHighestVulnerability().getCvssScore()]/10",min:0,max:10,value:parseInt("[=dependency.getHighestVulnerability().getCvssScore()]")}),"[/#if]"]}),(0,Q.jsxs)(le.Td,{children:["[#if body.issueVisibilityHelper.showIssue(dependency.getHighestVulnerability())]",(0,Q.jsx)("a",{href:"[=issueLink(dependency.getHighestVulnerability())]",target:"_blank",children:"[=dependency.getHighestVulnerability().getId()]"}),"[#else]",(0,Q.jsx)("a",{href:"[=body.snykSignup]",target:"_blank",children:"Sign up for a free Snyk account"}),"to learn about the vulnerabilities found [/#if]"]}),"[#else]",(0,Q.jsx)(le.Td,{children:"--"}),(0,Q.jsx)(le.Td,{children:"--"}),"[/#if]"]}),(0,Q.jsxs)(se.Tr,{isExpanded:!0,children:[(0,Q.jsx)(le.Td,{}),(0,Q.jsx)(le.Td,{children:(0,Q.jsx)(de.G,{children:"Expanded content"})})]}),"[/#list]"]})]})})};var he=function(){return(0,Q.jsx)(Q.Fragment,{children:(0,Q.jsx)(pe,{})})};r.createRoot(document.getElementById("root")).render((0,Q.jsx)(t.StrictMode,{children:(0,Q.jsx)(he,{})}))}},n={};function i(t){var r=n[t];if(void 0!==r)return r.exports;var s=n[t]={id:t,loaded:!1,exports:{}};return e[t](s,s.exports,i),s.loaded=!0,s.exports}i.m=e,function(){var e=[];i.O=function(n,t,r,s){if(!t){var o=1/0;for(c=0;c<e.length;c++){t=e[c][0],r=e[c][1],s=e[c][2];for(var a=!0,l=0;l<t.length;l++)(!1&s||o>=s)&&Object.keys(i.O).every((function(e){return i.O[e](t[l])}))?t.splice(l--,1):(a=!1,s<o&&(o=s));if(a){e.splice(c--,1);var d=r();void 0!==d&&(n=d)}}return n}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[t,r,s]}}(),i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,{a:n}),n},i.d=function(e,n){for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={179:0};i.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,s,o=t[0],a=t[1],l=t[2],d=0;if(o.some((function(n){return 0!==e[n]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(l)var c=l(i)}for(n&&n(t);d<o.length;d++)s=o[d],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(c)},t=self.webpackChunkui=self.webpackChunkui||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=i.O(void 0,[736],(function(){return i(8584)}));t=i.O(t)}();
//# sourceMappingURL=main.js.map