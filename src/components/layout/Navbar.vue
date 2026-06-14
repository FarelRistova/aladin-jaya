<template>
    <header id="header" class="header d-flex align-items-center sticky-top">
        <div class="container position-relative d-flex align-items-center justify-content-between">
            <a href="/" class="logo d-flex align-items-center">
                <img src="@/assets/img/logo.png" alt="Aladin Jaya logo" />
            </a>

            <nav id="navmenu" class="navmenu">
                <ul>
                    <li>
                        <a href="#hero" class="active">Beranda<br /></a>
                    </li>
                    <li><a href="#about">Tentang Kami</a></li>
                    <li><a href="#menu">Produk</a></li>
                    <li><a href="#gallery">Galeri</a></li>
                    <li><a href="#contact">Kontak</a></li>
                </ul>
                <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <a class="btn-getstarted" href="#contact" aria-label="Contact us">
                <i class="bi bi-cart3" aria-hidden="true"></i>
            </a>
        </div>
    </header>
</template>