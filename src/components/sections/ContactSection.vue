<template>
    <section id="contact" class="contact section">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>Kontak</h2>
            <p>
                <span>Butuh Bantuan?&nbsp;</span>
                <span class="description-title">Hubungi Kami</span>
            </p>
        </div>
        <!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="mb-5">
                <iframe style="width: 100%; height: 400px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.9625325208676!2d105.2618267!3d-5.4226638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40da4b585fb31f%3A0xc4a7e4233f28f02e!2sALADIN%20JAYA%2C%20Toko%20Bahan%20dan%20Perlengkapan%20Kue%2C%20cafe%20dan%20Resto%2C%20Baking%20Ingredients%20Shop!5e0!3m2!1sen!2sid!4v1781462845474!5m2!1sen!2sid"
                    frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <!-- End Google Maps -->

            <div class="row gy-4">
                <div class="col-md-6">
                    <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                        <i class="icon bi bi-geo-alt flex-shrink-0"></i>
                        <div>
                            <h3>Address</h3>
                            <p>Jl. Jend. Sudirman No.60 60A, Enggal, Kota Bandar Lampung, Lampung 35118</p>
                        </div>
                    </div>
                </div>
                <!-- End Info Item -->

                <div class="col-md-6">
                    <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
                        <i class="icon bi bi-telephone flex-shrink-0"></i>
                        <div>
                            <h3>Call Us</h3>
                            <p>(0721) 264614</p>
                        </div>
                    </div>
                </div>
                <!-- End Info Item -->

                <div class="col-md-6">
                    <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
                        <i class="icon bi bi-envelope flex-shrink-0"></i>
                        <div>
                            <h3>Email Us</h3>
                            <p>hcaladinjaya60@gmail.com</p>
                        </div>
                    </div>
                </div>
                <!-- End Info Item -->

                <div class="col-md-6">
                    <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
                        <i class="icon bi bi-clock flex-shrink-0"></i>
                        <div>
                            <h3>Opening Hours<br /></h3>
                            <p>
                                <strong>Mon - Sun:</strong> 8AM - 5PM
                            </p>
                        </div>
                    </div>
                </div>
                <!-- End Info Item -->
            </div>

            <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up"
                data-aos-delay="600">
                <div class="row gy-4">
                    <div class="col-md-6">
                        <input type="text" name="name" class="form-control" placeholder="Your Name" required="" />
                    </div>

                    <div class="col-md-6">
                        <input type="email" class="form-control" name="email" placeholder="Your Email" required="" />
                    </div>

                    <div class="col-md-12">
                        <input type="text" class="form-control" name="subject" placeholder="Subject" required="" />
                    </div>

                    <div class="col-md-12">
                        <textarea class="form-control" name="message" rows="6" placeholder="Message"
                            required=""></textarea>
                    </div>

                    <div class="col-md-12 text-center">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">
                            Your message has been sent. Thank you!
                        </div>

                        <button type="submit">Send Message</button>
                    </div>
                </div>
            </form>
            <!-- End Contact Form -->
        </div>
    </section>
</template>