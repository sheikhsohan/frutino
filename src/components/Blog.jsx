
import ShapeOne from '../../public/Image/shape/vector_shape_1.png';
import ShapeTwo from '../../public/Image/shape/vector_shape_2.png';import { blogData } from './constant/data';

const Blog = () => {
  return (
    <section className="overflow-hidden space bg-smoke3" id="blog-sec">
      <div className="shape-mockup" data-top="0" data-left="0">
        <img src={ShapeOne} alt="shape" />
      </div>
      <div className="shape-mockup" data-bottom="0" data-right="0">
        <img src={ShapeTwo} alt="shape" />
      </div>
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-end">
          <div className="col-lg">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title">
                <img src="Image/theme-img/title_icon.svg" alt="Icon" />Blog & News
              </span>
              <h2 className="sec-title">Latest Updates & News</h2>
            </div>
          </div>
          <div className="col-lg-auto d-none d-lg-block">
            <div className="sec-btn">
              <a href="blog.html" className="th-btn">
                View More Post
                <i className="fas fa-chevrons-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {blogData.map((post) => (
            <div className="col-xl-6" key={post.id}>
              <div className="blog-box">
                <div className="blog-img">
                  <img src={post.image} alt="blog image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="far fa-user"></i>By {post.author}
                    </a>
                    <a href="blog.html">
                      <i className="far fa-calendar"></i>{post.date}
                    </a>
                  </div>
                  <h3 className="box-title">
                    <a href="blog-details.html">{post.title}</a>
                  </h3>
                  <p className="box-text">{post.text}</p>
                  <a href="blog-details.html" className="th-btn">
                    Read More
                    <i className="fas fa-chevrons-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
