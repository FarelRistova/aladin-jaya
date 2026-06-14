<script setup>
import bahanPokokProducts from '@/data/bahan-pokok.json'
import bahanBakuProducts from '@/data/bahan-baku.json'
import produkBekuProducts from '@/data/produk-beku.json'
import perlengkapanProducts from '@/data/perlengkapan.json'

const bahanPokokImages = import.meta.glob('../../assets/img/menu/bahan-pokok/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default'
})

const bahanBakuImages = import.meta.glob('../../assets/img/menu/bahan-baku/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default'
})

const produkBekuImages = import.meta.glob('../../assets/img/menu/produk-beku/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default'
})

const perlengkapanImages = import.meta.glob('../../assets/img/menu/perlengkapan/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default'
})

const bahanPokokImageMap = Object.fromEntries(
    Object.entries(bahanPokokImages).map(([path, url]) => [path.split('/').pop(), url])
)

const bahanBakuImageMap = Object.fromEntries(
    Object.entries(bahanBakuImages).map(([path, url]) => [path.split('/').pop(), url])
)

const produkBekuImageMap = Object.fromEntries(
    Object.entries(produkBekuImages).map(([path, url]) => [path.split('/').pop(), url])
)

const perlengkapanImageMap = Object.fromEntries(
    Object.entries(perlengkapanImages).map(([path, url]) => [path.split('/').pop(), url])
)

const productSections = [
    {
        id: 'bahan-pokok',
        label: 'Bahan Pokok',
        title: 'Bahan Pokok',
        products: bahanPokokProducts,
        imageMap: bahanPokokImageMap,
        active: true
    },
    {
        id: 'bahan-baku',
        label: 'Bahan Baku',
        title: 'Bahan Baku',
        products: bahanBakuProducts,
        imageMap: bahanBakuImageMap
    },
    {
        id: 'produk-beku',
        label: 'Produk Beku',
        title: 'Produk Beku',
        products: produkBekuProducts,
        imageMap: produkBekuImageMap
    },
    {
        id: 'perlengkapan',
        label: 'Perlengkapan',
        title: 'Perlengkapan',
        products: perlengkapanProducts,
        imageMap: perlengkapanImageMap
    }
]

function getProductImage(imageMap, imageName) {
    return imageMap[imageName] || ''
}
</script>

<template>
    <section id="menu" class="menu section">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>Produk & Layanan</h2>
            <p>
                <span>Lihat&nbsp;</span>
                <span class="description-title">Solusi HOREKA Kami</span>
            </p>
        </div>
        <!-- End Section Title -->

        <div class="container">
            <ul class="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                <li v-for="section in productSections" :key="section.id" class="nav-item">
                    <a
                        class="nav-link"
                        :class="{ active: section.active, show: section.active }"
                        data-bs-toggle="tab"
                        :data-bs-target="`#${section.id}`"
                    >
                        <h4>{{ section.label }}</h4>
                    </a>
                </li>
            </ul>

            <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
                <div
                    v-for="section in productSections"
                    :key="section.id"
                    class="tab-pane fade"
                    :class="{ active: section.active, show: section.active }"
                    :id="section.id"
                >
                    <div class="tab-header text-center">
                        <p>Produk</p>
                        <h3>{{ section.title }}</h3>
                    </div>

                    <div class="row gy-5">
                        <div
                            v-for="item in section.products"
                            :key="item.id"
                            class="col-lg-4 menu-item"
                        >
                            <a :href="getProductImage(section.imageMap, item.gambar)" class="glightbox">
                                <img
                                    :src="getProductImage(section.imageMap, item.gambar)"
                                    class="menu-img img-fluid"
                                    :alt="item.nama"
                                />
                            </a>
                            <h4>{{ item.nama }}</h4>
                            <p class="ingredients">
                                {{ item.deskripsi }}
                            </p>
                            <p class="price">{{ item.harga || 'Sesuai kebutuhan' }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>