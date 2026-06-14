<template>
    <section id="gallery" class="gallery section light-background">
        <div class="container section-title" data-aos="fade-up">
            <h2>Galeri</h2>
            <p>
                <span>Lihat&nbsp;</span>
                <span class="description-title">Aktivitas Kami</span>
            </p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="swiper init-swiper">
                <div class="swiper-wrapper align-items-center">
                    <div v-for="image in galleryImages" :key="image.src" class="swiper-slide">
                        <a class="glightbox" data-gallery="images-gallery" :href="image.src">
                            <img :src="image.src" :alt="image.alt" class="img-fluid" />
                        </a>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import gallery1 from '@/assets/img/gallery/gallery-1.jpg'
import gallery2 from '@/assets/img/gallery/gallery-2.jpg'
import gallery3 from '@/assets/img/gallery/gallery-3.jpg'
import gallery4 from '@/assets/img/gallery/gallery-4.jpg'
import gallery5 from '@/assets/img/gallery/gallery-5.jpg'
import gallery6 from '@/assets/img/gallery/gallery-6.jpg'
import gallery7 from '@/assets/img/gallery/gallery-7.jpg'
import gallery8 from '@/assets/img/gallery/gallery-8.jpg'

const galleryImages = [
  { src: gallery1, alt: 'Galeri 1' },
  { src: gallery2, alt: 'Galeri 2' },
  { src: gallery3, alt: 'Galeri 3' },
  { src: gallery4, alt: 'Galeri 4' },
  { src: gallery5, alt: 'Galeri 5' },
  { src: gallery6, alt: 'Galeri 6' },
  { src: gallery7, alt: 'Galeri 7' },
  { src: gallery8, alt: 'Galeri 8' }
]
</script>