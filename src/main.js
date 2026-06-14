import { createApp, nextTick } from 'vue'
import App from './App.vue'
import router from './router'

// Import CSS vendor & global styles
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/aos/aos.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import './assets/css/main.css'

import bootstrapBundleUrl from './assets/vendor/bootstrap/js/bootstrap.bundle.min.js?url'
import phpEmailFormUrl from './assets/vendor/php-email-form/validate.js?url'
import aosUrl from './assets/vendor/aos/aos.js?url'
import glightboxUrl from './assets/vendor/glightbox/js/glightbox.min.js?url'
import pureCounterUrl from './assets/vendor/purecounter/purecounter_vanilla.js?url'
import swiperUrl from './assets/vendor/swiper/swiper-bundle.min.js?url'

import initTemplateScripts from './assets/js/main.js'

function loadScript(src) {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script')
		script.src = src
		script.async = false
		script.onload = () => resolve(src)
		script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
		document.head.appendChild(script)
	})
}


const app = createApp(App)
app.use(router)
app.mount('#app')

async function bootstrapTemplate() {
	const vendorScripts = [
		bootstrapBundleUrl,
		phpEmailFormUrl,
		aosUrl,
		glightboxUrl,
		pureCounterUrl,
		swiperUrl
	]

	for (const scriptUrl of vendorScripts) {
		await loadScript(scriptUrl)
	}

	await nextTick()
	initTemplateScripts()
}

bootstrapTemplate().catch((error) => {
	console.error(error)
})