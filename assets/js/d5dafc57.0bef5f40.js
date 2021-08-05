"use strict";(self.webpackChunkreact_kakao_maps_sdk_docs=self.webpackChunkreact_kakao_maps_sdk_docs||[]).push([[38],{240:function(e,a,n){n.r(a),n.d(a,{contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return M}});var t=n(7462),r=n(3366),o=n(7294),s=n(3905),i=n(8086),p=n(1710),c=n(3772),l=function(){var e=(0,p.useKakaoMapsSDK)({apiKey:"6ec8020798deac7ef2f8897ad1c5ccf1"});return o.createElement(c.Map,{loading:e,center:{lat:33.450701,lng:126.570667},style:{width:"100%",height:"450px"},options:{level:3}},o.createElement(c.MapMarker,{position:{lat:33.450701,lng:126.570667}}))},k=["components"],m={title:"\ub9c8\ucee4 \uc0dd\uc131\ud558\uae30",sidebar_position:1},d=void 0,u={unversionedId:"sample/overlay/basicMarker",id:"sample/overlay/basicMarker",isDocsHomePage:!1,title:"\ub9c8\ucee4 \uc0dd\uc131\ud558\uae30",description:"\uc9c0\ub3c4\uc5d0 \uc62c\ub77c\uac00\ub294 \ud540 \ubaa8\uc591\uc758 \uc774\ubbf8\uc9c0\ub97c \ub9c8\ucee4\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4. \uc544\ub798 \uc608\uc81c\ub294 \uc9c0\ub3c4 \uc704\uc5d0 \ub9c8\ucee4\ub97c \ud45c\uc2dc\ud558\ub294 \uae30\ubcf8 \uc608\uc81c\uc785\ub2c8\ub2e4.",source:"@site/docs/sample/overlay/basicMarker.mdx",sourceDirName:"sample/overlay",slug:"/sample/overlay/basicMarker",permalink:"/docs/sample/overlay/basicMarker",editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/overlay/basicMarker.mdx",version:"current",sidebarPosition:1,frontMatter:{title:"\ub9c8\ucee4 \uc0dd\uc131\ud558\uae30",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\uc9c0\ub3c4 \uc774\ub3d9\uc2dc\ud0a4\uae30",permalink:"/docs/sample/map/moveMap"},next:{title:"\ub4dc\ub798\uadf8 \uac00\ub2a5\ud55c \ub9c8\ucee4 \uc0dd\uc131\ud558\uae30",permalink:"/docs/sample/overlay/draggableMarker"}},M=[{value:"Source Code",id:"source-code",children:[]}],b={toc:M};function f(e){var a=e.components,n=(0,r.Z)(e,k);return(0,s.kt)("wrapper",(0,t.Z)({},b,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\uc9c0\ub3c4\uc5d0 \uc62c\ub77c\uac00\ub294 \ud540 \ubaa8\uc591\uc758 \uc774\ubbf8\uc9c0\ub97c \ub9c8\ucee4\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4. \uc544\ub798 \uc608\uc81c\ub294 \uc9c0\ub3c4 \uc704\uc5d0 \ub9c8\ucee4\ub97c \ud45c\uc2dc\ud558\ub294 \uae30\ubcf8 \uc608\uc81c\uc785\ub2c8\ub2e4."),(0,s.kt)(l,{mdxType:"SampleCreateMap"}),(0,s.kt)("h3",{id:"source-code"},"Source Code"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"original docs : ",(0,s.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/basicMarker/"},"https://apis.map.kakao.com/web/sample/basicMarker/"))),(0,s.kt)(i.Z,{className:"language-jsx",mdxType:"CodeBlock"},'import React from "react";\nimport { useKakaoMapsSDK } from "react-kakao-maps-sdk/hooks";\nimport { Map, MapMarker } from "react-kakao-maps-sdk";\n\nconst SampleCreateMap = () => {\n  //  script \ub3d9\uc801 \ub85c\ub529\ud558\ub294 hook, HTML\uc5d0 Sciprt \uc0bd\uc785 \ud558\uc5ec \uc0ac\uc6a9\ud558\uc5ec\ub3c4 \uac00\ub2a5\ud568.\n  const loading = useKakaoMapsSDK({\n    apiKey: process.env.KAKAOMAP_API_KEY,\n  });\n\n  return (\n    <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n      loading={loading} // useKakaoMapsSDK\ub97c \uc774\uc6a9\ud558\uc5ec script \ub3d9\uc801 \ub85c\ub529 \ud560 \ub54c \uc0ac\uc6a9\n      center={{\n        // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n        lat: 33.450701,\n        lng: 126.570667,\n      }}\n      style={{\n        // \uc9c0\ub3c4\uc758 \ud06c\uae30\n        width: "100%",\n        height: "450px",\n      }}\n      options={{\n        level: 3, // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n      }}\n    >\n      <MapMarker // \ub9c8\ucee4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4\n        position={{\n          // \ub9c8\ucee4\uac00 \ud45c\uc2dc\ub420 \uc704\uce58\uc785\ub2c8\ub2e4\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n      />\n    </Map>\n  );\n};\n\nexport default SampleCreateMap;\n'))}f.isMDXComponent=!0}}]);