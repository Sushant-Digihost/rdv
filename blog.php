<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RDV IT Solution - blog</title>
    <!-- Framwork - CSS Include -->
    <?php include "front_include/header_script.php"; ?>
</head>

<body>
    <?php include "front_include/sidebar.php"; ?>
    <div id="main" class="page_wrapper">
        <main class="page_content">
            <?php include "front_include/header.php"; ?>
            <section class="breadcrumb">
                <div class="container">
                    <div class="breadcrumb-content">
                        <h3>Blog</h3>
                        <ul>
                            <li><a href="index.php">Homepage</a></li>
                            <li>
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.82714 20.1125H3.16524C3.08712 20.1125 3.01048 20.0911 2.94363 20.0507C2.87679 20.0102 2.8223 19.9523 2.78606 19.8831C2.74983 19.8138 2.73324 19.736 2.73809 19.658C2.74294 19.5801 2.76904 19.5049 2.81358 19.4407L6.78543 13.7164L2.81358 7.99343C2.76867 7.92923 2.74226 7.85393 2.73722 7.77575C2.73217 7.69757 2.74869 7.6195 2.78497 7.55006C2.82125 7.48062 2.87589 7.42248 2.94295 7.38196C3.01001 7.34145 3.0869 7.32013 3.16524 7.32031H6.82714C6.89626 7.3203 6.96436 7.33703 7.0256 7.36907C7.08685 7.40111 7.13942 7.44751 7.17881 7.5043L11.3197 13.4725C11.3694 13.5441 11.396 13.6292 11.396 13.7164C11.396 13.8036 11.3694 13.8887 11.3197 13.9603L7.17881 19.9285C7.13942 19.9853 7.08685 20.0317 7.0256 20.0637C6.96436 20.0958 6.89626 20.1125 6.82714 20.1125ZM3.98304 19.2567H6.60384L10.4473 13.7164L6.60331 8.17609H3.98251L7.65805 13.4725C7.70773 13.5441 7.73436 13.6292 7.73436 13.7164C7.73436 13.8036 7.70773 13.8887 7.65805 13.9603L3.98304 19.2567Z"
                                        fill="white" />
                                    <path
                                        d="M13.6209 20.1131H9.96012C9.88208 20.1129 9.80558 20.0914 9.73889 20.0509C9.6722 20.0104 9.61786 19.9524 9.58176 19.8832C9.54565 19.814 9.52915 19.7363 9.53405 19.6584C9.53894 19.5805 9.56504 19.5054 9.60952 19.4413L13.5803 13.717L9.60952 7.99405C9.565 7.92987 9.5389 7.85474 9.53403 7.77678C9.52917 7.69883 9.54574 7.62103 9.58194 7.55182C9.61815 7.48262 9.6726 7.42464 9.73941 7.38417C9.80621 7.3437 9.88282 7.3223 9.96092 7.32227H13.6209C13.6901 7.32225 13.7582 7.33898 13.8194 7.37102C13.8807 7.40306 13.9332 7.44947 13.9726 7.50626L18.1137 13.4731C18.1634 13.5447 18.1901 13.6298 18.1901 13.717C18.1901 13.8042 18.1634 13.8893 18.1137 13.9609L13.9737 19.9291C13.9342 19.9861 13.8814 20.0326 13.82 20.0646C13.7586 20.0967 13.6902 20.1133 13.6209 20.1131ZM10.7768 19.2573H13.3976L17.2422 13.717L13.3982 8.1767H10.7774L14.4527 13.4731C14.5023 13.5447 14.529 13.6298 14.529 13.717C14.529 13.8042 14.5023 13.8893 14.4527 13.9609L10.7768 19.2573Z"
                                        fill="white" />
                                    <path
                                        d="M20.418 20.1112H16.7558C16.6777 20.1111 16.6011 20.0897 16.5343 20.0492C16.4675 20.0088 16.4131 19.9508 16.3769 19.8816C16.3407 19.8124 16.3241 19.7346 16.329 19.6566C16.3338 19.5787 16.3599 19.5035 16.4044 19.4394L20.376 13.7151L16.4044 7.99209C16.3599 7.92792 16.3338 7.85278 16.329 7.77483C16.3241 7.69688 16.3407 7.61908 16.3769 7.54987C16.4131 7.48066 16.4675 7.42268 16.5343 7.38222C16.6011 7.34175 16.6777 7.32034 16.7558 7.32031H20.418C20.4871 7.32034 20.5551 7.33709 20.6163 7.36913C20.6775 7.40117 20.73 7.44755 20.7694 7.5043L24.9105 13.4712C24.9602 13.5428 24.9869 13.6279 24.9869 13.7151C24.9869 13.8022 24.9602 13.8873 24.9105 13.959L20.7694 19.9272C20.73 19.9839 20.6775 20.0303 20.6163 20.0623C20.5551 20.0944 20.4871 20.1111 20.418 20.1112ZM17.5736 19.2554H20.1944L24.0382 13.7151L20.1939 8.17475H17.5731L21.2484 13.4712C21.2981 13.5428 21.3247 13.6279 21.3247 13.7151C21.3247 13.8022 21.2981 13.8873 21.2484 13.959L17.5736 19.2554Z"
                                        fill="white" />
                                </svg>
                            </li>
                            <li><a href="blog.php">Blog</a></li>
                        </ul>
                    </div>
                </div>
                <div class="breadcrumb-video">
                    <video autoplay muted loop id="myVideo">
                        <source src="assets/images/breadcrumb-video.mp4" type="video/mp4">
                    </video>
                </div>
            </section>

            <section class="blog-page section">
               <div class="container">
                    <div class="news-select desktop-option">
                        <div data-filter="ALL" class="filter-button bttn active" onclick="applyFilter(this)">All</div>
                        <div data-filter="System-Optimization" class="filter-button bttn" onclick="applyFilter(this)">System Optimization</div>
                        <div data-filter="Hardware" class="filter-button bttn" onclick="applyFilter(this)">Hardware</div>
                        <div data-filter="AMC" class="filter-button bttn" onclick="applyFilter(this)">AMC</div>
                        <div data-filter="Server" class="filter-button bttn" onclick="applyFilter(this)">Server</div>
                        <div data-filter="Networking" class="filter-button bttn" onclick="applyFilter(this)">Networking</div>
                        <div data-filter="ITStrategy" class="filter-button bttn" onclick="applyFilter(this)">IT Strategy</div>
                        <div data-filter="SoftwareSolutions" class="filter-button bttn" onclick="applyFilter(this)">Software Solutions</div>
                    </div>

                    <div class="news-select mobile-option">
                        <select id="filter-dropdown" class="filter-dropdown" onchange="applyFilter(this)">
                            <option data-filter="ALL"  value="ALL">Select Category</option>
                            <option data-filter="System-Optimization" value="System-Optimization">System Optimization</option>
                            <option data-filter="Hardware" value="Hardware">Hardware</option>
                            <option data-filter="AMC" value="AMC">AMC</option>
                            <option data-filter="Server" value="Server">Server</option>
                            <option data-filter="Networking" value="Networking">Networking</option>
                            <option data-filter="ITStrategy" value="ITStrategy">IT Strategy</option>
                            <option data-filter="SoftwareSolutions" value="SoftwareSolutions">Software Solutions</option>
                        </select>
                    </div>

                    <div class="tab-content blog_content">
                        <div class="row my-row">
                            <div class="item col-md-6 col-lg-4" data-filter="Hardware">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog1.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024</li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="System-Optimization">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog2.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024</li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="Hardware">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog3.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024</li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="Server">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog2.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024
                                                </li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="SoftwareSolutions">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog3.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024
                                                </li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="SoftwareSolutions">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog1.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024
                                                </li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="SoftwareSolutions">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog2.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024
                                                </li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="Networking">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog2.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024
                                                </li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="System-Optimization">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog3.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024
                                                </li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="Server">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog1.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024
                                                </li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="Hardware">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog2.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024
                                                </li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="AMC">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog1.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024
                                                </li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="AMC">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog2.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024
                                                </li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="Networking">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog1.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024
                                                </li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="Networking">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog2.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024
                                                </li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="ITStrategy">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog1.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024
                                                </li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item col-md-6 col-lg-4" data-filter="ITStrategy">
                                <div class="blog_item">
                                    <a href="blog-details.php">
                                        <div class="blog-content">
                                            <div class="img">
                                                <img src="assets/images/blog/blog2.png" alt="">
                                            </div>
                                            <h3>Essential Tips for Data Backup and Recovery</h3>
                                            <ul>
                                                <li><img src="assets/images/blog/author.png" alt="">Michael Brown</li>
                                                <li><img src="assets/images/blog/cal.png" alt="">August 16, 2024
                                                </li>
                                            </ul>
                                            <span>Read More</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
               </div>
               <div class="pagination">
                   <button class="page-btn prev" type="button">Prev</button>
                   <ul class="pegintionlist">
                    <li><a href="#!" class="active">1</a></li>
                    <li><a href="#!">2</a></li>
                    <li><a href="#!">3</a></li>
                    <li><a href="#!">...</a></li>
                    <li><a href="#!">10</a></li>
                   </ul>
                    <button class="page-btn next" type="button">Next</button>
               </div>
            </section>
        </main>
        <!-- Main Body - end -->
        <!-- Footer -->
        <?php include "front_include/footer.php"; ?>
        <!-- Mobile Sidebar -->
        <?php include "front_include/mobile-sidebar.php"; ?>
    </div>
    <?php include "front_include/footer_script.php"; ?>

</body>

</html>