const body = document.querySelector("body");

const footerInfo = document.createElement("div");
footerInfo.className = "footer_info";

const footerContentInfo = document.createElement("section");
footerContentInfo.className = "footer_content_info";

const footerLinkInfo = document.createElement("div");
footerLinkInfo.className = "footer_link_info";
footerLinkInfo.innerHTML = `<div>
                                    <h4>Products</h4>
                                    <ul>
                                        <li><a href="">Heroku Platform</a></li>
                                        <li><a href="">Heroku Data Services</a></li>
                                        <li><a href="">Heroku Postgres</a></li>
                                        <li><a href="">Heroku Data for Redis</a></li>
                                        <li><a href="">Apache Kafka on Heroku</a></li>
                                        <li><a href="">Heroku Enterprise</a></li>
                                        <li><a href="">Heroku Private Spaces</a></li>
                                        <li><a href="">Heroku Connect</a></li>
                                        <li><a href="">Heroku Shield</a></li>
                                        <li><a href="">Heroku Teams</a></li>
                                        <li><a href="">Elements Marketplace</a></li>
                                        <li><a href="">Pricing</a></li>
                                    </ul>
                            </div>
                            <div>
                                    <h4>Resources</h4>
                                    <ul>
                                        <li><a href="">Documentation</a></li>
                                        <li><a href="">Compliance Center</a></li>
                                        <li><a href="">Training & Education</a></li>
                                        <li><a href="">Blog</a></li>
                                        <li><a href="">Podcasts</a></li>
                                        <li><a href="">Get Started</a></li>
                                    </ul>
                            </div>
                            <div>
                                    <h4>About</h4>
                                    <ul>
                                        <li><a href="">About Us</a></li>
                                        <li><a href="">What is Heroku</a></li>
                                        <li><a href="">Heroku & Salesforce</a></li>
                                        <li><a href="">Our Customers</a></li>
                                        <li><a href="">Careers</a></li>
                                        <li><a href="">Partners</a></li>
                                        <li><a href="">Elements Marketplace</a></li>
                                    </ul>
                            </div>
                            <div>
                                    <h4>Support</h4>
                                    <ul>
                                        <li><a href="">Help Center</a></li>
                                        <li><a href="">Status</a></li>
                                        <li><a href="">Premium Support</a></li>
                                        <li><a href="">Contact Us</a></li>
                                    </ul>
                            </div>`;

const footerSocial = document.createElement("div");
footerSocial.className = "fotter_social";

const h3 = document.createElement("h3");
h3.innerHTML = `<img src="./footer icons/Heading 3.png" alt="" id="img-icon">`;

const formSocial = document.createElement("form");
formSocial.className = "footer_email";
formSocial.innerHTML = `<label for="">Your email address:</label>
<input type="email">
<button class="footer_social_btn"><img src="./footer icons/Input.png" alt=""></button>`;

const footerSocialLi = document.createElement("ul");
footerSocialLi.className = "footer_social_li";
footerSocialLi.innerHTML = `<li><a href=""><img src="./footer icons/1.png" alt=""></a></li>
<li><a href=""><img src="./footer icons/2.png" alt=""></a></li>
<li><a href=""><img src="./footer icons/3.png" alt=""></a></li>
<li><a href=""><img src="./footer icons/4.png" alt=""></a></li>
<li><a href=""><img src="./footer icons/5.png" alt=""></a></li>
<li><a href=""><img src="./footer icons/6.png" alt=""></a></li>
<li><a href=""><img src="./footer icons/7.png" alt=""></a></li>
<li><a href=""><img src="./footer icons/8.png" alt="" class="footer_social_icons"></a></li>`;

body.prepend(footerInfo);
footerInfo.append(footerContentInfo);
footerContentInfo.append(footerLinkInfo, footerSocial);
footerSocial.append(h3, formSocial, footerSocialLi);
