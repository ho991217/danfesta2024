if(!self.define){let e,a={};const c=(c,s)=>(c=new URL(c+".js",s).href,a[c]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=a,document.head.appendChild(e)}else e=c,importScripts(c),a()})).then((()=>{let e=a[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const o=e=>c(e,n),l={module:{uri:n},exports:t,require:o};a[n]=Promise.all(s.map((e=>l[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"126736c3c2a2129495b41c25925eb53c"},{url:"/_next/static/chunks/0e762574-88535e9325c4d30d.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/0e762574-88535e9325c4d30d.js.map",revision:"fc1e2f2e77f3219c10f745c031a0133c"},{url:"/_next/static/chunks/1192-dd5e42b33c7735e9.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/1192-dd5e42b33c7735e9.js.map",revision:"7fc79ef952aea229866e5db2f6cc3491"},{url:"/_next/static/chunks/146-4bc3ac7bfeeac655.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/146-4bc3ac7bfeeac655.js.map",revision:"e4650e6d6a80a335e56f53edc03e7c43"},{url:"/_next/static/chunks/1692-abf563f4a3b62416.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/1692-abf563f4a3b62416.js.map",revision:"b6e04e0e73a814a7046f10feb2fbed65"},{url:"/_next/static/chunks/1749-261b095058d04c45.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/1749-261b095058d04c45.js.map",revision:"ef9c6fc65a6574dc6955062b11ec3563"},{url:"/_next/static/chunks/248-c5f0da968d311b68.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/248-c5f0da968d311b68.js.map",revision:"8bd7249ec9318dcf8a8acfc4f0f45cdd"},{url:"/_next/static/chunks/2499-c06bb443dfce7e5d.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/2499-c06bb443dfce7e5d.js.map",revision:"769e5b4ef44e11bc66e9f3ad466b4612"},{url:"/_next/static/chunks/396464d2-6403dc51c357bec3.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/396464d2-6403dc51c357bec3.js.map",revision:"3b8b83f0682db65cdb8fbe3f106b5161"},{url:"/_next/static/chunks/6289-4b4a49479cf9a198.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/6289-4b4a49479cf9a198.js.map",revision:"4160444f0cf669c8c9ded7c9ce94c3a4"},{url:"/_next/static/chunks/6977-d23ce891770f8d25.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/6977-d23ce891770f8d25.js.map",revision:"9f45e48a4e05766fcea4566dd8c0f4e5"},{url:"/_next/static/chunks/7057-42e6dfc072d6ec34.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/7057-42e6dfc072d6ec34.js.map",revision:"a22f11dc26b3029a150858448c4e583e"},{url:"/_next/static/chunks/795d4814-ec5c168b1b14bc98.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/8190-b2855456daf712e5.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/8190-b2855456daf712e5.js.map",revision:"e8710716c0ba65a85166b3e5bccf257d"},{url:"/_next/static/chunks/820-4da19da031dcf6e6.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/820-4da19da031dcf6e6.js.map",revision:"e1eeee774411601bb91723e6bec5c02f"},{url:"/_next/static/chunks/8269-776efddda2d0e8bc.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/8269-776efddda2d0e8bc.js.map",revision:"f790814be14c0ea1fb4498f4380ab4ff"},{url:"/_next/static/chunks/8299-2c8f30eb1874dd53.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/8299-2c8f30eb1874dd53.js.map",revision:"492ffc2566da2a1aa5919cfa89959eac"},{url:"/_next/static/chunks/8599-e952faaa3bd2bc38.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/8599-e952faaa3bd2bc38.js.map",revision:"44127f3c8b5bbb10df55b07e00ff7df2"},{url:"/_next/static/chunks/9318.0f417de68d0715f0.js",revision:"0f417de68d0715f0"},{url:"/_next/static/chunks/9318.0f417de68d0715f0.js.map",revision:"bf46af6996334e42f17d47e293bdf3ee"},{url:"/_next/static/chunks/9c4e2130-654d5ed990ee6dc9.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/9c4e2130-654d5ed990ee6dc9.js.map",revision:"8531f924c6bfc42fc21e284c2e4b607f"},{url:"/_next/static/chunks/aaea2bcf-5f451a8b6c999ae3.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/aaea2bcf-5f451a8b6c999ae3.js.map",revision:"845b0498fd02910a9a328a47bfcb91ec"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/admin/layout-a777e3216f5d2cc5.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/admin/page-40bb7e6561fccfa8.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/admin/page-40bb7e6561fccfa8.js.map",revision:"0ecf0a54eedc0569ac67263da2329943"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/admin/ticket/page-66c55306fcec9b5a.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/admin/ticket/page-66c55306fcec9b5a.js.map",revision:"c6d026c31a5b31e3af48265f87ac4429"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/events/page-5d3f3d42f823516a.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/find-my/id/complete/page-1f1b9a11a87ad120.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/find-my/id/complete/page-1f1b9a11a87ad120.js.map",revision:"a7ebbdf21d95c4b171b23f61b9e616f3"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/find-my/layout-6fa44c9189c2a690.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/find-my/page-1428b7a110d3c568.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/find-my/page-1428b7a110d3c568.js.map",revision:"92725161ecabd1c9f7c874a082a303ba"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/find-my/password/complete/page-8b813dc5f36d5b6b.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/find-my/password/complete/page-8b813dc5f36d5b6b.js.map",revision:"83a110a7d98a6409d41df6c4479f029f"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/jeomshim/layout-a12730a18af42fef.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/jeomshim/page-271dbbda77021221.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/jeomshim/page-271dbbda77021221.js.map",revision:"2cb2faffbfea67a8ffb4c2e7aea6331a"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/layout-b040e2f4f0cfe165.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/layout-b040e2f4f0cfe165.js.map",revision:"e36e94e2f033bc62317d83e7382a15ba"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/lineup/page-ea7e0eeee159dfdc.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/lineup/page-ea7e0eeee159dfdc.js.map",revision:"d00bdb289f1838d76ce563aec2f90d44"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/live-map/page-bb7158acbfba6974.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/login/page-90cd897afd75d710.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/login/page-90cd897afd75d710.js.map",revision:"b3fc12a34611755006a0463d80f610ab"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/my-tickets/page-c5d03e7cc8fd50cc.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/my-tickets/page-c5d03e7cc8fd50cc.js.map",revision:"7aa187e3c62b22abf3a3c69b8cc75ef8"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/mypage/layout-635b5f92f180162c.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/mypage/page-c5d682711c83e0b2.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/mypage/page-c5d682711c83e0b2.js.map",revision:"1b38b57dd1bec9f3848c1a96d895b348"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/notice/page-5bb0dd645c7acf94.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/notice/page-5bb0dd645c7acf94.js.map",revision:"19f7c4cb2dd841f5829eca85b8e98dbb"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/password/layout-87572239411301c1.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/password/page-6c225d34cf586fba.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/password/page-6c225d34cf586fba.js.map",revision:"b46bec634656885338aa605ad4c305fe"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/signup/complete/page-cfd0f3153e80f137.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/signup/complete/page-cfd0f3153e80f137.js.map",revision:"dee41cdd3508b9eecd77bb8f3462b80d"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/signup/layout-6f1a9715435f4f7d.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/signup/page-733652f895841857.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/sms/layout-d5bfe90fa3e47022.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/sms/page-b9b80f4f650d704a.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/sms/page-b9b80f4f650d704a.js.map",revision:"92a25d5f375141220c65707fa2724e05"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/ticketing/%5BeventId%5D/page-0e13eae2b8ddf9a5.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/ticketing/%5BeventId%5D/page-0e13eae2b8ddf9a5.js.map",revision:"76e6812b181c1f87348ff237c22095f4"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/ticketing/%5BeventId%5D/result/page-326c5f0949fb9481.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/ticketing/%5BeventId%5D/result/page-326c5f0949fb9481.js.map",revision:"6fdc3c8904f8c697eb03d16a2dd3d9c5"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/ticketing/page-2681a594b162b075.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/ticketing/page-2681a594b162b075.js.map",revision:"1fd777d64bdc4391c0cdeafb61ff2dd4"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/verify/layout-6796acd5991bd7f7.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/verify/page-669139f89e62182a.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(back-nav)/verify/page-669139f89e62182a.js.map",revision:"51cf98855992fcf519629f79c918328b"},{url:"/_next/static/chunks/app/%5Blocale%5D/(root-nav)/layout-ce95b858a14314cf.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(root-nav)/layout-ce95b858a14314cf.js.map",revision:"54ca663bb6310dfedbccfa3cb5c51032"},{url:"/_next/static/chunks/app/%5Blocale%5D/(root-nav)/page-d2deaa3b5d676c2b.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/(root-nav)/page-d2deaa3b5d676c2b.js.map",revision:"c12107216e128ea097762b59a6733c0e"},{url:"/_next/static/chunks/app/%5Blocale%5D/error-22e42de31be253e5.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/%5Blocale%5D/error-22e42de31be253e5.js.map",revision:"30925d855f8c47a5a0f4994e4d0ea3f9"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-7c50dc925329b529.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/global-error-72d5b87dd347c40c.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/global-error-72d5b87dd347c40c.js.map",revision:"c0e8d766ee2dea825fbf3113394f57f9"},{url:"/_next/static/chunks/app/layout-723758fecaede43e.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/layout-723758fecaede43e.js.map",revision:"db501b4810cfcd728372872fd54f0887"},{url:"/_next/static/chunks/app/not-found-41ebfcf15ac4eb8c.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/app/not-found-41ebfcf15ac4eb8c.js.map",revision:"eae82bffe88ab51ac675e05cb8d85352"},{url:"/_next/static/chunks/app/page-e15639ca94ec0d4c.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/ee560e2c-fd01205a31de2fd4.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/ee560e2c-fd01205a31de2fd4.js.map",revision:"dd686c250a107d509532c3cd869128da"},{url:"/_next/static/chunks/f7333993-e3b5cc76884412c1.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/f7333993-e3b5cc76884412c1.js.map",revision:"c2138854f86015080c7f1e66e142c6a7"},{url:"/_next/static/chunks/f97e080b-70997436bd745d19.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/fd9d1056-c2c56fe980bab7e3.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/fd9d1056-c2c56fe980bab7e3.js.map",revision:"c2a88be39685b7aa9c489578030d9144"},{url:"/_next/static/chunks/framework-9317b1ce0f036b87.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/framework-9317b1ce0f036b87.js.map",revision:"449f3e0236bc5724626b5ce34687690f"},{url:"/_next/static/chunks/main-46ca9092173d4388.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/main-46ca9092173d4388.js.map",revision:"27efe4c574fb6b5ca4a95b441f0f6632"},{url:"/_next/static/chunks/main-app-bd6513607a6cfd91.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/main-app-bd6513607a6cfd91.js.map",revision:"2b7eb646bf0b6903b607384f40cce0f9"},{url:"/_next/static/chunks/pages/_app-b00e41bda8c498ab.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/pages/_app-b00e41bda8c498ab.js.map",revision:"1eb7a36ddc451899998db61d47dd06c6"},{url:"/_next/static/chunks/pages/_error-bd178edd4bc85d3f.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/pages/_error-bd178edd4bc85d3f.js.map",revision:"54b84c03874446e45358ffecbc507680"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-55eb650a66c5e02a.js",revision:"oTmPXjhlZsu4iSKXJ6N04"},{url:"/_next/static/chunks/webpack-55eb650a66c5e02a.js.map",revision:"ec6bbe266da51996bbe9ef759493e5e4"},{url:"/_next/static/css/91840300bc85b788.css",revision:"91840300bc85b788"},{url:"/_next/static/css/91840300bc85b788.css.map",revision:"4a7f4740494ea0645fdc4216269e70e6"},{url:"/_next/static/media/feasta-logo.55d8e0c5.png",revision:"bc48c32abce854242186a1c89bf4699c"},{url:"/_next/static/media/glass.c0e09642.jpeg",revision:"c0d159c41fa5b80a9e2f180d4ca5d8a0"},{url:"/_next/static/media/perspaleta2_0020.280822ee.png",revision:"1ed6cc95733bc4b46294c9fbc4c63786"},{url:"/_next/static/oTmPXjhlZsu4iSKXJ6N04/_buildManifest.js",revision:"a6a1b02b264b0bd331368dbd8a70f310"},{url:"/_next/static/oTmPXjhlZsu4iSKXJ6N04/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-icon-144x144.png",revision:"443a9f512bea8510e5e9c10707d3a8ae"},{url:"/android-icon-192x192.png",revision:"c7edbbe8788d0be373d0407fad366b66"},{url:"/android-icon-36x36.png",revision:"4b298b2462abaae463bc7cfa9d49eda2"},{url:"/android-icon-48x48.png",revision:"28db9addbd3cd60129dbf9cc96dea120"},{url:"/android-icon-72x72.png",revision:"b09b61f96350d2c579590b7dd6a9f102"},{url:"/android-icon-96x96.png",revision:"1ba0538c51ebd1f67d7746364212df19"},{url:"/icons/feasta-logo.png",revision:"bc48c32abce854242186a1c89bf4699c"},{url:"/icons/github.svg",revision:"f25e1f27108b1129feb44146a5de3104"},{url:"/icons/logo-white.svg",revision:"b0611d6a6dd744e386b0253c9adf3ced"},{url:"/icons/logo.svg",revision:"6e9dc1a7cf26d332535900766941b376"},{url:"/icons/ticket.svg",revision:"b247fd9d87b1ceb717a6f54f20ce159a"},{url:"/images/danfesta-bg-1.png",revision:"5fb4b9db00aee6a8634041156b4e274c"},{url:"/images/glass.jpeg",revision:"c0d159c41fa5b80a9e2f180d4ca5d8a0"},{url:"/images/perspaleta2_0020.png",revision:"1ed6cc95733bc4b46294c9fbc4c63786"},{url:"/manifest.json",revision:"fda875c04c6f43c55db6f73f41dbeb09"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/qr-scanner.svg",revision:"34c11a3a8a64e6002d012b4ed2af747e"},{url:"/thumbnail.webp",revision:"bd1b1f9b792de4fc3708d6eddf7ac395"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:c,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
